fetch('https://www.bank.lv/vk/ecb.xml')
  .then(response => response.json())
  .then(data => console.log(data));