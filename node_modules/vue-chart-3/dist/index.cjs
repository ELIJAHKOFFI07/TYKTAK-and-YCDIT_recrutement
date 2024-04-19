var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  BarChart: () => BarChart,
  BubbleChart: () => BubbleChart,
  DoughnutChart: () => DoughnutChart,
  LineChart: () => LineChart,
  PieChart: () => PieChart,
  PolarAreaChart: () => PolarAreaChart,
  RadarChart: () => RadarChart,
  ScatterChart: () => ScatterChart,
  defineChartComponent: () => defineChartComponent,
  defineChartHook: () => defineChartHook,
  useBarChart: () => useBarChart,
  useBubbleChart: () => useBubbleChart,
  useDoughnutChart: () => useDoughnutChart,
  useLineChart: () => useLineChart,
  usePieChart: () => usePieChart,
  usePolarAreaChart: () => usePolarAreaChart,
  useRadarChart: () => useRadarChart,
  useScatterChart: () => useScatterChart
});

// src/core/component.builder.ts
var Chartjs = __toESM(require("chart.js"), 1);
var import_lodash_es = require("lodash-es");

// src/utils/format.utils.ts
function pascalCase(str) {
  return (str.match(/[a-zA-Z0-9]+/g) || []).map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join("");
}

// src/core/component.builder.ts
var import_vue = require("vue");
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
  return (0, import_vue.defineComponent)({
    name: componentName,
    props: propsDefs,
    emits: {
      "labels:update": () => true,
      "chart:update": (chartInstance) => true,
      "chart:destroy": () => true,
      "chart:render": (chartInstance) => true
    },
    setup(props, { emit, expose }) {
      const canvasRef = (0, import_vue.ref)(null);
      const canvasId = `${props.chartId}`;
      let chartInstance = (0, import_vue.shallowRef)(null);
      (0, import_vue.watch)(() => props.chartData, watchHandler, { deep: true });
      (0, import_vue.watch)(() => props.options, (newOptions) => {
        if (chartInstance.value && newOptions) {
          chartInstance.value.options = (0, import_lodash_es.cloneDeep)(newOptions);
          handleChartUpdate();
        }
      }, { deep: true });
      function watchHandler(newData) {
        if (chartInstance.value) {
          let chart = chartInstance.value;
          if (!(0, import_lodash_es.isEqual)(newData.labels, chartInstance.value.data.labels)) {
            chart.data.labels = newData.labels;
            handleLabelsUpdate();
          }
          if (!(0, import_lodash_es.isEqual)(newData.datasets, chartInstance.value.data.datasets)) {
            newData.datasets.forEach((dataset, index) => {
              var _a, _b;
              if (!(0, import_lodash_es.isEmpty)(dataset)) {
                const oldData = (0, import_lodash_es.cloneDeep)(chart.data);
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
                  const attrValue = (0, import_lodash_es.cloneDeep)(dataset[attribute]);
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
            data: (0, import_lodash_es.cloneDeep)(props.chartData),
            type: chartType,
            options: (0, import_lodash_es.cloneDeep)(props.options),
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
      (0, import_vue.onMounted)(renderChart);
      (0, import_vue.onBeforeUnmount)(() => {
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
      return () => (0, import_vue.h)("div", {
        style: __spreadProps(__spreadValues({
          maxWidth: "100%"
        }, props.styles), {
          position: "relative"
        }),
        class: props.cssClasses
      }, [
        (0, import_vue.h)("canvas", {
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
var import_vue2 = require("vue");
var defineChartHook = (chartType) => {
  return (params) => {
    const CHART_REF_NAME = `${chartType}ChartRef`;
    const _struct = {
      [CHART_REF_NAME]: (0, import_vue2.ref)()
    };
    const reactiveProps = (0, import_vue2.computed)(() => __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, params), params.jsx && {
      ref: _struct[CHART_REF_NAME]
    }), !params.jsx && {
      ref: CHART_REF_NAME
    }), {
      chartData: (0, import_vue2.unref)(params.chartData),
      options: (0, import_vue2.unref)(params.options)
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
module.exports = __toCommonJS(src_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
