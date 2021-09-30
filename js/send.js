var formdata = new FormData();
formdata.append("sender_fullname", "Daler ");
formdata.append("sender_city_id", "1 ");
formdata.append("sender_address", "qwert ");
formdata.append("sender_phone", "123456789 ");
formdata.append("recipient_fullname", "jamshed ");
formdata.append("recipient_city_id", "1 ");
formdata.append("recipient_address", "qwertyuiop ");
formdata.append("recipient_phone", "987654321 ");
formdata.append("delivery_rate_id", "3 ");
formdata.append("delivery_option_id", "1 ");
formdata.append("pick_time", "2021-09-20 12:11:34 ");
formdata.append("cargo_type_id", "1 ");
formdata.append("cargo_weight", 12);
formdata.append("cargo_count", "5 ");
formdata.append("cargo_desc", "123456789 ");
formdata.append("sum_order", 123);
formdata.append("user_create_order", "d ");
formdata.append("driver_id", "1");



fetch("http://localhost:8000/orders", {
  method: 'POST',
  body: formdata,
})
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));