export const updateUser = (userData, success, error) => {
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
