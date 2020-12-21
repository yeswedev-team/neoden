module.exports = {
  extends: ['standard', 'standard-react', 'plugin:import/errors', 'plugin:import/warnings'],
  rules: {
    'object-curly-spacing': ['error', 'never'],
    'react/react-in-jsx-scope': "off",
    'react/prop-types': 'off'
  },
  settings: {
    react: {
      pragma: 'React',
      version: '17.0.1'
    }
  },
  parser: 'babel-eslint'
}
