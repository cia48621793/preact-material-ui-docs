import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

/**
 * With a `label` applied to each `MenuItem`, `SelectField` displays
 * a complementary description of the selected item.
 */
export default class SelectFieldExampleCustomLabel extends Component {
  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <SelectField value={this.state.value} onChange={this.handleChange}>
        <MenuItem value={1} label="5 am - 12 pm" primaryText="Morning" />
        <MenuItem value={2} label="12 pm - 5 pm" primaryText="Afternoon" />
        <MenuItem value={3} label="5 pm - 9 pm" primaryText="Evening" />
        <MenuItem value={4} label="9 pm - 5 am" primaryText="Night" />
      </SelectField>
    );
  }
}
