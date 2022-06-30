/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fontSizes} from '../constants';
import {CheckBox, Icon} from '@rneui/themed';
export default function DropDown({data, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Radio data={data} />
      <Text
        style={{
          fontSize: fontSizes.h6,
          color: colors.colorText,
        }}>
        {data.title}
      </Text>
    </TouchableOpacity>
  );
}
const Radio = ({data}) => {
  return (
    <CheckBox
      checkedIcon={
        <Icon
          name="radio-button-checked"
          type="material"
          color="green"
          size={20}
        />
      }
      uncheckedIcon={
        <Icon
          name="radio-button-unchecked"
          type="material"
          color="grey"
          size={20}
        />
      }
      checked={data.isCheck}
    />
  );
};
const styles = StyleSheet.create({});
