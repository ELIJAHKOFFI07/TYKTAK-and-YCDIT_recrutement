var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/core/component.builder.ts
import * as Chartjs from "chart.js";
import { cloneDeep, isEmpty, isEqual } from "lodash-es";

// src/utils/format.utils.ts
function pascalCase(str) {
  return (str.match(/[a-zA-Z0-9]+/g) || []).map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join("");
}

// src/core/component.builder.ts
import {
  defineComponent,
  h,
  onBeforeUnmount,
  onMounted,
  ref,
  shallowRef,
  watch
} from "vue";
var defineChartComponent = (chartName, chartType) => {
  const propsDefs = {
    chartData: { type: Object, required: true },
    options: { type: Object, required: false },
    chartId: { default: chartName, type: String },
    width: { default: 400, type: Number },
    height: { default: 400, type: Number },
    cssClasses: { type: String, default: "" },
    styles: { type: Object },
    plugins: { type: Array, default: () => [] },
    onLabelsUpdate: { type: Function },
    onChartUpdate: { type: Function },
    onChartDestroy: { type: Function },
    onChartRender: { type: Function }
  };
  const componentName = pascalCase(chartName);
  return defineComponent({
    name: componentName,
    props: propsDefs,
    emits: {
      "labels:update": () => true,
      "chart:update": (chartInstance) => true,
      "chart:destroy": () => true,
      "chart:render": (chartInstance) => true
    },
    setup(props, { emit, expose }) {
      const canvasRef = ref(null);
      const canvasId = `${props.chartId}`;
      let chartInstance = shallowRef(null);
      watch(() => props.chartData, watchHandler, { deep: true });
      watch(() => props.options, (newOptions) => {
        if (chartInstance.value && newOptions) {
          chartInstance.value.options = cloneDeep(newOptions);
          handleChartUpdate();
        }
      }, { deep: true });
      function watchHandler(newData) {
        if (chartInstance.value) {
          let chart = chartInstance.value;
          if (!isEqual(newData.labels, chartInstance.value.data.labels)) {
            chart.data.labels = newData.labels;
            handleLabelsUpdate();
          }
          if (!isEqual(newData.datasets, chartInstance.value.data.datasets)) {
            newData.datasets.forEach((dataset, index) => {
              var _a, _b;
              if (!isEmpty(dataset)) {
                const oldData = cloneDeep(chart.data);
                const oldDatasetKeys = Object.keys((_b = (_a = oldData.datasets) == null ? void 0 : _a[index]) != null ? _b : {});
                const newDatasetKeys = Object.keys(dataset);
                const deletionKeys = oldDatasetKeys.filter((key) => {
                  return key !== "_meta" && newDatasetKeys.indexOf(key) === -1;
                });
                deletionKeys.forEach((deletionKey) => {
                  if (chart.data.datasets[index]) {
                    delete chart.data.datasets[index][deletionKey];
                  }
                });
                for (const attribute in dataset) {
                  const attrValue = cloneDeep(dataset[attribute]);
                  let datasetItem = chart.data.datasets[index];
                  if (!datasetItem) {
                    chart.data.datasets[index] = {};
                  }
                  if (dataset.hasOwnProperty(attribute) && attrValue != null && chart) {
                    chart.data.datasets[index][attribute] = attrValue;
                  }
                }
              } else {
                chart.data.datasets = [];
              }
            });
          }
          handleChartUpdate();
        } else {
          if (chartInstance.value) {
            handleChartDestroy();
          }
          renderChart();
        }
      }
      function renderChart() {
        if (canvasRef.value) {
          chartInstance.value = new Chartjs.Chart(canvasRef.value, {
            data: cloneDeep(props.chartData),
            type: chartType,
            options: cloneDeep(props.options),
            plugins: props.plugins
          });
          handleChartRender();
        } else {
          console.error(`Error on component ${componentName}, canvas cannot be rendered. Check if the render appends server-side`);
        }
      }
      function handleLabelsUpdate() {
        emit("labels:update");
        props.onLabelsUpdate && props.onLabelsUpdate();
      }
      function handleChartRender() {
        if (chartInstance.value) {
          emit("chart:render", chartInstance.value);
          props.onChartRender && props.onChartRender(chartInstance.value);
        }
      }
      function handleChartUpdate() {
        if (chartInstance.value) {
          chartInstance.value.update();
          emit("chart:update", chartInstance.value);
          props.onChartUpdate && props.onChartUpdate(chartInstance.value);
        }
      }
      function handleChartDestroy() {
        chartInstance.value && chartInstance.value.destroy();
        emit("chart:destroy");
        props.onChartDestroy && props.onChartDestroy();
      }
      onMounted(renderChart);
      onBeforeUnmount(() => {
        if (chartInstance.value) {
          chartInstance.value.destroy();
        }
      });
      expose({
        canvasRef,
        renderChart,
        chartInstance,
        canvasId,
        update: handleChartUpdate
      });
      return () => h("div", {
        style: __spreadProps(__spreadValues({
          maxWidth: "100%"
        }, props.styles), {
          position: "relative"
        }),
        class: props.cssClasses
      }, [
        h("canvas", {
          style: {
            maxWidth: "100%",
            maxHeight: "100%"
          },
          id: canvasId,
          width: props.width,
          height: props.height,
          ref: canvasRef
        })
      ]);
    }
  });
};

// src/hooks/hooks.builder.ts
import { computed as computed2, ref as ref2, unref } from "vue";
var defineChartHook = (chartType) => {
  return (params) => {
    const CHART_REF_NAME = `${chartType}ChartRef`;
    const _struct = {
      [CHART_REF_NAME]: ref2()
    };
    const reactiveProps = computed2(() => __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, params), params.jsx && {
      ref: _struct[CHART_REF_NAME]
    }), !params.jsx && {
      ref: CHART_REF_NAME
    }), {
      chartData: unref(params.chartData),
      options: unref(params.options)
    }));
    function update() {
      var _a;
      const chartComponentRef = _struct[CHART_REF_NAME].value;
      if (chartComponentRef) {
        (_a = chartComponentRef == null ? void 0 : chartComponentRef.chartInstance.value) == null ? void 0 : _a.update();
      } else {
        console.warn(`No chartInstance to update (use${pascalCase(chartType)}Chart)`);
      }
    }
    return {
      [`${chartType}ChartProps`]: reactiveProps,
      [CHART_REF_NAME]: _struct[CHART_REF_NAME],
      update
    };
  };
};

// src/exports/component.exports.ts
var BarChart = defineChartComponent("bar-chart", "bar");
var DoughnutChart = defineChartComponent("doughnut-chart", "doughnut");
var LineChart = defineChartComponent("line-chart", "line");
var PieChart = defineChartComponent("pie-chart", "pie");
var PolarAreaChart = defineChartComponent("polar-chart", "polarArea");
var RadarChart = defineChartComponent("radar-chart", "radar");
var BubbleChart = defineChartComponent("bubble-chart", "bubble");
var ScatterChart = defineChartComponent("scatter-chart", "scatter");

// src/exports/hooks.exports.ts
var useDoughnutChart = defineChartHook("doughnut");
var useBarChart = defineChartHook("bar");
var useLineChart = defineChartHook("line");
var usePieChart = defineChartHook("pie");
var usePolarAreaChart = defineChartHook("polarArea");
var useRadarChart = defineChartHook("radar");
var useBubbleChart = defineChartHook("bubble");
var useScatterChart = defineChartHook("scatter");
export {
  BarChart,
  BubbleChart,
  DoughnutChart,
  LineChart,
  PieChart,
  PolarAreaChart,
  RadarChart,
  ScatterChart,
  defineChartComponent,
  defineChartHook,
  useBarChart,
  useBubbleChart,
  useDoughnutChart,
  useLineChart,
  usePieChart,
  usePolarAreaChart,
  useRadarChart,
  useScatterChart
};
