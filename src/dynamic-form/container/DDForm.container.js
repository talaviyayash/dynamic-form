const DDFormContainer = ({ state, setState, error, setError, configArray }) => {
  const handelChangeType = ({ e, patterns, name }) => {
    const value = e.target.value;
    const errorMsg = patterns?.filter(({ regex }) => {
      const isValid = value.match(regex);
      return !isValid;
    });
    setError((prev) => ({ ...prev, [name]: errorMsg[0]?.error ?? "" }));
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handelChangeCheckBox = ({ e, name }) => {
    if (e.target.checked) {
      setState((prev) => ({
        ...prev,
        [name]: [...(prev?.[name]?.value || []), e.target.value],
      }));
    } else {
      const filteredHobby = state?.[name]?.filter(
        (value) => !(e.target.value === value)
      );
      setError((prev) => ({
        ...prev,
        [name]:
          filteredHobby.length === 0 ? "please fill this field properly" : "",
      }));

      setState((prev) => ({
        ...prev,
        [name]: [...filteredHobby],
      }));
    }
  };
  return {
    state,
    setState,
    handelChangeType,
    handelChangeCheckBox,
    error,
  };
};

export default DDFormContainer;
Structuer;
