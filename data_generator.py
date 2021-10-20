from os import listdir
from os.path import isfile, join
import time

subfolder = input("Enter the name of the subfolder: ")

mypath = './assets/sounds/' + subfolder + '/'

onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]
result = "["


for fileName in onlyfiles:
    req = "require('../../assets/sounds/" + subfolder + "/" + fileName + "')"
    f = fileName[:-4]
    f = f.replace("_", " ")
    result += "{caregory: '" + subfolder + "', name: '" + f + "', source: " + req + "},"
    

textFile = open("result.txt","w+")
textFile.write(result)
textFile.close()

print('\nDone. Press enter to exit.')
input()
