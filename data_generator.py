from os import listdir
from os.path import isfile, join
import time


idCounter = 0
categories = ['forsen', 'donation']
result = "const sources = ["

for c in categories:
    mypath = './assets/sounds/' + c + '/'
    soundFiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]
    for fileName in soundFiles:
        req = "require('../../assets/sounds/" + c + "/" + fileName + "')"
        f = fileName[:-4]
        f = f.replace("_", " ")
        result += "{id: " + str(idCounter) + ", category: '" + \
            c + "', name: '" + f + "', source: " + req + "}, "
        idCounter += 1

result += "];\n\nexport default sources;"

textFile = open("result.txt", "w+")
textFile.write(result)
textFile.close()

print('\nDone. Press enter to exit.')
input()
