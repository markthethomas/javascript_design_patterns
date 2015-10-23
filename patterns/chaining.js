const chainModule = (() => {
  const privateValue = 'private';

  function privateMethod() {
    console.log('I am a private method');
  }
  return {
    publicValue: 'public',
    publicMethod() {
      privateMethod();
      console.log('public method called!');
      return this;
    },
    exposeprivateValue() {
      console.log(privateValue);
      return this;
    },
  };
})();

chainModule.publicMethod().exposeprivateValue();
