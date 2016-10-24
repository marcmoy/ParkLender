export const updateUser = (user, success) => {
  const error = data => console.log(data);
  $.ajax({
    method: 'GET',
    url: `api/users/${user.id}`,
    data: user,
    dataType: 'json',
    success,
    error
  });
};
