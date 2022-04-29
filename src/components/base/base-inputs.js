import BaseInput from './BaseInput/BaseInput';

const BaseInputGeneric = ( { label, required, value, placeholder, onChange } ) => (
    <BaseInput {...{ label, required, placeholder, onChange }}/>
)
const BaseInputPassword = ( { label, required, value, onChange } ) => (
    <BaseInput {...{ label, required, onChange }}  type="password"/>
)

export {BaseInputGeneric, BaseInputPassword}
