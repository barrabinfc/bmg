#!/usr/bin/env python

import os,requests,sys

if len(sys.argv) < 2:
    print "Please inform a folder containing images only"
    sys.exit(0)

path  = sys.argv[1]
files = os.listdir(path)

for filename in files:
    if filename[-3:] not in ['JPG','jpg','GIF','gif','PNG','png']:
        print "Not a image file (%s). Skipping..." % filename
        continue
    
    data = {'approved': 'on', 'name': filename}
    f = open(path + filename,'rb')
    response = requests.post('http://localhost:8080/photos/upload', data=data, files={'image': f})
    f.close()
    print  "Uploading photo %s...%s" % (filename,response.status_code)
