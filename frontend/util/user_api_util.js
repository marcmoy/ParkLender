export const updateUser = (userData, success) => {
  const error = result => console.log(result);
  let data = {user: userData};
  $.ajax({
    method: 'PATCH',
    url: `api/users/${userData.id}`,
    data: data,
    dataType: 'json',
    success,
    error
  });
};
