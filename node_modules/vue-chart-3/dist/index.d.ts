import * as chart_js_types_basic from 'chart.js/types/basic';
import * as chart_js_types_utils from 'chart.js/types/utils';
import * as vue from 'vue';
import { Ref, ShallowRef, PropType, DefineComponent, ComputedOptions, MethodOptions, ComponentOptionsMixin, ComputedRef, Prop, ComponentPublicInstance } from 'vue';
import * as chart_js from 'chart.js';
import { ChartType, Chart, Plugin, ChartData } from 'chart.js';
import { CSSProperties } from '@vue/runtime-dom';
import { ComponentPropsOptions } from '@vue/runtime-core';

declare type StyleValue = string | CSSProperties | Array<StyleValue>;

declare type ComponentData<T extends ChartType> = {
    canvasRef: Ref<HTMLCanvasElement | undefined>;
    renderChart: () => void;
    chartInstance: ShallowRef<Chart<T> | null>;
    canvasId: string;
    update: () => void;
};
declare type ChartComponentEmits<TType extends ChartType> = {
    'labels:update': () => void;
    'chart:update': (chartInstance: Chart<TType>) => void;
    'chart:destroy': () => void;
    'chart:render': (chartInstance: Chart<TType>) => void;
};
declare type ChartPropsOptions<TType extends ChartType> = {
    options: {
        type: PropType<Record<string, any>>;
        required: false;
    };
    chartId: {
        default: string;
        type: StringConstructor;
    };
    width: {
        default: 400;
        type: NumberConstructor;
    };
    height: {
        default: 400;
        type: NumberConstructor;
    };
    cssClasses: {
        type: StringConstructor;
        default: string;
    };
    styles: {
        type: PropType<StyleValue>;
    };
    plugins: {
        type: PropType<Plugin[]>;
        default: () => any[];
    };
    chartData: {
        type: PropType<ChartData<TType>>;
        required: true;
    };
    onLabelsUpdate: {
        type: PropType<() => void>;
    };
    onChartUpdate: {
        type: PropType<(chartInstance: Chart<TType>) => void>;
    };
    onChartDestroy: {
        type: PropType<() => void>;
    };
    onChartRender: {
        type: PropType<(chartInstance: Chart<TType>) => void>;
    };
};

declare const defineChartComponent: <TType extends keyof chart_js.ChartTypeRegistry = keyof chart_js.ChartTypeRegistry>(chartName: string, chartType: TType) => DefineComponent<ChartPropsOptions<TType>, ComponentData<TType>, unknown, ComputedOptions, MethodOptions, ComponentOptionsMixin, ComponentOptionsMixin, ChartComponentEmits<TType>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<ChartPropsOptions<TType>>> & {
    "onLabels:update"?: (() => any) | undefined;
    "onChart:update"?: ((chartInstance: Chart<TType, chart_js_types_utils.DistributiveArray<chart_js.ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>) => any) | undefined;
    "onChart:destroy"?: (() => any) | undefined;
    "onChart:render"?: ((chartInstance: Chart<TType, chart_js_types_utils.DistributiveArray<chart_js.ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>) => any) | undefined;
}, {
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
    plugins: Plugin<keyof chart_js.ChartTypeRegistry, chart_js_types_basic.AnyObject>[];
}>;

declare type MaybeRef<T> = T | Ref<T> | ComputedRef<T>;
declare type ExtractComponentProps<T> = T extends DefineComponent<infer TProps, any, any, any, any, any, any, any> ? TProps extends ComponentPropsOptions ? ExtractPropTypes<TProps> : TProps : never;
declare type ExtractComponentData<T> = T extends DefineComponent<any, infer TData, any, any, any, any, any, any> ? TData : never;
declare type RequiredKeys<T> = {
    [K in keyof T]: T[K] extends {
        required: true;
    } | {
        default: any;
    } | BooleanConstructor | {
        type: BooleanConstructor;
    } ? T[K] extends {
        default: undefined | (() => undefined);
    } ? never : K : never;
}[keyof T];
declare type InferPropType<T> = [T] extends [null] ? any : [T] extends [
    {
        type: null | true;
    }
] ? any : [T] extends [
    ObjectConstructor | {
        type: ObjectConstructor;
    }
] ? Record<string, any> : [T] extends [
    BooleanConstructor | {
        type: BooleanConstructor;
    }
] ? boolean : [T] extends [
    DateConstructor | {
        type: DateConstructor;
    }
] ? Date : [T] extends [
    (infer U)[] | {
        type: (infer U)[];
    }
] ? U extends DateConstructor ? Date | InferPropType<U> : InferPropType<U> : [T] extends [Prop<infer V, infer D>] ? unknown extends V ? D : V : T;
declare type OptionalKeys<T> = Exclude<keyof T, RequiredKeys<T>>;
declare type ExtractPropTypes<O> = O extends object ? {
    [K in RequiredKeys<O>]: InferPropType<O[K]>;
} & {
    [K in OptionalKeys<O>]?: InferPropType<O[K]>;
} : {
    [K in string]: any;
};

interface HookOptions<TType extends ChartType, TJSX = false> extends ChartPropsOptions<TType> {
    ref?: TJSX extends true ? Ref<any> : string;
}
declare type DumbTypescript = 0;
declare type ChartHookReturnType<TType extends ChartType, TJSX = false> = {
    [K in DumbTypescript as `${TType}ChartRef`]: Ref<ComponentPublicInstance<ChartPropsOptions<TType>, ComponentData<TType>> | null>;
} & {
    [K in DumbTypescript as `${TType}ChartProps`]: Ref<ExtractPropTypes<HookOptions<TType, TJSX>>>;
} & {
    update: () => void;
};

declare const defineChartHook: <TType extends keyof chart_js.ChartTypeRegistry = keyof chart_js.ChartTypeRegistry, TJSX = false>(chartType: TType) => (params: {
    chartData: MaybeRef<ChartData<TType, chart_js_types_utils.DistributiveArray<chart_js.ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>>;
    options?: MaybeRef<Record<string, any>> | undefined;
    width?: number | undefined;
    height?: number | undefined;
    cssClasses?: string | undefined;
    styles?: StyleValue | undefined;
    plugins?: Plugin<keyof chart_js.ChartTypeRegistry, chart_js_types_basic.AnyObject>[] | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: Chart<TType, chart_js_types_utils.DistributiveArray<chart_js.ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: Chart<TType, chart_js_types_utils.DistributiveArray<chart_js.ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>) => void) | undefined;
    jsx?: boolean | undefined;
}) => ChartHookReturnType<TType, TJSX>;

declare const BarChart: vue.DefineComponent<ChartPropsOptions<"bar">, ComponentData<"bar">, unknown, vue.ComputedOptions, vue.MethodOptions, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, ChartComponentEmits<"bar">, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<ChartPropsOptions<"bar">>> & {
    "onLabels:update"?: (() => any) | undefined;
    "onChart:update"?: ((chartInstance: chart_js.Chart<"bar", number[], unknown>) => any) | undefined;
    "onChart:destroy"?: (() => any) | undefined;
    "onChart:render"?: ((chartInstance: chart_js.Chart<"bar", number[], unknown>) => any) | undefined;
}, {
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
    plugins: chart_js.Plugin<keyof chart_js.ChartTypeRegistry, chart_js_types_basic.AnyObject>[];
}>;
declare const DoughnutChart: vue.DefineComponent<ChartPropsOptions<"doughnut">, ComponentData<"doughnut">, unknown, vue.ComputedOptions, vue.MethodOptions, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, ChartComponentEmits<"doughnut">, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<ChartPropsOptions<"doughnut">>> & {
    "onLabels:update"?: (() => any) | undefined;
    "onChart:update"?: ((chartInstance: chart_js.Chart<"doughnut", number[], unknown>) => any) | undefined;
    "onChart:destroy"?: (() => any) | undefined;
    "onChart:render"?: ((chartInstance: chart_js.Chart<"doughnut", number[], unknown>) => any) | undefined;
}, {
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
    plugins: chart_js.Plugin<keyof chart_js.ChartTypeRegistry, chart_js_types_basic.AnyObject>[];
}>;
declare const LineChart: vue.DefineComponent<ChartPropsOptions<"line">, ComponentData<"line">, unknown, vue.ComputedOptions, vue.MethodOptions, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, ChartComponentEmits<"line">, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<ChartPropsOptions<"line">>> & {
    "onLabels:update"?: (() => any) | undefined;
    "onChart:update"?: ((chartInstance: chart_js.Chart<"line", (number | chart_js.ScatterDataPoint | null)[], unknown>) => any) | undefined;
    "onChart:destroy"?: (() => any) | undefined;
    "onChart:render"?: ((chartInstance: chart_js.Chart<"line", (number | chart_js.ScatterDataPoint | null)[], unknown>) => any) | undefined;
}, {
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
    plugins: chart_js.Plugin<keyof chart_js.ChartTypeRegistry, chart_js_types_basic.AnyObject>[];
}>;
declare const PieChart: vue.DefineComponent<ChartPropsOptions<"pie">, ComponentData<"pie">, unknown, vue.ComputedOptions, vue.MethodOptions, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, ChartComponentEmits<"pie">, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<ChartPropsOptions<"pie">>> & {
    "onLabels:update"?: (() => any) | undefined;
    "onChart:update"?: ((chartInstance: chart_js.Chart<"pie", number[], unknown>) => any) | undefined;
    "onChart:destroy"?: (() => any) | undefined;
    "onChart:render"?: ((chartInstance: chart_js.Chart<"pie", number[], unknown>) => any) | undefined;
}, {
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
    plugins: chart_js.Plugin<keyof chart_js.ChartTypeRegistry, chart_js_types_basic.AnyObject>[];
}>;
declare const PolarAreaChart: vue.DefineComponent<ChartPropsOptions<"polarArea">, ComponentData<"polarArea">, unknown, vue.ComputedOptions, vue.MethodOptions, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, ChartComponentEmits<"polarArea">, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<ChartPropsOptions<"polarArea">>> & {
    "onLabels:update"?: (() => any) | undefined;
    "onChart:update"?: ((chartInstance: chart_js.Chart<"polarArea", number[], unknown>) => any) | undefined;
    "onChart:destroy"?: (() => any) | undefined;
    "onChart:render"?: ((chartInstance: chart_js.Chart<"polarArea", number[], unknown>) => any) | undefined;
}, {
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
    plugins: chart_js.Plugin<keyof chart_js.ChartTypeRegistry, chart_js_types_basic.AnyObject>[];
}>;
declare const RadarChart: vue.DefineComponent<ChartPropsOptions<"radar">, ComponentData<"radar">, unknown, vue.ComputedOptions, vue.MethodOptions, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, ChartComponentEmits<"radar">, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<ChartPropsOptions<"radar">>> & {
    "onLabels:update"?: (() => any) | undefined;
    "onChart:update"?: ((chartInstance: chart_js.Chart<"radar", (number | null)[], unknown>) => any) | undefined;
    "onChart:destroy"?: (() => any) | undefined;
    "onChart:render"?: ((chartInstance: chart_js.Chart<"radar", (number | null)[], unknown>) => any) | undefined;
}, {
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
    plugins: chart_js.Plugin<keyof chart_js.ChartTypeRegistry, chart_js_types_basic.AnyObject>[];
}>;
declare const BubbleChart: vue.DefineComponent<ChartPropsOptions<"bubble">, ComponentData<"bubble">, unknown, vue.ComputedOptions, vue.MethodOptions, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, ChartComponentEmits<"bubble">, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<ChartPropsOptions<"bubble">>> & {
    "onLabels:update"?: (() => any) | undefined;
    "onChart:update"?: ((chartInstance: chart_js.Chart<"bubble", chart_js.BubbleDataPoint[], unknown>) => any) | undefined;
    "onChart:destroy"?: (() => any) | undefined;
    "onChart:render"?: ((chartInstance: chart_js.Chart<"bubble", chart_js.BubbleDataPoint[], unknown>) => any) | undefined;
}, {
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
    plugins: chart_js.Plugin<keyof chart_js.ChartTypeRegistry, chart_js_types_basic.AnyObject>[];
}>;
declare const ScatterChart: vue.DefineComponent<ChartPropsOptions<"scatter">, ComponentData<"scatter">, unknown, vue.ComputedOptions, vue.MethodOptions, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, ChartComponentEmits<"scatter">, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<ChartPropsOptions<"scatter">>> & {
    "onLabels:update"?: (() => any) | undefined;
    "onChart:update"?: ((chartInstance: chart_js.Chart<"scatter", (number | chart_js.ScatterDataPoint | null)[], unknown>) => any) | undefined;
    "onChart:destroy"?: (() => any) | undefined;
    "onChart:render"?: ((chartInstance: chart_js.Chart<"scatter", (number | chart_js.ScatterDataPoint | null)[], unknown>) => any) | undefined;
}, {
    chartId: string;
    width: number;
    height: number;
    cssClasses: string;
    plugins: chart_js.Plugin<keyof chart_js.ChartTypeRegistry, chart_js_types_basic.AnyObject>[];
}>;

declare const useDoughnutChart: (params: {
    chartData: MaybeRef<chart_js.ChartData<"doughnut", number[], unknown>>;
    options?: MaybeRef<Record<string, any>> | undefined;
    width?: number | undefined;
    height?: number | undefined;
    cssClasses?: string | undefined;
    styles?: StyleValue | undefined;
    plugins?: chart_js.Plugin<keyof chart_js.ChartTypeRegistry, chart_js_types_basic.AnyObject>[] | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: chart_js.Chart<"doughnut", number[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: chart_js.Chart<"doughnut", number[], unknown>) => void) | undefined;
    jsx?: boolean | undefined;
}) => ChartHookReturnType<"doughnut", false>;
declare const useBarChart: (params: {
    chartData: MaybeRef<chart_js.ChartData<"bar", number[], unknown>>;
    options?: MaybeRef<Record<string, any>> | undefined;
    width?: number | undefined;
    height?: number | undefined;
    cssClasses?: string | undefined;
    styles?: StyleValue | undefined;
    plugins?: chart_js.Plugin<keyof chart_js.ChartTypeRegistry, chart_js_types_basic.AnyObject>[] | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: chart_js.Chart<"bar", number[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: chart_js.Chart<"bar", number[], unknown>) => void) | undefined;
    jsx?: boolean | undefined;
}) => ChartHookReturnType<"bar", false>;
declare const useLineChart: (params: {
    chartData: MaybeRef<chart_js.ChartData<"line", (number | chart_js.ScatterDataPoint | null)[], unknown>>;
    options?: MaybeRef<Record<string, any>> | undefined;
    width?: number | undefined;
    height?: number | undefined;
    cssClasses?: string | undefined;
    styles?: StyleValue | undefined;
    plugins?: chart_js.Plugin<keyof chart_js.ChartTypeRegistry, chart_js_types_basic.AnyObject>[] | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: chart_js.Chart<"line", (number | chart_js.ScatterDataPoint | null)[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: chart_js.Chart<"line", (number | chart_js.ScatterDataPoint | null)[], unknown>) => void) | undefined;
    jsx?: boolean | undefined;
}) => ChartHookReturnType<"line", false>;
declare const usePieChart: (params: {
    chartData: MaybeRef<chart_js.ChartData<"pie", number[], unknown>>;
    options?: MaybeRef<Record<string, any>> | undefined;
    width?: number | undefined;
    height?: number | undefined;
    cssClasses?: string | undefined;
    styles?: StyleValue | undefined;
    plugins?: chart_js.Plugin<keyof chart_js.ChartTypeRegistry, chart_js_types_basic.AnyObject>[] | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: chart_js.Chart<"pie", number[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: chart_js.Chart<"pie", number[], unknown>) => void) | undefined;
    jsx?: boolean | undefined;
}) => ChartHookReturnType<"pie", false>;
declare const usePolarAreaChart: (params: {
    chartData: MaybeRef<chart_js.ChartData<"polarArea", number[], unknown>>;
    options?: MaybeRef<Record<string, any>> | undefined;
    width?: number | undefined;
    height?: number | undefined;
    cssClasses?: string | undefined;
    styles?: StyleValue | undefined;
    plugins?: chart_js.Plugin<keyof chart_js.ChartTypeRegistry, chart_js_types_basic.AnyObject>[] | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: chart_js.Chart<"polarArea", number[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: chart_js.Chart<"polarArea", number[], unknown>) => void) | undefined;
    jsx?: boolean | undefined;
}) => ChartHookReturnType<"polarArea", false>;
declare const useRadarChart: (params: {
    chartData: MaybeRef<chart_js.ChartData<"radar", (number | null)[], unknown>>;
    options?: MaybeRef<Record<string, any>> | undefined;
    width?: number | undefined;
    height?: number | undefined;
    cssClasses?: string | undefined;
    styles?: StyleValue | undefined;
    plugins?: chart_js.Plugin<keyof chart_js.ChartTypeRegistry, chart_js_types_basic.AnyObject>[] | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: chart_js.Chart<"radar", (number | null)[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: chart_js.Chart<"radar", (number | null)[], unknown>) => void) | undefined;
    jsx?: boolean | undefined;
}) => ChartHookReturnType<"radar", false>;
declare const useBubbleChart: (params: {
    chartData: MaybeRef<chart_js.ChartData<"bubble", chart_js.BubbleDataPoint[], unknown>>;
    options?: MaybeRef<Record<string, any>> | undefined;
    width?: number | undefined;
    height?: number | undefined;
    cssClasses?: string | undefined;
    styles?: StyleValue | undefined;
    plugins?: chart_js.Plugin<keyof chart_js.ChartTypeRegistry, chart_js_types_basic.AnyObject>[] | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: chart_js.Chart<"bubble", chart_js.BubbleDataPoint[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: chart_js.Chart<"bubble", chart_js.BubbleDataPoint[], unknown>) => void) | undefined;
    jsx?: boolean | undefined;
}) => ChartHookReturnType<"bubble", false>;
declare const useScatterChart: (params: {
    chartData: MaybeRef<chart_js.ChartData<"scatter", (number | chart_js.ScatterDataPoint | null)[], unknown>>;
    options?: MaybeRef<Record<string, any>> | undefined;
    width?: number | undefined;
    height?: number | undefined;
    cssClasses?: string | undefined;
    styles?: StyleValue | undefined;
    plugins?: chart_js.Plugin<keyof chart_js.ChartTypeRegistry, chart_js_types_basic.AnyObject>[] | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: chart_js.Chart<"scatter", (number | chart_js.ScatterDataPoint | null)[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: chart_js.Chart<"scatter", (number | chart_js.ScatterDataPoint | null)[], unknown>) => void) | undefined;
    jsx?: boolean | undefined;
}) => ChartHookReturnType<"scatter", false>;

export { BarChart, BubbleChart, DoughnutChart, ExtractComponentData, ExtractComponentProps, LineChart, PieChart, PolarAreaChart, RadarChart, ScatterChart, defineChartComponent, defineChartHook, useBarChart, useBubbleChart, useDoughnutChart, useLineChart, usePieChart, usePolarAreaChart, useRadarChart, useScatterChart };
