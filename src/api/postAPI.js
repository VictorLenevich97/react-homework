export async function formFetch(form, setIsFormsubmit, setIsErrorCatch) {
  try {
    let response = await fetch("https://studapi.teachmeskills.by/auth/users/", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (response.ok) {
      setIsFormsubmit(true);
      return result;
    } else {
      setIsErrorCatch(true);
    }
  } catch (setIsErrorCatch) {
    setIsErrorCatch(true);
  }
}
