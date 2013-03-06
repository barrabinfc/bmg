from django.core.management.base import BaseCommand
from django.core.files.base import File
from genitalia.models import Genitalia

from django.conf import settings

import sys, uuid, os

def query_yes_no(question, default="yes"):
    """Ask a yes/no question via raw_input() and return their answer.

    "question" is a string that is presented to the user.
    "default" is the presumed answer if the user just hits <Enter>.
        It must be "yes" (the default), "no" or None (meaning
        an answer is required of the user).

    The "answer" return value is one of "yes" or "no".
    """
    valid = {"yes":True,   "y":True,  "ye":True,
             "no":False,     "n":False}
    if default == None:
        prompt = " [y/n] "
    elif default == "yes":
        prompt = " [Y/n] "
    elif default == "no":
        prompt = " [y/N] "
    else:
        raise ValueError("invalid default answer: '%s'" % default)

    while True:
        sys.stdout.write(question + prompt)
        choice = raw_input().lower()
        if default is not None and choice == '':
            return valid[default]
        elif choice in valid:
            return valid[choice]
        else:
            sys.stdout.write("Please respond with 'yes' or 'no' "\
                             "(or 'y' or 'n').\n")
    

class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        all_genitalias = Genitalia.objects.all()[:1]
        query_yes_no("Renaming %d photos. Proceed?" % all_genitalias.count() )

        for gen in all_genitalias:
            img = gen.image
            
            (basepath,filename) = os.path.split( img.name )
            ext                 = filename.split('.')[-1]
            
            
            # Rename
            new_file =     '%s/%s.%s' % (basepath, uuid.uuid4(),ext)
            print u"Renaming %s to %s" % (img.name, new_file )
            
            print os.path.join( settings.MEDIA_ROOT, img.name )
            
            os.rename(  os.path.join( settings.MEDIA_ROOT , img.name) , 
                        os.path.join( settings.MEDIA_ROOT , new_file) )
            
            # Save to db
            img.name = new_file
            gen.save()
            
            #os.rename( img.name , new_file )
            #img.save( new_file, File(img,'r') , save=True )
            
            #try:
            #new_file = '%s.%s' % (basepath, new_filename,ext)
            #print u"Renaming %s to %s.%s" % (filename, new_file )
                
            #os.rename( img.path , new_file )
            #img.path = new_file
                
                #img.save()
            #except:
            #    print basepath                
            #    print new_filename