# Installation

Install basic deps

    $ sudo apt-get install pip python python-dev virtualenv git

Create the project structure

    $ mkdir bancogenital/{app,venv,backups,static}
    $ git clone $URL app

Setup python env

    $ virtualenv venv
    $ source venv/bin/activate

    $ pip install -r app/requirements.txt

Now try to run

    $ cd app
    $ ./manage.py validate

## Production settings

A `UWSGI.ini` file is included. Don't forget to change **mypath** 

```
[uwsgi]

mypath = /Users/frangossauro/work/Projects/bancogenital

socket = /tmp/genitalia.me.sock
chmod-socket = 644
processes = 1
harakiri = 10

env = DJANGO_SETTINGS_MODULE=settings
module = django.core.handlers.wsgi:WSGIHandler()
DJANGO_DEBUG = no

python-path = %(mypath)/app
wsgi-file = %(mypath)/app/wsgi.py
virtualenv = %(mypath)/venv
callable = "application"

; disable-logging
; vacuum
; no-orphans
```

    $ uwsgi --ini uwsgi.ini
