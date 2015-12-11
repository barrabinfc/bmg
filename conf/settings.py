# Django settings for app project.
import os

try:
    import uwsgi

    PROJECT_ROOT = uwsgi.opt['mypath'] or os.path.abspath( os.getcwd() )
    DEBUG = (uwsgi.opt['DJANGO_DEBUG'] == 'no' ) or True
except:
    PROJECT_ROOT = os.path.abspath( os.getcwd() )
    DEBUG = True

TEMPLATE_DEBUG = DEBUG

ADMINS = (
    ('barrabinfc', 'barrabin.fc@gmail.com'),
)

MANAGERS = ADMINS

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',                 # Add 'postgresql_psycopg2', 'mysql', 'sqlite3' or 'oracle'.
        'NAME':     'bancogenital',                      # Or path to database file if using sqlite3.
        'USER':     'bancogenital',                      # Not used with sqlite3.
        'PASSWORD': 'hotlineblaft',                  # Not used with sqlite3.
        'HOST': '',                      # Set to empty string for localhost. Not used with sqlite3.
        'PORT': '',                      # Set to empty string for default. Not used with sqlite3.
    }
}

CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.locmem.LocMemCache'
    }
}

# Local time zone for this installation. Choices can be found here:
# http://en.wikipedia.org/wiki/List_of_tz_zones_by_name
# although not all choices may be available on all operating systems.
# On Unix systems, a value of None will cause Django to use the same
# timezone as the operating system.
# If running in a Windows environment this must be set to the same as your
# system time zone.
TIME_ZONE = 'America/Chicago'

# Language code for this installation. All choices can be found here:
# http://www.i18nguy.com/unicode/language-identifiers.html
LANGUAGE_CODE = 'en-us'

SITE_ID = 1

# If you set this to False, Django will make some optimizations so as not
# to load the internationalization machinery.
USE_I18N = False

# If you set this to False, Django will not format dates, numbers and
# calendars according to the current locale.
USE_L10N = False

# If you set this to False, Django will not use timezone-aware datetimes.
USE_TZ = False

# Absolute filesystem path to the directory that will hold user-uploaded files.
# Example: "/home/media/media.lawrence.com/media/"
MEDIA_ROOT = "%s/media/" % PROJECT_ROOT
MEDIA_URL = 'http://localhost:8000/media/'

# Absolute path to the directory static files should be collected to.
# Don't put anything in this directory yourself; store your static files
# in apps' "static/" subdirectories and in STATICFILES_DIRS.
# Example: "/home/media/media.lawrence.com/static/"
STATIC_ROOT = "%s/static/" % (PROJECT_ROOT)
STATIC_URL = 'http://localhost:8000/static/'

STATICFILES_DIRS = (
    '%s/media/assets' % (PROJECT_ROOT),
)

# List of finder classes that know how to find static files in
# various locations.
STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
)

# Make this unique, and don't share it with anybody.
SECRET_KEY = 'ok-g5u5og5%b(vgr!uz$q8mz^#t7(g$eempo_eg=40tx&amp;rq47u'

# List of callables that know how to import templates from various sources.
TEMPLATE_LOADERS = (
    'django.template.loaders.filesystem.Loader',
    'django.template.loaders.app_directories.Loader',
#     'django.template.loaders.eggs.Loader',
)

TEMPLATE_CONTEXT_PROCESSORS = (
    'django.contrib.auth.context_processors.auth',
    'django.core.context_processors.debug',
    'django.core.context_processors.media',
    'django.core.context_processors.static',
    "django.core.context_processors.request",

    'django.contrib.messages.context_processors.messages',

)

MIDDLEWARE_CLASSES = (
    'django.middleware.common.CommonMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',

    # Uncomment the next line for simple clickjacking protection:
    # 'django.middleware.clickjacking.XFrameOptionsMiddleware',
)

ROOT_URLCONF = 'urls'

# Python dotted path to the WSGI application used by Django's runserver.
WSGI_APPLICATION = 'wsgi.application'

TEMPLATE_DIRS = (
)

INSTALLED_APPS = (
    # Core part
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.messages',
    'django.contrib.sessions',

    'django.contrib.staticfiles',

    'grappelli.dashboard',
    'grappelli',
    'django.contrib.admin',

    'dbbackup',
    'genitalia'
)

# A sample logging configuration. The only tangible logging
# performed by this configuration is to send an email to
# the site admins on every HTTP 500 error when DEBUG=False.
# See http://docs.djangoproject.com/en/dev/topics/logging for
# more details on how to customize your logging configuration.
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'filters': {
        'require_debug_false': {
            '()': 'django.utils.log.RequireDebugFalse'
        }
    },
    'handlers': {
        'mail_admins': {
            'level': 'ERROR',
            'filters': ['require_debug_false'],
            'class': 'django.utils.log.AdminEmailHandler'
        }
    },
    'loggers': {
        'django.request': {
            'handlers': ['mail_admins'],
            'level': 'ERROR',
            'propagate': True,
        },
    }
}

DBBACKUP_STORAGE='dbbackup.storage.filesystem_storage'
DBBACKUP_FILESYSTEM_DIRECTORY=('%s/backups' % PROJECT_ROOT)
DBBACKUP_MEDIA_PATH='%s/photos' % (MEDIA_ROOT)

ON_PRODUCTION = False

THUMBS_SIZE = (
    (150,225),
    (600,900)
)

GRAPPELLI_ADMIN_TITLE='BMG - Banco MUNDIAL da genitalia'
GRAPPELLI_INDEX_DASHBOARD = 'dashboard.CustomIndexDashboard'
