import React from 'react';
import Parser from 'react-jsx-parser';
import * as questions from 'data';
import { Grid } from '@material-ui/core';
import {
  CustomInput,
  ItemGrid,
  MultiPurposeInput,
  RadioButtonGroup,
} from "components";
export default function QuestionFactory(props) {
  const { form, section, handleChange } = props;
  const html = markup(form, section)
  console.log('html,', html)
  return (
    <Parser
        bindings={{
          form: form,
          handleChange: handleChange,
        }}
        blacklistedAttrs={[]}
        components = {
          {
            CustomInput,
            Grid,
            ItemGrid,
            MultiPurposeInput,
            RadioButtonGroup
          }
        }
        jsx={html}
    />
  )
}
export function markup(form, section) {
  const sectionQuestions = questions[section] || [];
  const numberOfColumns = 2; // Number of item grids to display per row
  return sectionQuestions.reduce((jsx, question, idx, questArray) => {
    const labelText = setTemplateValue(question.text, form);
    const defaultValue = form[question.name];
    if (idx === 0) jsx += '<div><Grid container>';

    jsx += question.dataType === 'radio' ?
      renderRadioTemplate(question, labelText, numberOfColumns) :
      renderTemplate(question, labelText, numberOfColumns, defaultValue);

    if (idx + 1 === questArray.length) return jsx + '</Grid></div>';
    // Closing the last group of 3 and opening the next group
    if ((idx + 1) % numberOfColumns === 0) jsx += '</Grid><Grid container>';
    return jsx;
  }, '');
}

export function setTemplateValue(text, form) {
  const split = text.split(' ');
  const toBeReplaced = split.reduce((placeholders, str, idx) => {
    // template strings used in questions.json is `${}
    if (/`\${/.test(str)) {
      const splitSuffix = str.split('}`');
      placeholders[idx] = form[splitSuffix[0].replace(/[`${}]/g, '')] + (splitSuffix[1] || '');
    }
    return placeholders;
  }, {})
  const replacedText = split
    .map((str, idx) => toBeReplaced[idx] || str)
    .join(' ');

  return replacedText;
}

function renderTemplate(question, labelText, numberOfColumns, defaultValue) {
  const templateString = `<ItemGrid xs={12} sm={12} md={${12 / numberOfColumns}}>
            <MultiPurposeInput
              type="${question.dataType}"
              labelText="${labelText}"
              id="${question.qid}"
              formControlProps={{
                fullWidth: true,
                required: ${!!question.isRequired}
              }}
              inputProps={{
                name: "${question.name}",
                defaultValue: '${defaultValue || ''}',
                onChange: handleChange
              }}
              options={${makeOptionsJSONObject(question.options)}}
            />
          </ItemGrid>`;
  return templateString;
}

// TODO: Explore factoring this into renderTemplate
function renderRadioTemplate(question, labelText, numberOfColumns) {
  const templateString = `<ItemGrid xs={12} sm={12} md={${12 / numberOfColumns}}>
            <RadioButtonGroup
              labelText="${labelText}"
              id="${question.qid}"
              formControlProps={{
                fullWidth: true,
                component: "fieldset",
                required: ${!!question.isRequired}
              }}
              inputProps={{
                name: "${question.name}",
                defaultValue: form['${question.name}'],
                onChange: handleChange
              }}
              options={${makeOptionsJSONObject(question.options)}}
            />
          </ItemGrid>`;
  return templateString;
}

// Assumes options is an array of strings
function makeOptionsJSONObject(options) {
  let optionsArray = [];
  if (Array.isArray(options)) {
    optionsArray = options.map(option => ({
      value: camelCase(option),
      label: capitalize(option)
    }));
  }
  return JSON.stringify(optionsArray)
}

function capitalize(text) {
  return text
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

function camelCase(text) {
  return text
    .split(' ')
    .map((word, idx) => idx !== 0 ? capitalize(word) : word )
    .join('')  
}