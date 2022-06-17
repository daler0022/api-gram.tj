s = input()
s = s.replace(",", '},{"lng":')
s = s.replace(" ", ', "lat": ')
print('[{"lng":' + s + '}]')
