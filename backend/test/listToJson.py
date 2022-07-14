table = [['Sno.', 'Name', 'Genre'], ['1', 'Thor', 'Action'], ['2', 'Se7en', 'Thriller'], ['3', 'The Conjuring', 'Horror']]

keys = table[0]

values = table[1:]

finalData = []

for j in range(0, len(keys)):
  json_data = {}
  for i in range(0, len(keys)):
    json_data[str(keys[i])]=values[j][i]
  print(json_data)
  finalData.append(json_data)

print(finalData)