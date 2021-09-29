fetch('https://api.gram.tj/orders').then(response => {
    if (response.status === 200) {
      return response.json()
    }
  }).then(data => {
    console.log(data)  
    const table = document.getElementById('myTable')

      for(let i = 0; i < data.length; i++){
        let row = `<tr>
                      <td>${data[i].order_id}</td>
                      <td>${data[i].sender_fullname}</td>
                      <td>${data[i].sender_country_id}</td>
                      <td>${data[i].sender_city_id}</td>
                      <td>${data[i].sender_phone}</td>
                      <td>${data[i].sender_address}</td>
                      <td>${data[i].recipient_fullname}</td>
                      <td>${data[i].recipient_country_id}</td>
                      <td>${data[i].recipient_city_id}</td>
                      <td>${data[i].recipient_phone}</td>
                      <td>${data[i].recipient_address}</td>
                      <td>${data[i].delivery_rate_id}</td>
                      <td>${data[i].delivery_option_id}</td>
                      <td>${data[i].cargo_type_id}</td>
                      <td>${data[i].cargo_weight}</td>
                      <td>${data[i].cargo_desc}</td>
                      <td>${data[i].cargo_count}</td>
                      <td>${data[i].managers_desc}</td>
                      <td>${data[i].order_status_id}</td>
                      <td>${data[i].start_latitude}</td>
                      <td>${data[i].start_longitude}</td>
                      <td>${data[i].end_latitude}</td>
                      <td>${data[i].end_longitude}</td>
                      <td>${data[i].user_create_order}</td>
                      <td>${data[i].sum_order}</td>
                      <td>${data[i].pick_time}</td>
                      <td>${data[i].created_at}</td>
                      <td>${data[i].updated_at}</td>
                      <td>${data[i].cargo_type}</td>
                      <td>${data[i].city_id}</td>
                      <td>${data[i].city_name}</td>
                      <td>${data[i].option_id}</td>
                      <td>${data[i].option_name}</td>
                      <td>${data[i].rate_id}</td>
                      <td>${data[i].rate_name}</td>
                      <td>${data[i].order_status}</td>
                   </tr>`
                   table.innerHTML += row
      }
    });


  //  