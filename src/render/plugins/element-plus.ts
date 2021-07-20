import { Component, App } from 'vue';
import {
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElButton,
  ElInput,
  ElForm,
  ElFormItem,
  ElTable,
  ElCard,
  ElTableColumn,
  ElRow,
  ElCol,
} from 'element-plus';
const components: Component[] = [
  ElButton,
  ElInput,
  ElForm,
  ElFormItem,
  ElRow,
  ElCol,
  ElTable,
  ElTableColumn,
  ElCard,
];
const plugins = [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
];
const installElement = (app: App) => {
  components.forEach((component: Component) => {
    app.component(component.name as string, component);
  });

  plugins.forEach((plugin) => {
    app.use(plugin);
  });
};

export default installElement;
