const toggleShippingAddressContainer = _ => {
  $("#shipping-address-container").toggle(100)
}
$('.ui.checkbox').checkbox()
$('.ui.dropdown').dropdown()
$('#shipping-address-swtich').on('change',toggleShippingAddressContainer)
toggleShippingAddressContainer()

if($('[name="account[shipping_address][street_address]"]').val()){
  $('#shipping-address-swtich').click()
}
