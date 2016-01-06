## About

A infinite all-directions image gallery.

![alt tag](https://raw.githubusercontent.com/barrabinfc/bmg/master/media/assets/img/pugs.jpg)


# Installation

Install basic deps

If you are using MariaDB, ignore the mysql packages below and install only ```libmysqlclient-dev```

    $ sudo apt-get install python-pip python python-dev virtualenv git mysql mysql-server mysql-client mysql-common

Create the project structure

    $ mkdir bancogenital/{app,venv,backups,static}
	$ export PROJECT_ROOT=`pwd`/bancogenital

Download source code & backup.

	$ git clone $URL app
	$ curl DROPBOX_LINK > backups/genitalia_bkp.zip

Setup python env

    $ virtualenv venv
    $ source venv/bin/activate

    $ pip install -r app/requirements.txt

Now create a mysql DB with the same config listed in `settings.py`

	'default': {
	    'ENGINE': 	'django.db.backends.mysql',
	    'NAME':  	'bancogenital',             
	    'USER':     'bancogenital',             
	    'PASSWORD': '*******',                  
	}

## Generate front-end code

First you need to install the tools to minify/concat the front-end code.

    $ npm install package.json

Now you can run just grunt to compile js and css

    $ grunt

(grunt need to be installed globally. if it isn't, run ```npm install -g grunt``` before)

And for development purposes, you may use the `watch` function

    $ grunt watch


## Restoring the backup/shit

* First download the backups! Check this [DropBox page](https://www.dropbox.com/sh/oec6m0xu5c4lbbw/XEQ_Ujdcx7?m)

		$ cd backups

2. Unzip and import the old photos to the right location:

		$ unzip bancogenital-photos-%DATE%.zip -d ../app/media/photos/

3. Import the database...

		$ cd ../app
		$ ./manage dbrestore

    In some cases, like with docker, you may have to `dbrestore`
    manually:

        $ docker run ./manage.py diffsettings

        ... DATABASE_URL ...

        $ docker run apt-get install mariadb-client-core-5.5
        $ docker run mysql -uwww -P 3306 --protocol=tcp --host=172.17.0.57 -poy58ayVv7PY90LDF banco-www < /tmp/bancogenital-2014-11-26-053737.mysql

4. Collect staticfiles to their proper location (PROJECT_ROOT/static)

		$ ./manage collectstatic

## Finally!

    $ cd app
    $ ./manage.py validate
	0 errors found
	$ ./manage.py runserver 0.0.0.0:8080

## Production settings

A `UWSGI.production.ini` file is included. Don't forget to change **mypath**

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


    $ uwsgi --ini uwsgi.production.ini


You **should** also serve this paths directly, without django:

	/static/  			->  		PROJECT_ROOT/static
	/media/photos/  	-> 			PROJECT_ROOT/media/photos/

And run `./manage collectstatic` to fetch all files from `media/` to `static/`, otherwise,
`static/` will be empty.

## Making Backup

	$ cd $PROJECT_ROOT/app

Database

	$ ./manage dbbackup		

Photos

	$ zip bancogenital-photos-$(date +"%F").zip ../app/media/photos/*


Source code already has backup via ```git```.
