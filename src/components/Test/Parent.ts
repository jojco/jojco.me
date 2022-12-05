import { defineComponent } from "vue";

export default defineComponent({
  props: {
    message: String,
  },
  setup(props) {
    console.log("Hello from parrent: ", props.message);
  },
});
