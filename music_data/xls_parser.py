import xlrd
import json
import re

sheet = xlrd.open_workbook('werke.xls').sheet_by_index(0)
works_json = {"0" : {
  "name" : "example songname",
  "type" : "example type",
  "instruments" : ["example instrument 1", "example instrument 2", "example instrument 3"],
  "date" : "1990",
  "duration" : "01:00",
  "sample" : "no"}}

index = 0

delimiters = "und", "+", ","

regex_pattern = '|'.join(map(re.escape, delimiters))

instrument_set = set([])

for item in range(sheet.nrows)[1:]:
    active_row = sheet.row(item)

    if active_row[3].ctype != 0:

        index += 1
        song_info = {}
        song_info['name'] = active_row[2].value
        song_info['type'] = active_row[3].value
        song_info['date'] = active_row[4].value
        song_info['instruments_text'] = active_row[5].value
        song_info['instruments'] = re.split(regex_pattern, active_row[6].value)
        song_info['instruments'] = [i.strip() for i in song_info['instruments']]
        song_info['duration'] = active_row[7].value
        song_info['sample'] = 'no'
        works_json[index] = song_info

        for i in song_info['instruments']:
            instrument_set.add(i)

        #print(active_row[3].value)
    else:
        # print('YEAR ----- ' + str(active_row[2].value))
        pass

formatted_works = json.dumps(works_json, ensure_ascii=False, indent=4).encode('utf8')

instrument_list = list(instrument_set)
print(str(instrument_list))

with open('../js/worksJson.js', "w") as outfile:
    outfile.write("songJson = ")
    json.dump(works_json, outfile,ensure_ascii=False, indent=4 )
    outfile.write("\ninstrumentList = " + str(instrument_list))

#print(formatted_works.decode())
for i in instrument_set:
    print(i)
