import React from 'react';
import RadioControl from '../components/RadioButton';
import RadioGroup from '@material-ui/core/RadioGroup';
import { mount, shallow } from 'enzyme';

it('Checks Whether Radio Group is Present', () => {
    const element = mount(<RadioControl name='radio' />);
    expect(element.find(RadioGroup)).toHaveLength(1);
});

it('Checks for Radio Click Event', () => {
    const element = shallow(<RadioControl name='radio' />).dive();
    element.find(RadioGroup).simulate('change', { target: { value: '0' } });
    expect(element.state('value')).toBe('0');
})