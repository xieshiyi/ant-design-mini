import { InputDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';

Component({
  props: InputDefaultProps,
  data: {
    selfValue: undefined,
    selfFocus: false,
    selfControlled: false,
  },
  onInit() {
    this.setselfControlled = true;
    this.setDefaultValue();
  },
  didMount() {
    if (this.setselfControlled) {
      return;
    }
    this.setDefaultValue();
  },
  setselfControlled: false,
  methods: {
    setDefaultValue() {
      const selfValue = typeof this.props.value === 'undefined' ? this.props.defaultValue :this.props.value;
      const obj = {
        selfControlled: 'value' in this.props,
      };
      if (typeof selfValue !== 'undefined') {
        obj.selfValue = selfValue;
      }
      this.setData(obj);
    },
    onChange(value, e) {
      if (!this.data.selfControlled) {
        this.setData({
          selfValue: value,
        });
      }
      if (this.props.onChange) {
        this.props.onChange(value, fmtEvent(this.props, e));
      }
    },
    onFocus(e) {
      this.setData({
        selfFocus: true,
      });
      if (this.props.onFocus) {
        this.props.onFocus(fmtEvent(this.props, e));
      }
    },
    onBlur(e) {
      this.setData({
        selfFocus: false,
      });
      if (this.props.onBlur) {
        this.props.onBlur(fmtEvent(this.props, e));
      }
    },
    onConfirm(e) {
      if (this.props.onConfirm) {
        this.props.onConfirm(fmtEvent(this.props, e));
      }
    },
    onClear(e) {
      this.setData({
        selfValue: '',
      });
      if (this.props.onChange) {
        this.props.onChange('', fmtEvent(this.props, e));
      }
    },
  }
});

