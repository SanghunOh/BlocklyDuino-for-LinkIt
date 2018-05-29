/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview List blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.oled_display');

goog.require('Blockly.Blocks');

Blockly.Blocks['oled_display_setting'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.OLED_DISPLAY_HELPURL);
    this.setColour(215);
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_TITLE)
        .appendField(new Blockly.FieldDropdown([["SSD1306", "SSD1306"], ["SH1106", "SH1106"]]), "CHIPSET");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.OLED_DISPLAY_TOOLTIP);
  }
};

Blockly.Blocks['oled_display_clear'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.OLED_DISPLAY_HELPURL);
    this.setColour(215);
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_TITLE)
        .appendField(Blockly.Msg.OLED_DISPLAY_CLEAR);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.OLED_DISPLAY_TOOLTIP);
  }
};

Blockly.Blocks['oled_display_draw_commands'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.OLED_DISPLAY_HELPURL);
    this.setColour(215);
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_TITLE)
        .appendField(Blockly.Msg.OLED_DISPLAY_DRAW_COMMANDS)

    this.appendStatementInput('DRAW_CMD')

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.OLED_DISPLAY_TOOLTIP);
  }
};

Blockly.Blocks['oled_display_set_cursor'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.OLED_DISPLAY_HELPURL);
    this.setColour(215);
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_TITLE)
    this.appendValueInput('ROW')
        .setCheck('Number')
        .appendField(Blockly.Msg.OLED_DISPLAY_SET_CURSOR);
    this.appendValueInput('COL')
        .setCheck('Number')
        .appendField(Blockly.Msg.OLED_DISPLAY_SET_CURSOR_SEP);
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_SET_CURSOR_APPEND);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.OLED_DISPLAY_TOOLTIP);
  }
};

Blockly.Blocks['oled_display_put'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.OLED_DISPLAY_HELPURL);
    this.setColour(215);
    this.appendDummyInput()
        .appendField(Blockly.Msg.OLED_DISPLAY_TITLE)
        .appendField(Blockly.Msg.OLED_DISPLAY_PUT);
    this.appendValueInput('VALUE')
        .setCheck(["Number", "String", "Float"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.OLED_DISPLAY_TOOLTIP);
  }
};