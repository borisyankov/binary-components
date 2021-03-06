import React, { PureComponent } from 'react';
import Label from '../i18n/Label';

type Option = {
  text: string,
  value: string,
  disabled: boolean,
  group: string,
}

export default class SelectOptGroup extends PureComponent {
  props: {
    hint: string,
    id: string,
    className: string,
    label: string,
    options: Option[],
    disabled: boolean,
    value: string,
    onChange: (e: SyntheticEvent) => void,
  };

  static defaultProps = {
    options: [],
  };

  render() {
    const { className, id, label, hint, value, options, disabled, onChange } = this.props;
    const labels = options.map((a: Object) => a.group).filter((elem: string, index: number, self: Array<any>) => index === self.indexOf(elem));

    return (
      <fieldset className={className}>
        {label && <Label htmlFor={id} text={label} />}
        <select id={id} disabled={disabled} onChange={onChange} value={value}>
          {labels.map((l: string) =>
            (
              <optgroup label={l} key={l}>
                {options.map((o: Option) => o.group === l &&
                  <option key={o.value} value={o.value} disabled={o.disabled}>{o.text}</option>)}
              </optgroup>
            ))}
        </select>
        {hint && <p className="hint">{hint}</p>}
      </fieldset>
    );
  }
}
