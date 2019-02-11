import React, { Component } from 'react';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class Dropdown extends Component {

  render() {
    const {
      props: {
        data,
        dropdownId,
        label,
        name,
        handleChange,
        placeholder,
        autoWidth,
        value
      }
    } = this;

    return (
      <FormControl className="form-item">
        {
          label && <InputLabel htmlFor={dropdownId}>{label}</InputLabel>
        }
        <Select
          value={value}
          onChange={handleChange}
          autoWidth={autoWidth}
          inputProps={{
            name,
            id: dropdownId
          }}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            data.map(data =>
              <MenuItem
                value={data.value}
                key={`${dropdownId}-${data.value}`}
              >
                {data.label}
              </MenuItem>
            )
          }
        </Select>
      </FormControl>
    );
  }

}

Dropdown.propTypes = {
  data: PropTypes.array.isRequired
}

export default withStyles(styles)(Dropdown);;