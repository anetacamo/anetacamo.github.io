import React from "react";

export function Select({ onInputChange }) {
  return (
    <select
      id="country"
      name="country"
      onChange={(e) => onInputChange(e.target.value)}
    >
      <option>Select country</option>
      <option value="AT">Austria</option>
      <option value="BE">Belgium</option>
      <option value="BG">Bulgaria</option>
      <option value="HR">Croatia</option>
      <option value="CZ">Czech Republic</option>
      <option value="DK">Denmark</option>
      <option value="EE">Estonia</option>
      <option value="FI">Finland</option>
      <option value="FR">France</option>
      <option value="DE">Germany</option>
      <option value="GR">Greece</option>
      <option value="HU">Hungary</option>
      <option value="IS">Iceland</option>
      <option value="IE">Ireland</option>
      <option value="IT">Italy</option>
      <option value="LV">Latvia</option>
      <option value="LT">Lithuania</option>
      <option value="LU">Luxembourg</option>
      <option value="MT">Malta</option>
      <option value="NL">Netherlands</option>
      <option value="NO">Norway</option>
      <option value="PL">Poland</option>
      <option value="PT">Portugal</option>
      <option value="RO">Romania</option>
      <option value="SK">Slovakia</option>
      <option value="SI">Slovenia</option>
      <option value="ES">Spain</option>
      <option value="SE">Sweden</option>
    </select>
  );
}
export default Select;
