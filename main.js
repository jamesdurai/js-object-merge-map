const users = [
    {
      first_name: 'Mike',
      location: 'London'
    },
    {
      first_name: 'Tim',
      location: 'US'
    },
    {
      first_name: 'John',
      location: 'Australia'
    }
  ];
  
  const formattedStrings = users.map(user => `${user.first_name} lives in ${user.location}`);
  alert(formattedStrings);
  