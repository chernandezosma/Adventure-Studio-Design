// This file is (C) Carlos Sanchez 2014, released under the MIT license


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////// GLOBAL VARIABLES AND CONSTANTS ///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// CONSTANTS 
VOCABULARY_ID = 0;
VOCABULARY_WORD = 1;
VOCABULARY_TYPE = 2;

WORDTYPE_VERB = 0;
WORDTYPE_NOUN = 1
WORDTYPE_ADJECT = 2;
WORDTYPE_ADVERB = 3;
WORDTYPE_PRONOUN = 4;
WORDTYPE_CONJUNCTION = 5;
WORDTYPE_PREPOSITION = 6;

TIMER_MILLISECONDS  = 40;

RESOURCE_TYPE_IMG = 1;
RESOURCE_TYPE_SND = 2;

PROCESS_RESPONSE = 0;
PROCESS_DESCRIPTION = 1;
PROCESS_TURN = 2;

DIV_TEXT_SCROLL_STEP = 40;


// Aux
SET_VALUE = 255; // Value assigned by SET condact
EMPTY_WORD = 255; // Value for word types when no match is found (as for  sentences without adjective or name)
MAX_WORD_LENGHT = 10;  // Number of characters considered per word
FLAG_COUNT = 256;  // Number of flags
NUM_CONNECTION_VERBS = 14; // Number of verbs used as connection, from 0 to N - 1
NUM_CONVERTIBLE_NOUNS = 20;
NUM_PROPER_NOUNS = 50; // Number of proper nouns, can't be used as pronoun reference
EMPTY_OBJECT = 255; // To remark there is no object when the action requires a objno parameter
NO_EXIT = 255;  // If an exit does not exist, its value is this value
MAX_CHANNELS = 17; // Number of SFX channels
RESOURCES_DIR='dat/';


//Attributes
ATTR_LIGHT=0;			// Object produces light
ATTR_WEARABLE=1;		// Object is wearable
ATTR_CONTAINER=2;       // Object is a container
ATTR_NPC=3;             // Object is actually an NPC
ATTR_CONCEALED = 4; /// Present but not visible
ATTR_EDIBLE = 5;   /// Can be eaten
ATTR_DRINKABLE=6;
ATTR_ENTERABLE = 7;
ATTR_FEMALE = 8;
ATTR_LOCKABLE = 9;
ATTR_LOCKED = 10;
ATTR_MALE = 11;
ATTR_NEUTER=12;
ATTR_OPENABLE =13;
ATTR_OPEN=14;
ATTR_PLURALNAME = 15;
ATTR_TRANSPARENT=16;
ATTR_SCENERY=17;
ATTR_SUPPORTER = 18;
ATTR_SWITCHABLE=19;
ATTR_ON  =20;
ATTR_STATIC  =21;



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////// INTERNAL STRINGS ///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// General messages & strings
STR_NEWLINE = '<br />';
STR_PROMPT_START = '<span class="feedback">&gt; ';
STR_PROMPT_END = '</span>';
STR_RAMSAVE_FILENAME = 'RAMSAVE_SAVEGAME';



// Runtime error messages
STR_WRONG_SYSMESS = 'WARNING: System message requested does not exist.'; 
STR_WRONG_LOCATION = 'WARNING: Location requested does not exist.'; 
STR_WRONG_MESSAGE = 'WARNING: Message requested does not exist.'; 
STR_WRONG_PROCESS = 'WARNING: Process requested does not exist.' 
STR_RAMLOAD_ERROR= 'WARNING: You can\'t restore game as it has not yet been saved.'; 
STR_RUNTIME_VERSION  = 'ngPAWS runtime (C) 2014 Carlos Sanchez.  Released under {URL|http://www.opensource.org/licenses/MIT| MIT license}.\nBuzz sound libray (C) Jay Salvat. Released under the {URL|http://www.opensource.org/licenses/MIT| MIT license} \n jQuery (C) jQuery Foundation. Released under the {URL|https://jquery.org/license/| MIT license}.';
STR_TRANSCRIPT = 'To copy the transcript to your clipboard, press Ctrl+C, then press Enter';

STR_INVALID_TAG_SEQUENCE = 'Invalid tag sequence: ';
STR_INVALID_TAG_SEQUENCE_EMPTY = 'Invalid tag sequence.';
STR_INVALID_TAG_SEQUENCE_BADPARAMS = 'Invalid tag sequence: bad parameters.';
STR_INVALID_TAG_SEQUENCE_BADTAG = 'Invalid tag sequence: unknown tag.';
STR_BADIE = 'You are using a very old version of Internet Explorer. Some features of this product won\'t be avaliable, and other may not work properly. For a better experience please upgrade your browser or install some other one like Firefox, Chrome or Opera.\n\nIt\'s up to you to continue but be warned your experience may be affected.';
STR_INVALID_OBJECT = 'WARNING: Trying to access object that does not exist'


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////     FLAGS     ///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


FLAG_LIGHT = 0;
FLAG_OBJECTS_CARRIED_COUNT = 1;
FLAG_AUTODEC2 = 2; 
FLAG_AUTODEC3 = 3;
FLAG_AUTODEC4 = 4;
FLAG_AUTODEC5 = 5;
FLAG_AUTODEC6 = 6;
FLAG_AUTODEC7 = 7;
FLAG_AUTODEC8 = 8;
FLAG_AUTODEC9 = 9;
FLAG_AUTODEC10 = 10;
FLAG_ESCAPE = 11;
FLAG_PARSER_SETTINGS = 12;
FLAG_PICTURE_SETTINGS = 29
FLAG_SCORE = 30;
FLAG_TURNS_LOW = 31;
FLAG_TURNS_HIGH = 32;
FLAG_VERB = 33;
FLAG_NOUN1 =34;
FLAG_ADJECT1 = 35;
FLAG_ADVERB = 36;
FLAG_MAXOBJECTS_CARRIED = 37;
FLAG_LOCATION = 38;
FLAG_TOPLINE = 39;   // deprecated
FLAG_MODE = 40;  // deprecated
FLAG_PROTECT = 41;   // deprecated
FLAG_PROMPT = 42; 
FLAG_PREP = 43;
FLAG_NOUN2 = 44;
FLAG_ADJECT2 = 45;
FLAG_PRONOUN = 46;
FLAG_PRONOUN_ADJECT = 47;
FLAG_TIMEOUT_LENGTH = 48;
FLAG_TIMEOUT_SETTINGS = 49; 
FLAG_DOALL_LOC = 50;
FLAG_REFERRED_OBJECT = 51;
FLAG_MAXWEIGHT_CARRIED = 52;
FLAG_OBJECT_LIST_FORMAT = 53;
FLAG_REFERRED_OBJECT_LOCATION = 54;
FLAG_REFERRED_OBJECT_WEIGHT = 55;
FLAG_REFERRED_OBJECT_LOW_ATTRIBUTES = 56;
FLAG_REFERRED_OBJECT_HIGH_ATTRIBUTES = 57;
FLAG_EXPANSION1 = 58;
FLAG_EXPANSION2 = 59;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////// SPECIAL LOCATIONS ///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

LOCATION_WORN = 253;
LOCATION_CARRIED = 254;
LOCATION_NONCREATED = 252;
LOCATION_HERE = 255;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////  SYSTEM MESSAGES  ///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



SYSMESS_ISDARK = 0;
SYSMESS_YOUCANSEE = 1;
SYSMESS_PROMPT0 = 2;
SYSMESS_PROMPT1 = 3;
SYSMESS_PROMPT2 = 4
SYSMESS_PROMPT3= 5;
SYSMESS_IDONTUNDERSTAND = 6;
SYSMESS_WRONGDIRECTION = 7
SYSMESS_CANTDOTHAT = 8;
SYSMESS_YOUARECARRYING = 9;
SYSMESS_WORN = 10;
SYSMESS_CARRYING_NOTHING = 11;
SYSMESS_AREYOUSURE = 12;
SYSMESS_PLAYAGAIN = 13;
SYSMESS_FAREWELL = 14;
SYSMESS_OK = 15;
SYSMESS_PRESSANYKEY = 16;
SYSMESS_TURNS_START = 17;
SYSMESS_TURNS_CONTINUE = 18;
SYSMESS_TURNS_PLURAL = 19;
SYSMESS_TURNS_END = 20;
SYSMESS_SCORE_START= 21;
SYSMESS_SCORE_END =22;
SYSMESS_YOURENOTWEARINGTHAT = 23;
SYSMESS_YOUAREALREADYWEARINGTHAT = 24;
SYSMESS_YOUALREADYHAVEOBJECT = 25;
SYSMESS_CANTSEETHAT = 26;
SYSMESS_CANTCARRYANYMORE = 27;
SYSMESS_YOUDONTHAVETHAT = 28;
SYSMESS_YOUAREALREADYWAERINGOBJECT = 29;
SYSMESS_YES = 30;
SYSMESS_NO = 31;
SYSMESS_MORE = 32;
SYSMESS_CARET = 33;
SYSMESS_TIMEOUT=35;
SYSMESS_YOUTAKEOBJECT = 36;
SYSMESS_YOUWEAROBJECT = 37;
SYSMESS_YOUREMOVEOBJECT = 38;
SYSMESS_YOUDROPOBJECT = 39;
SYSMESS_YOUCANTWEAROBJECT = 40;
SYSMESS_YOUCANTREMOVEOBJECT = 41;
SYSMESS_CANTREMOVE_TOOMANYOBJECTS = 42;
SYSMESS_WEIGHSTOOMUCH = 43;
SYSMESS_YOUPUTOBJECTIN = 44;
SYSMESS_YOUCANTTAKEOBJECTOUTOF = 45;
SYSMESS_LISTSEPARATOR = 46;
SYSMESS_LISTLASTSEPARATOR = 47;
SYSMESS_LISTEND = 48;
SYSMESS_YOUDONTHAVEOBJECT = 49;
SYSMESS_YOUARENOTWEARINGOBJECT = 50;
SYSMESS_PUTINTAKEOUTTERMINATION = 51;
SYSMESS_THATISNOTIN = 52;
SYSMESS_EMPTYOBJECTLIST = 53;
SYSMESS_FILENOTFOUND = 54;
SYSMESS_CORRUPTFILE = 55;
SYSMESS_IOFAILURE = 56;
SYSMESS_DIRECTORYFULL = 57;
SYSMESS_LOADFILE = 58;
SYSMESS_FILENOTFOUND = 59;
SYSMESS_SAVEFILE = 60;
SYSMESS_SORRY = 61;
SYSMESS_NONSENSE_SENTENCE = 62;
SYSMESS_NPCLISTSTART = 63;
SYSMESS_NPCLISTCONTINUE = 64;
SYSMESS_NPCLISTCONTINUE_PLURAL = 65;
SYSMESS_INSIDE_YOUCANSEE = 66;
SYSMESS_OVER_YOUCANSEE = 67;
SYSMESS_YOUPUTOBJECTON = 68;
SYSMESS_YOUCANTTAKEOBJECTFROM = 69;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////// GLOBAL VARS //////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Parser vars
var last_player_orders = [];   // Store last player orders, to be able to restore it when pressing arrow up
var last_player_orders_pointer = 0;
var parser_word_found;
var player_order_buffer = '';
var previous_verb = EMPTY_WORD;
var previous_noun = EMPTY_WORD;
var previous_adject = EMPTY_WORD;
var pronoun_suffixes = [];


//Settings
var graphicsON = true; 
var soundsON = true; 
var interruptDisabled = false;
var showWarnings = true;

// waitkey commands callback function
var waitkey_callback_function = [];

//PAUSE
var inPause=false;
var pauseRemainingTime = 0;



// Transcript
var inTranscript = false;
var transcript = '';


// Block
var inBlock = false;
var unblock_process = null;


// END
var inEND = false;

//QUIT
var inQUIT = false;

//ANYKEY
var inAnykey = false;

//GETKEY
var inGetkey = false;
var getkey_return_flag = null;

// Status flags
var done_flag;
var describe_location_flag;
var in_response;
var success;

// doall control
var doall_flag;
var process_in_doall;
var entry_for_doall	= '';
var current_process;


var timeout_progress = 0;
var ramsave_value = null;
var num_objects;


// The flags
var flags = new Array();


// The sound channels
var soundChannels = [];
var soundLoopCount = [];

//The last free object attribute
var nextFreeAttr = 22;

//Autocomplete array
var autocomplete = new Array();
var autocompleteStep = 0;
var autocompleteBaseWord = '';
// PROCESSES

interruptProcessExists = true;

function pro000()
{
process_restart=true;
pro000_restart: while(process_restart)
{
	process_restart=false;
	// AGARRA ALL
	p000e0000:
	{
 		if (skipdoall('p000e0000')) break p000e0000;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0000;
			if (!CNDnoun1(20)) break p000e0000;
 		}
 		ACCobjat(getFlag(38),15);
		if (!CNDzero(15)) break p000e0000;
 		ACCwriteln(0);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARRA ALL
	p000e0001:
	{
 		if (skipdoall('p000e0001')) break p000e0001;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0001;
			if (!CNDnoun1(20)) break p000e0001;
 		}
		entry_for_doall = 'p000e0002';
		process_in_doall = 0;
 		ACCdoall(255);
		break pro000_restart;
		{}

	}

	// DEJA ALL
	p000e0002:
	{
 		if (skipdoall('p000e0002')) break p000e0002;
 		if (in_response)
		{
			if (!CNDverb(21)) break p000e0002;
			if (!CNDnoun1(20)) break p000e0002;
 		}
 		ACCobjat(254,15);
		if (!CNDzero(15)) break p000e0002;
 		ACCwriteln(1);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DEJA ALL
	p000e0003:
	{
 		if (skipdoall('p000e0003')) break p000e0003;
 		if (in_response)
		{
			if (!CNDverb(21)) break p000e0003;
			if (!CNDnoun1(20)) break p000e0003;
 		}
		entry_for_doall = 'p000e0004';
		process_in_doall = 0;
 		ACCdoall(254);
		break pro000_restart;
		{}

	}

	// VACIA _
	p000e0004:
	{
 		if (skipdoall('p000e0004')) break p000e0004;
 		if (in_response)
		{
			if (!CNDverb(86)) break p000e0004;
 		}
		if (!CNDnoteq(51,255)) break p000e0004;
		if (!CNDpresent(getFlag(51))) break p000e0004;
		if (!CNDonotzero(getFlag(51),2)) break p000e0004;
 		ACCcopyff(34,44);
 		ACCcopyff(35,45);
 		ACClet(33,75);
 		ACClet(34,20);
 		ACClet(43,3);
		{}

	}

	// EXTRAE _
	p000e0005:
	{
 		if (skipdoall('p000e0005')) break p000e0005;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0005;
 		}
 		ACCwhatox2(15);
		{}

	}

	// EXTRAE ALL
	p000e0006:
	{
 		if (skipdoall('p000e0006')) break p000e0006;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0006;
			if (!CNDnoun1(20)) break p000e0006;
 		}
		if (!CNDprep(3)) break p000e0006;
		if (!CNDnoteq(15,255)) break p000e0006;
		if (!CNDonotzero(getFlag(15),2)) break p000e0006;
 		ACCobjat(getFlag(15),14);
		if (!CNDnotcarr(getFlag(15))) break p000e0006;
 		ACCwriteln(2);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE ALL
	p000e0007:
	{
 		if (skipdoall('p000e0007')) break p000e0007;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0007;
			if (!CNDnoun1(20)) break p000e0007;
 		}
		if (!CNDprep(3)) break p000e0007;
		if (!CNDnoteq(15,255)) break p000e0007;
		if (!CNDonotzero(getFlag(15),2)) break p000e0007;
		if (!CNDcarried(getFlag(15))) break p000e0007;
 		ACCobjat(getFlag(15),14);
		if (!CNDzero(14)) break p000e0007;
 		ACCwriteln(3);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE ALL
	p000e0008:
	{
 		if (skipdoall('p000e0008')) break p000e0008;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0008;
			if (!CNDnoun1(20)) break p000e0008;
 		}
		if (!CNDprep(3)) break p000e0008;
		if (!CNDnoteq(15,255)) break p000e0008;
		if (!CNDonotzero(getFlag(15),2)) break p000e0008;
		if (!CNDcarried(getFlag(15))) break p000e0008;
		entry_for_doall = 'p000e0009';
		process_in_doall = 0;
 		ACCdoall(getFlag(15));
		break pro000_restart;
		{}

	}

	// ESCONDE _
	p000e0009:
	{
 		if (skipdoall('p000e0009')) break p000e0009;
 		if (in_response)
		{
			if (!CNDverb(91)) break p000e0009;
 		}
		if (!CNDnoteq(51,255)) break p000e0009;
		if (!CNDpresent(getFlag(51))) break p000e0009;
		if (!CNDprep(4)) break p000e0009;
 		ACCwhatox2(15);
		if (!CNDnoteq(15,255)) break p000e0009;
		if (!CNDpresent(getFlag(15))) break p000e0009;
 		ACClet(33,74);
 		ACClet(43,4);
		{}

	}

	// PON _
	p000e0010:
	{
 		if (skipdoall('p000e0010')) break p000e0010;
 		if (in_response)
		{
			if (!CNDverb(71)) break p000e0010;
 		}
		if (!CNDnoteq(51,255)) break p000e0010;
		if (!CNDpresent(getFlag(51))) break p000e0010;
		if (!CNDprep(4)) break p000e0010;
 		ACClet(33,74);
		{}

	}

	// ECHA _
	p000e0011:
	{
 		if (skipdoall('p000e0011')) break p000e0011;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0011;
 		}
 		ACCwhatox2(15);
		{}

	}

	// ECHA ALL
	p000e0012:
	{
 		if (skipdoall('p000e0012')) break p000e0012;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0012;
			if (!CNDnoun1(20)) break p000e0012;
 		}
		if (!CNDprep(4)) break p000e0012;
		if (!CNDnoteq(15,255)) break p000e0012;
		if (!CNDonotzero(getFlag(15),2)) break p000e0012;
		if (!CNDnotcarr(getFlag(15))) break p000e0012;
 		ACCwriteln(4);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA ALL
	p000e0013:
	{
 		if (skipdoall('p000e0013')) break p000e0013;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0013;
			if (!CNDnoun1(20)) break p000e0013;
 		}
		if (!CNDprep(4)) break p000e0013;
		if (!CNDnoteq(15,255)) break p000e0013;
		if (!CNDonotzero(getFlag(15),2)) break p000e0013;
		if (!CNDcarried(getFlag(15))) break p000e0013;
 		ACCobjat(254,14);
		if (!CNDeq(getFlag(14),1)) break p000e0013;
 		ACCwriteln(5);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA ALL
	p000e0014:
	{
 		if (skipdoall('p000e0014')) break p000e0014;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0014;
			if (!CNDnoun1(20)) break p000e0014;
 		}
		if (!CNDprep(4)) break p000e0014;
		if (!CNDnoteq(15,255)) break p000e0014;
		if (!CNDonotzero(getFlag(15),2)) break p000e0014;
		if (!CNDcarried(getFlag(15))) break p000e0014;
		entry_for_doall = 'p000e0015';
		process_in_doall = 0;
 		ACCdoall(254);
		break pro000_restart;
		{}

	}

	// DESVESTIR ALL
	p000e0015:
	{
 		if (skipdoall('p000e0015')) break p000e0015;
 		if (in_response)
		{
			if (!CNDverb(22)) break p000e0015;
			if (!CNDnoun1(20)) break p000e0015;
 		}
 		ACCobjat(253,15);
		if (!CNDzero(15)) break p000e0015;
 		ACCwriteln(6);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESVESTIR ALL
	p000e0016:
	{
 		if (skipdoall('p000e0016')) break p000e0016;
 		if (in_response)
		{
			if (!CNDverb(22)) break p000e0016;
			if (!CNDnoun1(20)) break p000e0016;
 		}
		entry_for_doall = 'p000e0017';
		process_in_doall = 0;
 		ACCdoall(253);
		break pro000_restart;
		{}

	}

	// PON ALL
	p000e0017:
	{
 		if (skipdoall('p000e0017')) break p000e0017;
 		if (in_response)
		{
			if (!CNDverb(71)) break p000e0017;
			if (!CNDnoun1(20)) break p000e0017;
 		}
 		ACCobjat(254,15);
		if (!CNDzero(15)) break p000e0017;
 		ACCwriteln(7);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PON ALL
	p000e0018:
	{
 		if (skipdoall('p000e0018')) break p000e0018;
 		if (in_response)
		{
			if (!CNDverb(71)) break p000e0018;
			if (!CNDnoun1(20)) break p000e0018;
 		}
		entry_for_doall = 'p000e0019';
		process_in_doall = 0;
 		ACCdoall(254);
		break pro000_restart;
		{}

	}

	// ARROJA ALL
	p000e0019:
	{
 		if (skipdoall('p000e0019')) break p000e0019;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0019;
			if (!CNDnoun1(20)) break p000e0019;
 		}
 		ACCobjat(254,15);
		if (!CNDzero(15)) break p000e0019;
 		ACCwriteln(8);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA ALL
	p000e0020:
	{
 		if (skipdoall('p000e0020')) break p000e0020;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0020;
			if (!CNDnoun1(20)) break p000e0020;
 		}
		if (!CNDeq(1,1)) break p000e0020;
		entry_for_doall = 'p000e0021';
		process_in_doall = 0;
 		ACCdoall(254);
		break pro000_restart;
		{}

	}

	// ARROJA ALL
	p000e0021:
	{
 		if (skipdoall('p000e0021')) break p000e0021;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0021;
			if (!CNDnoun1(20)) break p000e0021;
 		}
		if (!CNDgt(1,1)) break p000e0021;
 		ACCwriteln(9);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ ALL
	p000e0022:
	{
 		if (skipdoall('p000e0022')) break p000e0022;
 		if (in_response)
		{
			if (!CNDnoun1(20)) break p000e0022;
 		}
 		ACCwriteln(10);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANDA _
	p000e0023:
	{
 		if (skipdoall('p000e0023')) break p000e0023;
 		if (in_response)
		{
			if (!CNDverb(90)) break p000e0023;
 		}
		if (!CNDprep(13)) break p000e0023;
		if (!CNDeq(34,255)) break p000e0023;
 		ACClet(33,13);
		{}

	}

	// ANDA _
	p000e0024:
	{
 		if (skipdoall('p000e0024')) break p000e0024;
 		if (in_response)
		{
			if (!CNDverb(90)) break p000e0024;
 		}
		if (!CNDprep(4)) break p000e0024;
		if (!CNDeq(34,255)) break p000e0024;
 		ACClet(33,12);
		{}

	}

	// ANDA _
	p000e0025:
	{
 		if (skipdoall('p000e0025')) break p000e0025;
 		if (in_response)
		{
			if (!CNDverb(90)) break p000e0025;
 		}
		if (!CNDlt(34,14)) break p000e0025;
 		ACCcopyff(34,33);
		{}

	}

	// _ _
	p000e0026:
	{
 		if (skipdoall('p000e0026')) break p000e0026;
		if (!CNDprep(4)) break p000e0026;
		if (!CNDeq(33,255)) break p000e0026;
		if (!CNDeq(34,255)) break p000e0026;
 		ACClet(33,12);
 		ACClet(46,255);
		{}

	}

	// _ _
	p000e0027:
	{
 		if (skipdoall('p000e0027')) break p000e0027;
		if (!CNDprep(13)) break p000e0027;
		if (!CNDeq(33,255)) break p000e0027;
		if (!CNDeq(34,255)) break p000e0027;
 		ACClet(33,13);
 		ACClet(46,255);
		{}

	}

	// L _
	p000e0028:
	{
 		if (skipdoall('p000e0028')) break p000e0028;
 		if (in_response)
		{
			if (!CNDverb(24)) break p000e0028;
 		}
		if (!CNDnoteq(34,255)) break p000e0028;
		if (!CNDprep(4)) break p000e0028;
 		ACClet(33,30);
		{}

	}

	// L _
	p000e0029:
	{
 		if (skipdoall('p000e0029')) break p000e0029;
 		if (in_response)
		{
			if (!CNDverb(24)) break p000e0029;
 		}
		if (!CNDnoteq(34,255)) break p000e0029;
 		ACClet(33,30);
		{}

	}

	// L _
	p000e0030:
	{
 		if (skipdoall('p000e0030')) break p000e0030;
 		if (in_response)
		{
			if (!CNDverb(24)) break p000e0030;
 		}
		if (!CNDbnotzero(12,1)) break p000e0030;
 		ACClet(33,30);
		{}

	}

	// BUSCA _
	p000e0031:
	{
 		if (skipdoall('p000e0031')) break p000e0031;
 		if (in_response)
		{
			if (!CNDverb(78)) break p000e0031;
 		}
 		ACClet(33,30);
 		ACClet(43,4);
		{}

	}

	// ARRANCA _
	p000e0032:
	{
 		if (skipdoall('p000e0032')) break p000e0032;
 		if (in_response)
		{
			if (!CNDverb(79)) break p000e0032;
 		}
 		ACClet(33,32);
 		ACClet(43,3);
		{}

	}

	// EXITS _
	p000e0033:
	{
 		if (skipdoall('p000e0033')) break p000e0033;
 		if (in_response)
		{
			if (!CNDverb(41)) break p000e0033;
 		}
		if (!CNDeq(34,255)) break p000e0033;
		if (!CNDbnotzero(12,1)) break p000e0033;
 		ACClet(33,30);
		{}

	}

	// EXITS _
	p000e0034:
	{
 		if (skipdoall('p000e0034')) break p000e0034;
 		if (in_response)
		{
			if (!CNDverb(41)) break p000e0034;
 		}
		if (!CNDnoteq(34,255)) break p000e0034;
 		ACClet(33,30);
		{}

	}

	// CONSULTA _
	p000e0035:
	{
 		if (skipdoall('p000e0035')) break p000e0035;
 		if (in_response)
		{
			if (!CNDverb(107)) break p000e0035;
 		}
		if (!CNDnoteq(34,255)) break p000e0035;
		if (!CNDnoteq(51,255)) break p000e0035;
		if (!CNDonotzero(getFlag(51),3)) break p000e0035;
 		ACClet(33,142);
		{}

	}

	// _ _
	p000e0036:
	{
 		if (skipdoall('p000e0036')) break p000e0036;
		if (!CNDprep(9)) break p000e0036;
		if (!CNDbzero(12,2)) break p000e0036;
		if (!CNDnoteq(34,255)) break p000e0036;
 		ACCwhatox(16);
		if (!CNDnoteq(16,255)) break p000e0036;
		if (!CNDnoteq(44,255)) break p000e0036;
 		ACCwhatox2(15);
		if (!CNDnoteq(15,255)) break p000e0036;
 		ACCcopyff(34,14);
 		ACCcopyff(44,34);
 		ACCcopyff(14,44);
 		ACCcopyff(35,14);
 		ACCcopyff(45,35);
 		ACCcopyff(14,45);
 		ACCwhato();
		{}

	}

	// _ _
	p000e0037:
	{
 		if (skipdoall('p000e0037')) break p000e0037;
		if (!CNDprep(2)) break p000e0037;
		if (!CNDbzero(12,2)) break p000e0037;
		if (!CNDnoteq(34,255)) break p000e0037;
 		ACCwhatox(16);
		if (!CNDnoteq(16,255)) break p000e0037;
		if (!CNDnoteq(44,255)) break p000e0037;
 		ACCwhatox2(15);
		if (!CNDnoteq(15,255)) break p000e0037;
 		ACCcopyff(34,14);
 		ACCcopyff(44,34);
 		ACCcopyff(14,44);
 		ACCcopyff(35,14);
 		ACCcopyff(45,35);
 		ACCcopyff(14,45);
 		ACCwhato();
		{}

	}

	// _ _
	p000e0038:
	{
 		if (skipdoall('p000e0038')) break p000e0038;
		if (!CNDprep(4)) break p000e0038;
		if (!CNDbzero(12,2)) break p000e0038;
		if (!CNDnoteq(51,255)) break p000e0038;
		if (!CNDpresent(getFlag(51))) break p000e0038;
		if (!CNDonotzero(getFlag(51),2)) break p000e0038;
		if (!CNDnoteq(44,255)) break p000e0038;
 		ACCwhatox2(15);
		if (!CNDnoteq(15,255)) break p000e0038;
 		ACCcopyff(34,14);
 		ACCcopyff(44,34);
 		ACCcopyff(14,44);
 		ACCcopyff(35,14);
 		ACCcopyff(45,35);
 		ACCcopyff(14,45);
 		ACCwhato();
		{}

	}

	// _ _
	p000e0039:
	{
 		if (skipdoall('p000e0039')) break p000e0039;
		if (!CNDprep(3)) break p000e0039;
		if (!CNDbzero(12,2)) break p000e0039;
		if (!CNDnoteq(51,255)) break p000e0039;
		if (!CNDpresent(getFlag(51))) break p000e0039;
		if (!CNDonotzero(getFlag(51),2)) break p000e0039;
		if (!CNDnoteq(44,255)) break p000e0039;
 		ACCwhatox2(15);
		if (!CNDnoteq(15,255)) break p000e0039;
 		ACCcopyff(34,14);
 		ACCcopyff(44,34);
 		ACCcopyff(14,44);
 		ACCcopyff(35,14);
 		ACCcopyff(45,35);
 		ACCcopyff(14,45);
 		ACCwhato();
		{}

	}

	// EMPUJA ANTORCHA
	p000e0040:
	{
 		if (skipdoall('p000e0040')) break p000e0040;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0040;
			if (!CNDnoun1(50)) break p000e0040;
 		}
		if (!CNDat(5)) break p000e0040;
 		ACCgetexit(5,100);
		if (!CNDeq(100,255)) break p000e0040;
 		ACCsetexit(5,4);
 		ACCwriteln(11);
 		ACCpause(2);
 		function anykey00000() 
		{
 		ACCbeep(1264,14,1);
 		ACCdone();
		return;
		}
 		waitKey(anykey00000);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// EMPUJA ANTORCHA
	p000e0041:
	{
 		if (skipdoall('p000e0041')) break p000e0041;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0041;
			if (!CNDnoun1(50)) break p000e0041;
 		}
		if (!CNDat(5)) break p000e0041;
 		ACCgetexit(5,100);
		if (!CNDnotzero(100)) break p000e0041;
 		ACCwriteln(12);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA ANTORCHA
	p000e0042:
	{
 		if (skipdoall('p000e0042')) break p000e0042;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0042;
			if (!CNDnoun1(50)) break p000e0042;
 		}
		if (!CNDat(5)) break p000e0042;
 		ACCgetexit(5,100);
		if (!CNDnoteq(100,255)) break p000e0042;
 		ACCclearexit(5);
 		ACCwriteln(13);
 		ACCpause(2);
 		function anykey00001() 
		{
 		ACCbeep(1265,14,1);
 		ACCdone();
		return;
		}
 		waitKey(anykey00001);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// ARROJA ANTORCHA
	p000e0043:
	{
 		if (skipdoall('p000e0043')) break p000e0043;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0043;
			if (!CNDnoun1(50)) break p000e0043;
 		}
		if (!CNDat(5)) break p000e0043;
 		ACCgetexit(5,100);
		if (!CNDeq(100,255)) break p000e0043;
 		ACCwriteln(14);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX CHIMENEA
	p000e0044:
	{
 		if (skipdoall('p000e0044')) break p000e0044;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0044;
			if (!CNDnoun1(56)) break p000e0044;
 		}
		if (!CNDat(1)) break p000e0044;
 		ACCwrite(15);
		if (!CNDisat(1,252)) break p000e0044;
 		ACCwriteln(16);
 		ACCcreate(1);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX CHIMENEA
	p000e0045:
	{
 		if (skipdoall('p000e0045')) break p000e0045;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0045;
			if (!CNDnoun1(56)) break p000e0045;
 		}
		if (!CNDat(1)) break p000e0045;
 		ACCnewline();
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ CHIMENEA
	p000e0046:
	{
 		if (skipdoall('p000e0046')) break p000e0046;
 		if (in_response)
		{
			if (!CNDnoun1(56)) break p000e0046;
 		}
		if (!CNDat(1)) break p000e0046;
 		ACCwriteln(17);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX CALAVERA
	p000e0047:
	{
 		if (skipdoall('p000e0047')) break p000e0047;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0047;
			if (!CNDnoun1(57)) break p000e0047;
 		}
		if (!CNDat(4)) break p000e0047;
 		ACCwrite(18);
		if (!CNDisat(3,252)) break p000e0047;
 		ACCwriteln(19);
 		ACCcreate(3);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX CALAVERA
	p000e0048:
	{
 		if (skipdoall('p000e0048')) break p000e0048;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0048;
			if (!CNDnoun1(57)) break p000e0048;
 		}
		if (!CNDat(4)) break p000e0048;
 		ACCnewline();
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ CALAVERA
	p000e0049:
	{
 		if (skipdoall('p000e0049')) break p000e0049;
 		if (in_response)
		{
			if (!CNDnoun1(57)) break p000e0049;
 		}
		if (!CNDat(4)) break p000e0049;
 		ACCwriteln(20);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX CAMA
	p000e0050:
	{
 		if (skipdoall('p000e0050')) break p000e0050;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0050;
			if (!CNDnoun1(58)) break p000e0050;
 		}
		if (!CNDat(6)) break p000e0050;
		if (!CNDisat(4,252)) break p000e0050;
 		ACCwriteln(21);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX CAMA
	p000e0051:
	{
 		if (skipdoall('p000e0051')) break p000e0051;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0051;
			if (!CNDnoun1(58)) break p000e0051;
 		}
		if (!CNDat(6)) break p000e0051;
		if (!CNDisnotat(4,252)) break p000e0051;
 		ACCwriteln(22);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ CAMA
	p000e0052:
	{
 		if (skipdoall('p000e0052')) break p000e0052;
 		if (in_response)
		{
			if (!CNDnoun1(58)) break p000e0052;
 		}
		if (!CNDat(6)) break p000e0052;
 		ACCwriteln(23);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARRA FUNDA
	p000e0053:
	{
 		if (skipdoall('p000e0053')) break p000e0053;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0053;
			if (!CNDnoun1(55)) break p000e0053;
 		}
		if (!CNDat(6)) break p000e0053;
		if (!CNDisat(4,252)) break p000e0053;
		if (!CNDzero(101)) break p000e0053;
 		ACCwriteln(24);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARRA FUNDA
	p000e0054:
	{
 		if (skipdoall('p000e0054')) break p000e0054;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0054;
			if (!CNDnoun1(55)) break p000e0054;
 		}
		if (!CNDat(6)) break p000e0054;
		if (!CNDisat(4,252)) break p000e0054;
		if (!CNDnotzero(101)) break p000e0054;
 		ACCcreate(4);
 		ACCget(4);
		if (!success) break pro000_restart;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CORTA LIGADURA
	p000e0055:
	{
 		if (skipdoall('p000e0055')) break p000e0055;
 		if (in_response)
		{
			if (!CNDverb(52)) break p000e0055;
			if (!CNDnoun1(59)) break p000e0055;
 		}
		if (!CNDat(6)) break p000e0055;
		if (!CNDisat(4,252)) break p000e0055;
		if (!CNDzero(101)) break p000e0055;
		if (!CNDcarried(3)) break p000e0055;
 		ACCwriteln(25);
 		ACClet(101,1);
 		ACCpause(1);
 		function anykey00002() 
		{
 		ACCbeep(1261,14,1);
 		ACCdone();
		return;
		}
 		waitKey(anykey00002);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// CORTA LIGADURA
	p000e0056:
	{
 		if (skipdoall('p000e0056')) break p000e0056;
 		if (in_response)
		{
			if (!CNDverb(52)) break p000e0056;
			if (!CNDnoun1(59)) break p000e0056;
 		}
		if (!CNDat(6)) break p000e0056;
		if (!CNDisat(4,252)) break p000e0056;
		if (!CNDnotzero(101)) break p000e0056;
		if (!CNDcarried(3)) break p000e0056;
 		ACCwriteln(26);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CORTA FUNDA
	p000e0057:
	{
 		if (skipdoall('p000e0057')) break p000e0057;
 		if (in_response)
		{
			if (!CNDverb(52)) break p000e0057;
			if (!CNDnoun1(55)) break p000e0057;
 		}
		if (!CNDat(6)) break p000e0057;
		if (!CNDisat(4,252)) break p000e0057;
		if (!CNDzero(101)) break p000e0057;
		if (!CNDcarried(3)) break p000e0057;
 		ACCwriteln(27);
 		ACClet(101,1);
 		ACCpause(1);
 		function anykey00003() 
		{
 		ACCbeep(1261,14,1);
 		ACCdone();
		return;
		}
 		waitKey(anykey00003);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// CORTA FUNDA
	p000e0058:
	{
 		if (skipdoall('p000e0058')) break p000e0058;
 		if (in_response)
		{
			if (!CNDverb(52)) break p000e0058;
			if (!CNDnoun1(55)) break p000e0058;
 		}
		if (!CNDat(6)) break p000e0058;
		if (!CNDisat(4,252)) break p000e0058;
		if (!CNDnotzero(101)) break p000e0058;
		if (!CNDcarried(3)) break p000e0058;
 		ACCwriteln(28);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESATA LIGADURA
	p000e0059:
	{
 		if (skipdoall('p000e0059')) break p000e0059;
 		if (in_response)
		{
			if (!CNDverb(98)) break p000e0059;
			if (!CNDnoun1(59)) break p000e0059;
 		}
		if (!CNDat(6)) break p000e0059;
		if (!CNDisat(4,252)) break p000e0059;
 		ACCwriteln(29);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESATA FUNDA
	p000e0060:
	{
 		if (skipdoall('p000e0060')) break p000e0060;
 		if (in_response)
		{
			if (!CNDverb(98)) break p000e0060;
			if (!CNDnoun1(55)) break p000e0060;
 		}
		if (!CNDat(6)) break p000e0060;
		if (!CNDisat(4,252)) break p000e0060;
 		ACCwriteln(30);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX VENTANA
	p000e0061:
	{
 		if (skipdoall('p000e0061')) break p000e0061;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0061;
			if (!CNDnoun1(60)) break p000e0061;
 		}
		if (!CNDat(6)) break p000e0061;
		if (!CNDisat(0,252)) break p000e0061;
		if (!CNDisat(4,10)) break p000e0061;
 		ACCwriteln(31);
 		ACCwriteln(32);
 		ACCwriteln(33);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX VENTANA
	p000e0062:
	{
 		if (skipdoall('p000e0062')) break p000e0062;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0062;
			if (!CNDnoun1(60)) break p000e0062;
 		}
		if (!CNDat(6)) break p000e0062;
		if (!CNDisat(0,252)) break p000e0062;
 		ACCwriteln(34);
 		ACCwriteln(35);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX VENTANA
	p000e0063:
	{
 		if (skipdoall('p000e0063')) break p000e0063;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0063;
			if (!CNDnoun1(60)) break p000e0063;
 		}
		if (!CNDat(6)) break p000e0063;
		if (!CNDisnotat(0,252)) break p000e0063;
		if (!CNDisat(4,10)) break p000e0063;
 		ACCwriteln(36);
 		ACCwriteln(37);
 		ACCwriteln(38);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX VENTANA
	p000e0064:
	{
 		if (skipdoall('p000e0064')) break p000e0064;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0064;
			if (!CNDnoun1(60)) break p000e0064;
 		}
		if (!CNDat(6)) break p000e0064;
		if (!CNDisnotat(0,252)) break p000e0064;
 		ACCwriteln(39);
 		ACCwriteln(40);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ VENTANA
	p000e0065:
	{
 		if (skipdoall('p000e0065')) break p000e0065;
 		if (in_response)
		{
			if (!CNDnoun1(60)) break p000e0065;
 		}
		if (!CNDat(6)) break p000e0065;
 		ACCwriteln(41);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX BARRA
	p000e0066:
	{
 		if (skipdoall('p000e0066')) break p000e0066;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0066;
			if (!CNDnoun1(51)) break p000e0066;
 		}
		if (!CNDat(6)) break p000e0066;
		if (!CNDisat(0,252)) break p000e0066;
 		ACCwriteln(42);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA BARRA
	p000e0067:
	{
 		if (skipdoall('p000e0067')) break p000e0067;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0067;
			if (!CNDnoun1(51)) break p000e0067;
 		}
		if (!CNDat(6)) break p000e0067;
		if (!CNDisat(0,252)) break p000e0067;
 		ACCwriteln(43);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GOLPEA BARRA
	p000e0068:
	{
 		if (skipdoall('p000e0068')) break p000e0068;
 		if (in_response)
		{
			if (!CNDverb(72)) break p000e0068;
			if (!CNDnoun1(51)) break p000e0068;
 		}
		if (!CNDat(6)) break p000e0068;
		if (!CNDcarried(1)) break p000e0068;
		if (!CNDisat(0,252)) break p000e0068;
		if (!CNDnoun2(52)) break p000e0068;
 		ACCgetexit(13,100);
		if (!CNDeq(100,255)) break p000e0068;
 		ACCsetexit(13,7);
 		ACCwriteln(44);
 		ACCcreate(0);
 		ACCpause(5);
 		function anykey00004() 
		{
 		ACCbeep(1266,14,1);
 		ACCdone();
		return;
		}
 		waitKey(anykey00004);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// GOLPEA BARRA
	p000e0069:
	{
 		if (skipdoall('p000e0069')) break p000e0069;
 		if (in_response)
		{
			if (!CNDverb(72)) break p000e0069;
			if (!CNDnoun1(51)) break p000e0069;
 		}
		if (!CNDat(6)) break p000e0069;
		if (!CNDcarried(3)) break p000e0069;
		if (!CNDisat(0,252)) break p000e0069;
		if (!CNDnoun2(54)) break p000e0069;
 		ACCwriteln(45);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GOLPEA BARRA
	p000e0070:
	{
 		if (skipdoall('p000e0070')) break p000e0070;
 		if (in_response)
		{
			if (!CNDverb(72)) break p000e0070;
			if (!CNDnoun1(51)) break p000e0070;
 		}
		if (!CNDat(6)) break p000e0070;
		if (!CNDisat(0,252)) break p000e0070;
 		ACCwriteln(46);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ BARRA
	p000e0071:
	{
 		if (skipdoall('p000e0071')) break p000e0071;
 		if (in_response)
		{
			if (!CNDnoun1(51)) break p000e0071;
 		}
		if (!CNDat(6)) break p000e0071;
		if (!CNDisat(0,252)) break p000e0071;
 		ACCwriteln(47);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXIT _
	p000e0072:
	{
 		if (skipdoall('p000e0072')) break p000e0072;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0072;
 		}
		if (!CNDat(6)) break p000e0072;
		if (!CNDisnotat(0,252)) break p000e0072;
		if (!CNDzero(102)) break p000e0072;
 		ACCwriteln(48);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXIT _
	p000e0073:
	{
 		if (skipdoall('p000e0073')) break p000e0073;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0073;
 		}
		if (!CNDat(6)) break p000e0073;
		if (!CNDisnotat(0,252)) break p000e0073;
		if (!CNDnotzero(102)) break p000e0073;
 		ACCwriteln(49);
 		ACCanykey();
 		function anykey00005() 
		{
 		ACCsilence(16);
 		ACCwriteln(50);
 		ACCgoto(7);
 		ACClet(107,1);
 		ACCdesc();
		return;
		}
 		waitKey(anykey00005);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// EXIT _
	p000e0074:
	{
 		if (skipdoall('p000e0074')) break p000e0074;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0074;
 		}
		if (!CNDat(6)) break p000e0074;
		if (!CNDisat(0,252)) break p000e0074;
 		ACCwriteln(51);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANUDA FUNDA
	p000e0075:
	{
 		if (skipdoall('p000e0075')) break p000e0075;
 		if (in_response)
		{
			if (!CNDverb(54)) break p000e0075;
			if (!CNDnoun1(55)) break p000e0075;
 		}
		if (!CNDat(6)) break p000e0075;
		if (!CNDcarried(4)) break p000e0075;
 		ACCwriteln(52);
 		ACCset(102);
 		ACCplace(4,10);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANUDA FUNDA
	p000e0076:
	{
 		if (skipdoall('p000e0076')) break p000e0076;
 		if (in_response)
		{
			if (!CNDverb(54)) break p000e0076;
			if (!CNDnoun1(55)) break p000e0076;
 		}
		if (!CNDat(6)) break p000e0076;
		if (!CNDisat(4,10)) break p000e0076;
 		ACCwriteln(53);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARRA FUNDA
	p000e0077:
	{
 		if (skipdoall('p000e0077')) break p000e0077;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0077;
			if (!CNDnoun1(55)) break p000e0077;
 		}
		if (!CNDat(6)) break p000e0077;
		if (!CNDisat(4,10)) break p000e0077;
 		ACCwriteln(54);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESATA LIGADURA
	p000e0078:
	{
 		if (skipdoall('p000e0078')) break p000e0078;
 		if (in_response)
		{
			if (!CNDverb(98)) break p000e0078;
			if (!CNDnoun1(59)) break p000e0078;
 		}
		if (!CNDat(6)) break p000e0078;
		if (!CNDisat(4,10)) break p000e0078;
 		ACCwriteln(55);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESATA FUNDA
	p000e0079:
	{
 		if (skipdoall('p000e0079')) break p000e0079;
 		if (in_response)
		{
			if (!CNDverb(98)) break p000e0079;
			if (!CNDnoun1(55)) break p000e0079;
 		}
		if (!CNDat(6)) break p000e0079;
		if (!CNDisat(4,10)) break p000e0079;
 		ACCwriteln(56);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CORTA LIGADURA
	p000e0080:
	{
 		if (skipdoall('p000e0080')) break p000e0080;
 		if (in_response)
		{
			if (!CNDverb(52)) break p000e0080;
			if (!CNDnoun1(59)) break p000e0080;
 		}
		if (!CNDat(6)) break p000e0080;
		if (!CNDisat(4,10)) break p000e0080;
 		ACCwriteln(57);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CORTA FUNDA
	p000e0081:
	{
 		if (skipdoall('p000e0081')) break p000e0081;
 		if (in_response)
		{
			if (!CNDverb(52)) break p000e0081;
			if (!CNDnoun1(55)) break p000e0081;
 		}
		if (!CNDat(6)) break p000e0081;
		if (!CNDisat(4,10)) break p000e0081;
 		ACCwriteln(58);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXIT _
	p000e0082:
	{
 		if (skipdoall('p000e0082')) break p000e0082;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0082;
 		}
		if (!CNDat(4)) break p000e0082;
 		ACCwriteln(59);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCONDERSE _
	p000e0083:
	{
 		if (skipdoall('p000e0083')) break p000e0083;
 		if (in_response)
		{
			if (!CNDverb(92)) break p000e0083;
 		}
		if (!CNDat(7)) break p000e0083;
		if (!CNDzero(106)) break p000e0083;
 		ACCwriteln(60);
 		ACCset(106);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCONDERSE _
	p000e0084:
	{
 		if (skipdoall('p000e0084')) break p000e0084;
 		if (in_response)
		{
			if (!CNDverb(92)) break p000e0084;
 		}
		if (!CNDat(7)) break p000e0084;
		if (!CNDnotzero(106)) break p000e0084;
 		ACCwriteln(61);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCONDERSE _
	p000e0085:
	{
 		if (skipdoall('p000e0085')) break p000e0085;
 		if (in_response)
		{
			if (!CNDverb(92)) break p000e0085;
 		}
		if (!CNDat(8)) break p000e0085;
		if (!CNDzero(106)) break p000e0085;
 		ACCwriteln(62);
 		ACCset(106);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCONDERSE _
	p000e0086:
	{
 		if (skipdoall('p000e0086')) break p000e0086;
 		if (in_response)
		{
			if (!CNDverb(92)) break p000e0086;
 		}
		if (!CNDat(8)) break p000e0086;
		if (!CNDnotzero(106)) break p000e0086;
 		ACCwriteln(63);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX SUELO
	p000e0087:
	{
 		if (skipdoall('p000e0087')) break p000e0087;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0087;
			if (!CNDnoun1(61)) break p000e0087;
 		}
		if (!CNDat(8)) break p000e0087;
 		ACCwrite(64);
		if (!CNDisat(5,252)) break p000e0087;
 		ACCwriteln(65);
 		ACCcreate(5);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX SUELO
	p000e0088:
	{
 		if (skipdoall('p000e0088')) break p000e0088;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0088;
			if (!CNDnoun1(61)) break p000e0088;
 		}
		if (!CNDat(8)) break p000e0088;
 		ACCnewline();
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ SUELO
	p000e0089:
	{
 		if (skipdoall('p000e0089')) break p000e0089;
 		if (in_response)
		{
			if (!CNDnoun1(61)) break p000e0089;
 		}
		if (!CNDat(8)) break p000e0089;
 		ACCwriteln(66);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX ABAJO
	p000e0090:
	{
 		if (skipdoall('p000e0090')) break p000e0090;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0090;
			if (!CNDnoun1(11)) break p000e0090;
 		}
		if (!CNDat(8)) break p000e0090;
 		ACCwrite(67);
		if (!CNDisat(5,252)) break p000e0090;
 		ACCwriteln(68);
 		ACCcreate(5);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX ABAJO
	p000e0091:
	{
 		if (skipdoall('p000e0091')) break p000e0091;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0091;
			if (!CNDnoun1(11)) break p000e0091;
 		}
		if (!CNDat(8)) break p000e0091;
 		ACCnewline();
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0092:
	{
 		if (skipdoall('p000e0092')) break p000e0092;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0092;
 		}
		if (!CNDat(8)) break p000e0092;
		if (!CNDsame(103,38)) break p000e0092;
 		ACCwhato();
		if (!CNDcarried(getFlag(51))) break p000e0092;
		if (!CNDnotzero(106)) break p000e0092;
		if (!CNDzero(104)) break p000e0092;
 		ACCwriteln(69);
 		ACCplace(getFlag(51),252);
 		ACCwriteln(70);
 		ACCset(104);
 		ACClet(103,10);
 		ACClet(105,1);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ _
	p000e0093:
	{
 		if (skipdoall('p000e0093')) break p000e0093;
		if (!CNDlt(33,14)) break p000e0093;
		if (!CNDat(8)) break p000e0093;
		if (!CNDsame(103,38)) break p000e0093;
		if (!CNDnotzero(106)) break p000e0093;
		if (!CNDzero(104)) break p000e0093;
 		ACCwriteln(71);
 		ACCwriteln(72);
 		ACCpause(5);
 		function anykey00006() 
		{
 		ACCbeep(1263,14,1);
 		ACCend();
		return;
		}
 		waitKey(anykey00006);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// _ _
	p000e0094:
	{
 		if (skipdoall('p000e0094')) break p000e0094;
		if (!CNDlt(33,14)) break p000e0094;
		if (!CNDat(8)) break p000e0094;
		if (!CNDsame(103,38)) break p000e0094;
		if (!CNDzero(106)) break p000e0094;
 		ACCwriteln(73);
 		ACCpause(5);
 		function anykey00007() 
		{
 		ACCbeep(1263,14,1);
 		ACCend();
		return;
		}
 		waitKey(anykey00007);
		done_flag=true;
		break pro000_restart;
		{}

	}

	//  _
	p000e0095:
	{
 		if (skipdoall('p000e0095')) break p000e0095;
 		if (in_response)
		{
			if (!CNDverb(9)) break p000e0095;
 		}
		if (!CNDat(9)) break p000e0095;
 		ACCwriteln(74);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EMBARCAR BARCA
	p000e0096:
	{
 		if (skipdoall('p000e0096')) break p000e0096;
 		if (in_response)
		{
			if (!CNDverb(165)) break p000e0096;
			if (!CNDnoun1(63)) break p000e0096;
 		}
		if (!CNDat(9)) break p000e0096;
 		ACCwriteln(75);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EMBARCAR BARCA
	p000e0097:
	{
 		if (skipdoall('p000e0097')) break p000e0097;
 		if (in_response)
		{
			if (!CNDverb(165)) break p000e0097;
			if (!CNDnoun1(63)) break p000e0097;
 		}
		if (!CNDat(9)) break p000e0097;
 		ACCwriteln(76);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EMPUJA BARCA
	p000e0098:
	{
 		if (skipdoall('p000e0098')) break p000e0098;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0098;
			if (!CNDnoun1(63)) break p000e0098;
 		}
		if (!CNDat(9)) break p000e0098;
 		ACCwriteln(77);
 		ACCanykey();
 		function anykey00008() 
		{
 		ACCsilence(15);
 		ACCsilence(16);
 		ACCbeep(1257,16,0);
 		ACCwriteln(78);
 		ACCend();
		return;
		}
 		waitKey(anykey00008);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// ARRASTRA BARCA
	p000e0099:
	{
 		if (skipdoall('p000e0099')) break p000e0099;
 		if (in_response)
		{
			if (!CNDverb(83)) break p000e0099;
			if (!CNDnoun1(63)) break p000e0099;
 		}
		if (!CNDat(9)) break p000e0099;
 		ACCwriteln(79);
 		ACCanykey();
 		function anykey00009() 
		{
 		ACCsilence(15);
 		ACCsilence(16);
 		ACCbeep(1257,16,0);
 		ACCwriteln(80);
 		ACCend();
		return;
		}
 		waitKey(anykey00009);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// EMBARCAR BARCA
	p000e0100:
	{
 		if (skipdoall('p000e0100')) break p000e0100;
 		if (in_response)
		{
			if (!CNDverb(165)) break p000e0100;
			if (!CNDnoun1(63)) break p000e0100;
 		}
		if (!CNDat(9)) break p000e0100;
 		ACCwriteln(81);
 		ACCanykey();
 		function anykey00010() 
		{
 		ACCsilence(15);
 		ACCsilence(16);
 		ACCbeep(1257,16,0);
 		ACCwriteln(82);
 		ACCend();
		return;
		}
 		waitKey(anykey00010);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// EX BARRA
	p000e0101:
	{
 		if (skipdoall('p000e0101')) break p000e0101;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0101;
			if (!CNDnoun1(51)) break p000e0101;
 		}
		if (!CNDpresent(0)) break p000e0101;
 		ACCwriteln(83);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX CARBON
	p000e0102:
	{
 		if (skipdoall('p000e0102')) break p000e0102;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0102;
			if (!CNDnoun1(52)) break p000e0102;
 		}
		if (!CNDpresent(1)) break p000e0102;
 		ACCwriteln(84);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX CUCHILLO
	p000e0103:
	{
 		if (skipdoall('p000e0103')) break p000e0103;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0103;
			if (!CNDnoun1(54)) break p000e0103;
 		}
		if (!CNDpresent(3)) break p000e0103;
 		ACCwriteln(85);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX FUNDA
	p000e0104:
	{
 		if (skipdoall('p000e0104')) break p000e0104;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0104;
			if (!CNDnoun1(55)) break p000e0104;
 		}
		if (!CNDat(6)) break p000e0104;
		if (!CNDisat(4,252)) break p000e0104;
 		ACCwriteln(86);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX FUNDA
	p000e0105:
	{
 		if (skipdoall('p000e0105')) break p000e0105;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0105;
			if (!CNDnoun1(55)) break p000e0105;
 		}
		if (!CNDat(6)) break p000e0105;
		if (!CNDisat(4,10)) break p000e0105;
 		ACCwriteln(87);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX FUNDA
	p000e0106:
	{
 		if (skipdoall('p000e0106')) break p000e0106;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0106;
			if (!CNDnoun1(55)) break p000e0106;
 		}
		if (!CNDpresent(4)) break p000e0106;
 		ACCwriteln(88);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX LIGADURA
	p000e0107:
	{
 		if (skipdoall('p000e0107')) break p000e0107;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0107;
			if (!CNDnoun1(59)) break p000e0107;
 		}
		if (!CNDat(6)) break p000e0107;
		if (!CNDisat(4,252)) break p000e0107;
 		ACCwriteln(89);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ LIGADURA
	p000e0108:
	{
 		if (skipdoall('p000e0108')) break p000e0108;
 		if (in_response)
		{
			if (!CNDnoun1(59)) break p000e0108;
 		}
		if (!CNDat(6)) break p000e0108;
		if (!CNDisat(4,252)) break p000e0108;
 		ACCwriteln(90);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ FUNDA
	p000e0109:
	{
 		if (skipdoall('p000e0109')) break p000e0109;
 		if (in_response)
		{
			if (!CNDnoun1(55)) break p000e0109;
 		}
		if (!CNDat(6)) break p000e0109;
		if (!CNDisat(4,252)) break p000e0109;
 		ACCwriteln(91);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX PIEDRA
	p000e0110:
	{
 		if (skipdoall('p000e0110')) break p000e0110;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0110;
			if (!CNDnoun1(62)) break p000e0110;
 		}
		if (!CNDpresent(5)) break p000e0110;
 		ACCwriteln(92);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX BARCA
	p000e0111:
	{
 		if (skipdoall('p000e0111')) break p000e0111;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0111;
			if (!CNDnoun1(63)) break p000e0111;
 		}
		if (!CNDat(9)) break p000e0111;
		if (!CNDpresent(6)) break p000e0111;
 		ACCwriteln(93);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARRA BARCA
	p000e0112:
	{
 		if (skipdoall('p000e0112')) break p000e0112;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0112;
			if (!CNDnoun1(63)) break p000e0112;
 		}
		if (!CNDat(9)) break p000e0112;
		if (!CNDpresent(6)) break p000e0112;
 		ACCwriteln(94);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX ANTORCHA
	p000e0113:
	{
 		if (skipdoall('p000e0113')) break p000e0113;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0113;
			if (!CNDnoun1(50)) break p000e0113;
 		}
		if (!CNDat(5)) break p000e0113;
 		ACCgetexit(5,100);
		if (!CNDeq(100,255)) break p000e0113;
 		ACCwriteln(95);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX ANTORCHA
	p000e0114:
	{
 		if (skipdoall('p000e0114')) break p000e0114;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0114;
			if (!CNDnoun1(50)) break p000e0114;
 		}
		if (!CNDat(5)) break p000e0114;
 		ACCgetexit(5,100);
		if (!CNDnotzero(100)) break p000e0114;
 		ACCwriteln(96);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ ANTORCHA
	p000e0115:
	{
 		if (skipdoall('p000e0115')) break p000e0115;
 		if (in_response)
		{
			if (!CNDnoun1(50)) break p000e0115;
 		}
		if (!CNDat(5)) break p000e0115;
 		ACCwriteln(97);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX VENTANA
	p000e0116:
	{
 		if (skipdoall('p000e0116')) break p000e0116;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0116;
			if (!CNDnoun1(60)) break p000e0116;
 		}
		if (!CNDat(4)) break p000e0116;
 		ACCwriteln(98);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ VENTANA
	p000e0117:
	{
 		if (skipdoall('p000e0117')) break p000e0117;
 		if (in_response)
		{
			if (!CNDnoun1(60)) break p000e0117;
 		}
		if (!CNDat(4)) break p000e0117;
 		ACCwriteln(99);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX BLOQUE
	p000e0118:
	{
 		if (skipdoall('p000e0118')) break p000e0118;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0118;
			if (!CNDnoun1(78)) break p000e0118;
 		}
		if (!CNDzone(1,7)) break p000e0118;
 		ACCwriteln(100);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ BLOQUE
	p000e0119:
	{
 		if (skipdoall('p000e0119')) break p000e0119;
 		if (in_response)
		{
			if (!CNDnoun1(78)) break p000e0119;
 		}
		if (!CNDzone(1,7)) break p000e0119;
 		ACCwriteln(101);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX ESCRITORIO
	p000e0120:
	{
 		if (skipdoall('p000e0120')) break p000e0120;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0120;
			if (!CNDnoun1(64)) break p000e0120;
 		}
		if (!CNDat(1)) break p000e0120;
 		ACCwriteln(102);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ ESCRITORIO
	p000e0121:
	{
 		if (skipdoall('p000e0121')) break p000e0121;
 		if (in_response)
		{
			if (!CNDnoun1(64)) break p000e0121;
 		}
		if (!CNDat(1)) break p000e0121;
 		ACCwriteln(103);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX ARMADURA
	p000e0122:
	{
 		if (skipdoall('p000e0122')) break p000e0122;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0122;
			if (!CNDnoun1(65)) break p000e0122;
 		}
		if (!CNDat(3)) break p000e0122;
 		ACCwriteln(104);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ ARMADURA
	p000e0123:
	{
 		if (skipdoall('p000e0123')) break p000e0123;
 		if (in_response)
		{
			if (!CNDnoun1(65)) break p000e0123;
 		}
		if (!CNDat(3)) break p000e0123;
 		ACCwriteln(105);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX POLVO
	p000e0124:
	{
 		if (skipdoall('p000e0124')) break p000e0124;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0124;
			if (!CNDnoun1(80)) break p000e0124;
 		}
		if (!CNDzone(1,8)) break p000e0124;
 		ACCwriteln(106);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ POLVO
	p000e0125:
	{
 		if (skipdoall('p000e0125')) break p000e0125;
 		if (in_response)
		{
			if (!CNDnoun1(80)) break p000e0125;
 		}
		if (!CNDzone(1,8)) break p000e0125;
 		ACCwriteln(107);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX OXIDO
	p000e0126:
	{
 		if (skipdoall('p000e0126')) break p000e0126;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0126;
			if (!CNDnoun1(82)) break p000e0126;
 		}
		if (!CNDat(3)) break p000e0126;
 		ACCwriteln(108);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ OXIDO
	p000e0127:
	{
 		if (skipdoall('p000e0127')) break p000e0127;
 		if (in_response)
		{
			if (!CNDnoun1(82)) break p000e0127;
 		}
		if (!CNDat(3)) break p000e0127;
 		ACCwriteln(109);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX ESCALAS
	p000e0128:
	{
 		if (skipdoall('p000e0128')) break p000e0128;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0128;
			if (!CNDnoun1(66)) break p000e0128;
 		}
		if (!CNDat(3)) break p000e0128;
 		ACCwriteln(110);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ ESCALAS
	p000e0129:
	{
 		if (skipdoall('p000e0129')) break p000e0129;
 		if (in_response)
		{
			if (!CNDnoun1(66)) break p000e0129;
 		}
		if (!CNDat(3)) break p000e0129;
 		ACCwriteln(111);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX ESCALAS
	p000e0130:
	{
 		if (skipdoall('p000e0130')) break p000e0130;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0130;
			if (!CNDnoun1(66)) break p000e0130;
 		}
		if (!CNDat(5)) break p000e0130;
 		ACCwriteln(112);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ ESCALAS
	p000e0131:
	{
 		if (skipdoall('p000e0131')) break p000e0131;
 		if (in_response)
		{
			if (!CNDnoun1(66)) break p000e0131;
 		}
		if (!CNDat(5)) break p000e0131;
 		ACCwriteln(113);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX CAMASTRO
	p000e0132:
	{
 		if (skipdoall('p000e0132')) break p000e0132;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0132;
			if (!CNDnoun1(67)) break p000e0132;
 		}
		if (!CNDat(2)) break p000e0132;
 		ACCwriteln(114);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ CAMASTRO
	p000e0133:
	{
 		if (skipdoall('p000e0133')) break p000e0133;
 		if (in_response)
		{
			if (!CNDnoun1(67)) break p000e0133;
 		}
		if (!CNDat(2)) break p000e0133;
 		ACCwriteln(115);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX ENO
	p000e0134:
	{
 		if (skipdoall('p000e0134')) break p000e0134;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0134;
			if (!CNDnoun1(68)) break p000e0134;
 		}
		if (!CNDat(4)) break p000e0134;
 		ACCwriteln(116);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ ENO
	p000e0135:
	{
 		if (skipdoall('p000e0135')) break p000e0135;
 		if (in_response)
		{
			if (!CNDnoun1(68)) break p000e0135;
 		}
		if (!CNDat(4)) break p000e0135;
 		ACCwriteln(117);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX ENO
	p000e0136:
	{
 		if (skipdoall('p000e0136')) break p000e0136;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0136;
			if (!CNDnoun1(68)) break p000e0136;
 		}
		if (!CNDat(6)) break p000e0136;
		if (!CNDisnotat(4,252)) break p000e0136;
 		ACCwriteln(118);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ ENO
	p000e0137:
	{
 		if (skipdoall('p000e0137')) break p000e0137;
 		if (in_response)
		{
			if (!CNDnoun1(68)) break p000e0137;
 		}
		if (!CNDat(6)) break p000e0137;
 		ACCwriteln(119);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX CADENA
	p000e0138:
	{
 		if (skipdoall('p000e0138')) break p000e0138;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0138;
			if (!CNDnoun1(69)) break p000e0138;
 		}
		if (!CNDat(4)) break p000e0138;
 		ACCwriteln(120);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ CADENA
	p000e0139:
	{
 		if (skipdoall('p000e0139')) break p000e0139;
 		if (in_response)
		{
			if (!CNDnoun1(69)) break p000e0139;
 		}
		if (!CNDat(4)) break p000e0139;
 		ACCwriteln(121);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX LUNA
	p000e0140:
	{
 		if (skipdoall('p000e0140')) break p000e0140;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0140;
			if (!CNDnoun1(70)) break p000e0140;
 		}
		if (!CNDat(4)) break p000e0140;
 		ACCwriteln(122);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ LUNA
	p000e0141:
	{
 		if (skipdoall('p000e0141')) break p000e0141;
 		if (in_response)
		{
			if (!CNDnoun1(70)) break p000e0141;
 		}
		if (!CNDat(4)) break p000e0141;
 		ACCwriteln(123);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX LUNA
	p000e0142:
	{
 		if (skipdoall('p000e0142')) break p000e0142;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0142;
			if (!CNDnoun1(70)) break p000e0142;
 		}
		if (!CNDat(6)) break p000e0142;
 		ACCwriteln(124);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ LUNA
	p000e0143:
	{
 		if (skipdoall('p000e0143')) break p000e0143;
 		if (in_response)
		{
			if (!CNDnoun1(70)) break p000e0143;
 		}
		if (!CNDat(6)) break p000e0143;
 		ACCwriteln(125);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX LUNA
	p000e0144:
	{
 		if (skipdoall('p000e0144')) break p000e0144;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0144;
			if (!CNDnoun1(70)) break p000e0144;
 		}
		if (!CNDat(7)) break p000e0144;
 		ACCwriteln(126);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ LUNA
	p000e0145:
	{
 		if (skipdoall('p000e0145')) break p000e0145;
 		if (in_response)
		{
			if (!CNDnoun1(70)) break p000e0145;
 		}
		if (!CNDat(7)) break p000e0145;
 		ACCwriteln(127);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX LUNA
	p000e0146:
	{
 		if (skipdoall('p000e0146')) break p000e0146;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0146;
			if (!CNDnoun1(70)) break p000e0146;
 		}
		if (!CNDat(8)) break p000e0146;
 		ACCwriteln(128);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ LUNA
	p000e0147:
	{
 		if (skipdoall('p000e0147')) break p000e0147;
 		if (in_response)
		{
			if (!CNDnoun1(70)) break p000e0147;
 		}
		if (!CNDat(8)) break p000e0147;
 		ACCwriteln(129);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX LUNA
	p000e0148:
	{
 		if (skipdoall('p000e0148')) break p000e0148;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0148;
			if (!CNDnoun1(70)) break p000e0148;
 		}
		if (!CNDat(9)) break p000e0148;
 		ACCwriteln(130);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ LUNA
	p000e0149:
	{
 		if (skipdoall('p000e0149')) break p000e0149;
 		if (in_response)
		{
			if (!CNDnoun1(70)) break p000e0149;
 		}
		if (!CNDat(9)) break p000e0149;
 		ACCwriteln(131);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX EDIFICACIO
	p000e0150:
	{
 		if (skipdoall('p000e0150')) break p000e0150;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0150;
			if (!CNDnoun1(73)) break p000e0150;
 		}
		if (!CNDat(7)) break p000e0150;
 		ACCwriteln(132);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ EDIFICACIO
	p000e0151:
	{
 		if (skipdoall('p000e0151')) break p000e0151;
 		if (in_response)
		{
			if (!CNDnoun1(73)) break p000e0151;
 		}
		if (!CNDat(7)) break p000e0151;
 		ACCwriteln(133);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX EDIFICACIO
	p000e0152:
	{
 		if (skipdoall('p000e0152')) break p000e0152;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0152;
			if (!CNDnoun1(73)) break p000e0152;
 		}
		if (!CNDat(8)) break p000e0152;
 		ACCwriteln(134);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ EDIFICACIO
	p000e0153:
	{
 		if (skipdoall('p000e0153')) break p000e0153;
 		if (in_response)
		{
			if (!CNDnoun1(73)) break p000e0153;
 		}
		if (!CNDat(8)) break p000e0153;
 		ACCwriteln(135);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX EDIFICACIO
	p000e0154:
	{
 		if (skipdoall('p000e0154')) break p000e0154;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0154;
			if (!CNDnoun1(73)) break p000e0154;
 		}
		if (!CNDat(9)) break p000e0154;
 		ACCwriteln(136);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ EDIFICACIO
	p000e0155:
	{
 		if (skipdoall('p000e0155')) break p000e0155;
 		if (in_response)
		{
			if (!CNDnoun1(73)) break p000e0155;
 		}
		if (!CNDat(9)) break p000e0155;
 		ACCwriteln(137);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX HIERBA
	p000e0156:
	{
 		if (skipdoall('p000e0156')) break p000e0156;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0156;
			if (!CNDnoun1(71)) break p000e0156;
 		}
		if (!CNDat(8)) break p000e0156;
 		ACCwriteln(138);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ HIERBA
	p000e0157:
	{
 		if (skipdoall('p000e0157')) break p000e0157;
 		if (in_response)
		{
			if (!CNDnoun1(71)) break p000e0157;
 		}
		if (!CNDat(8)) break p000e0157;
 		ACCwriteln(139);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX ARBUSTO
	p000e0158:
	{
 		if (skipdoall('p000e0158')) break p000e0158;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0158;
			if (!CNDnoun1(72)) break p000e0158;
 		}
		if (!CNDat(8)) break p000e0158;
 		ACCwriteln(140);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ ARBUSTO
	p000e0159:
	{
 		if (skipdoall('p000e0159')) break p000e0159;
 		if (in_response)
		{
			if (!CNDnoun1(72)) break p000e0159;
 		}
		if (!CNDat(8)) break p000e0159;
 		ACCwriteln(141);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX RAMA
	p000e0160:
	{
 		if (skipdoall('p000e0160')) break p000e0160;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0160;
			if (!CNDnoun1(79)) break p000e0160;
 		}
		if (!CNDzone(7,9)) break p000e0160;
 		ACCwriteln(142);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ RAMA
	p000e0161:
	{
 		if (skipdoall('p000e0161')) break p000e0161;
 		if (in_response)
		{
			if (!CNDnoun1(79)) break p000e0161;
 		}
		if (!CNDzone(7,9)) break p000e0161;
 		ACCwriteln(143);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX POLVO
	p000e0162:
	{
 		if (skipdoall('p000e0162')) break p000e0162;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0162;
			if (!CNDnoun1(80)) break p000e0162;
 		}
		if (!CNDzone(7,9)) break p000e0162;
 		ACCwriteln(144);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ POLVO
	p000e0163:
	{
 		if (skipdoall('p000e0163')) break p000e0163;
 		if (in_response)
		{
			if (!CNDnoun1(80)) break p000e0163;
 		}
		if (!CNDzone(7,9)) break p000e0163;
 		ACCwriteln(145);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX LOSA
	p000e0164:
	{
 		if (skipdoall('p000e0164')) break p000e0164;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0164;
			if (!CNDnoun1(87)) break p000e0164;
 		}
		if (!CNDzone(1,6)) break p000e0164;
 		ACCwriteln(146);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ LOSA
	p000e0165:
	{
 		if (skipdoall('p000e0165')) break p000e0165;
 		if (in_response)
		{
			if (!CNDnoun1(87)) break p000e0165;
 		}
		if (!CNDzone(1,6)) break p000e0165;
 		ACCwriteln(147);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX VIGA
	p000e0166:
	{
 		if (skipdoall('p000e0166')) break p000e0166;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0166;
			if (!CNDnoun1(88)) break p000e0166;
 		}
		if (!CNDzone(1,6)) break p000e0166;
 		ACCwriteln(148);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ VIGA
	p000e0167:
	{
 		if (skipdoall('p000e0167')) break p000e0167;
 		if (in_response)
		{
			if (!CNDnoun1(88)) break p000e0167;
 		}
		if (!CNDzone(1,6)) break p000e0167;
 		ACCwriteln(149);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX PORTAL
	p000e0168:
	{
 		if (skipdoall('p000e0168')) break p000e0168;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0168;
			if (!CNDnoun1(74)) break p000e0168;
 		}
		if (!CNDat(1)) break p000e0168;
 		ACCwriteln(150);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE PORTAL
	p000e0169:
	{
 		if (skipdoall('p000e0169')) break p000e0169;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0169;
			if (!CNDnoun1(74)) break p000e0169;
 		}
		if (!CNDat(1)) break p000e0169;
 		ACCwriteln(151);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ PORTAL
	p000e0170:
	{
 		if (skipdoall('p000e0170')) break p000e0170;
 		if (in_response)
		{
			if (!CNDnoun1(74)) break p000e0170;
 		}
		if (!CNDat(1)) break p000e0170;
 		ACCwriteln(152);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX BARRA
	p000e0171:
	{
 		if (skipdoall('p000e0171')) break p000e0171;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0171;
			if (!CNDnoun1(51)) break p000e0171;
 		}
		if (!CNDat(1)) break p000e0171;
 		ACCwriteln(153);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ BARRA
	p000e0172:
	{
 		if (skipdoall('p000e0172')) break p000e0172;
 		if (in_response)
		{
			if (!CNDnoun1(51)) break p000e0172;
 		}
		if (!CNDat(1)) break p000e0172;
 		ACCwriteln(154);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX ARENA
	p000e0173:
	{
 		if (skipdoall('p000e0173')) break p000e0173;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0173;
			if (!CNDnoun1(81)) break p000e0173;
 		}
		if (!CNDat(9)) break p000e0173;
 		ACCwriteln(155);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ ARENA
	p000e0174:
	{
 		if (skipdoall('p000e0174')) break p000e0174;
 		if (in_response)
		{
			if (!CNDnoun1(81)) break p000e0174;
 		}
		if (!CNDat(9)) break p000e0174;
 		ACCwriteln(156);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX AGUA
	p000e0175:
	{
 		if (skipdoall('p000e0175')) break p000e0175;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0175;
			if (!CNDnoun1(84)) break p000e0175;
 		}
		if (!CNDat(9)) break p000e0175;
 		ACCwriteln(157);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BEBE AGUA
	p000e0176:
	{
 		if (skipdoall('p000e0176')) break p000e0176;
 		if (in_response)
		{
			if (!CNDverb(39)) break p000e0176;
			if (!CNDnoun1(84)) break p000e0176;
 		}
		if (!CNDat(9)) break p000e0176;
 		ACCwriteln(158);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// NADA _
	p000e0177:
	{
 		if (skipdoall('p000e0177')) break p000e0177;
 		if (in_response)
		{
			if (!CNDverb(56)) break p000e0177;
 		}
		if (!CNDat(9)) break p000e0177;
 		ACCwriteln(159);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ AGUA
	p000e0178:
	{
 		if (skipdoall('p000e0178')) break p000e0178;
 		if (in_response)
		{
			if (!CNDnoun1(84)) break p000e0178;
 		}
		if (!CNDat(9)) break p000e0178;
 		ACCwriteln(160);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX MURO
	p000e0179:
	{
 		if (skipdoall('p000e0179')) break p000e0179;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0179;
			if (!CNDnoun1(75)) break p000e0179;
 		}
		if (!CNDzone(1,7)) break p000e0179;
 		ACCwriteln(161);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ MURO
	p000e0180:
	{
 		if (skipdoall('p000e0180')) break p000e0180;
 		if (in_response)
		{
			if (!CNDnoun1(75)) break p000e0180;
 		}
		if (!CNDzone(1,7)) break p000e0180;
 		ACCwriteln(162);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX MURO
	p000e0181:
	{
 		if (skipdoall('p000e0181')) break p000e0181;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0181;
			if (!CNDnoun1(75)) break p000e0181;
 		}
		if (!CNDat(8)) break p000e0181;
 		ACCwriteln(163);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX MURO
	p000e0182:
	{
 		if (skipdoall('p000e0182')) break p000e0182;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0182;
			if (!CNDnoun1(75)) break p000e0182;
 		}
		if (!CNDat(9)) break p000e0182;
 		ACCwriteln(164);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX SUELO
	p000e0183:
	{
 		if (skipdoall('p000e0183')) break p000e0183;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0183;
			if (!CNDnoun1(61)) break p000e0183;
 		}
		if (!CNDzone(1,6)) break p000e0183;
 		ACCwriteln(165);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ SUELO
	p000e0184:
	{
 		if (skipdoall('p000e0184')) break p000e0184;
 		if (in_response)
		{
			if (!CNDnoun1(61)) break p000e0184;
 		}
		if (!CNDzone(1,6)) break p000e0184;
 		ACCwriteln(166);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX SUELO
	p000e0185:
	{
 		if (skipdoall('p000e0185')) break p000e0185;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0185;
			if (!CNDnoun1(61)) break p000e0185;
 		}
		if (!CNDat(7)) break p000e0185;
 		ACCwriteln(167);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ SUELO
	p000e0186:
	{
 		if (skipdoall('p000e0186')) break p000e0186;
 		if (in_response)
		{
			if (!CNDnoun1(61)) break p000e0186;
 		}
		if (!CNDat(7)) break p000e0186;
 		ACCwriteln(168);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX SUELO
	p000e0187:
	{
 		if (skipdoall('p000e0187')) break p000e0187;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0187;
			if (!CNDnoun1(61)) break p000e0187;
 		}
		if (!CNDat(9)) break p000e0187;
 		ACCwriteln(169);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ SUELO
	p000e0188:
	{
 		if (skipdoall('p000e0188')) break p000e0188;
 		if (in_response)
		{
			if (!CNDnoun1(61)) break p000e0188;
 		}
		if (!CNDat(9)) break p000e0188;
 		ACCwriteln(170);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX TECHO
	p000e0189:
	{
 		if (skipdoall('p000e0189')) break p000e0189;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0189;
			if (!CNDnoun1(76)) break p000e0189;
 		}
		if (!CNDzone(1,6)) break p000e0189;
 		ACCwriteln(171);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ TECHO
	p000e0190:
	{
 		if (skipdoall('p000e0190')) break p000e0190;
 		if (in_response)
		{
			if (!CNDnoun1(76)) break p000e0190;
 		}
		if (!CNDzone(1,6)) break p000e0190;
 		ACCwriteln(172);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX TECHO
	p000e0191:
	{
 		if (skipdoall('p000e0191')) break p000e0191;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0191;
			if (!CNDnoun1(76)) break p000e0191;
 		}
		if (!CNDzone(7,9)) break p000e0191;
 		ACCwriteln(173);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX CIELO
	p000e0192:
	{
 		if (skipdoall('p000e0192')) break p000e0192;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0192;
			if (!CNDnoun1(77)) break p000e0192;
 		}
		if (!CNDzone(1,6)) break p000e0192;
 		ACCwriteln(174);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX CIELO
	p000e0193:
	{
 		if (skipdoall('p000e0193')) break p000e0193;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0193;
			if (!CNDnoun1(77)) break p000e0193;
 		}
		if (!CNDzone(7,9)) break p000e0193;
 		ACCwriteln(175);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX ARRIBA
	p000e0194:
	{
 		if (skipdoall('p000e0194')) break p000e0194;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0194;
			if (!CNDnoun1(10)) break p000e0194;
 		}
		if (!CNDzone(7,9)) break p000e0194;
 		ACCwriteln(176);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX NUBE
	p000e0195:
	{
 		if (skipdoall('p000e0195')) break p000e0195;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0195;
			if (!CNDnoun1(83)) break p000e0195;
 		}
		if (!CNDat(4)) break p000e0195;
 		ACCwriteln(177);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ NUBE
	p000e0196:
	{
 		if (skipdoall('p000e0196')) break p000e0196;
 		if (in_response)
		{
			if (!CNDnoun1(83)) break p000e0196;
 		}
		if (!CNDat(4)) break p000e0196;
 		ACCwriteln(178);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX NUBE
	p000e0197:
	{
 		if (skipdoall('p000e0197')) break p000e0197;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0197;
			if (!CNDnoun1(83)) break p000e0197;
 		}
		if (!CNDat(6)) break p000e0197;
 		ACCwriteln(179);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ NUBE
	p000e0198:
	{
 		if (skipdoall('p000e0198')) break p000e0198;
 		if (in_response)
		{
			if (!CNDnoun1(83)) break p000e0198;
 		}
		if (!CNDat(6)) break p000e0198;
 		ACCwriteln(180);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX NUBE
	p000e0199:
	{
 		if (skipdoall('p000e0199')) break p000e0199;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0199;
			if (!CNDnoun1(83)) break p000e0199;
 		}
		if (!CNDzone(7,9)) break p000e0199;
 		ACCwriteln(181);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ NUBE
	p000e0200:
	{
 		if (skipdoall('p000e0200')) break p000e0200;
 		if (in_response)
		{
			if (!CNDnoun1(83)) break p000e0200;
 		}
		if (!CNDzone(7,9)) break p000e0200;
 		ACCwriteln(182);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX CORAZA
	p000e0201:
	{
 		if (skipdoall('p000e0201')) break p000e0201;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0201;
			if (!CNDnoun1(85)) break p000e0201;
 		}
		if (!CNDat(8)) break p000e0201;
		if (!CNDsame(103,38)) break p000e0201;
 		ACCwriteln(183);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ CORAZA
	p000e0202:
	{
 		if (skipdoall('p000e0202')) break p000e0202;
 		if (in_response)
		{
			if (!CNDnoun1(85)) break p000e0202;
 		}
		if (!CNDat(8)) break p000e0202;
		if (!CNDsame(103,38)) break p000e0202;
 		ACCwriteln(184);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX GARROTE
	p000e0203:
	{
 		if (skipdoall('p000e0203')) break p000e0203;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0203;
			if (!CNDnoun1(86)) break p000e0203;
 		}
		if (!CNDat(8)) break p000e0203;
		if (!CNDsame(103,38)) break p000e0203;
 		ACCwriteln(185);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ GARROTE
	p000e0204:
	{
 		if (skipdoall('p000e0204')) break p000e0204;
 		if (in_response)
		{
			if (!CNDnoun1(86)) break p000e0204;
 		}
		if (!CNDat(8)) break p000e0204;
		if (!CNDsame(103,38)) break p000e0204;
 		ACCwriteln(186);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX GUARDIA
	p000e0205:
	{
 		if (skipdoall('p000e0205')) break p000e0205;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0205;
			if (!CNDnoun1(21)) break p000e0205;
 		}
		if (!CNDat(8)) break p000e0205;
		if (!CNDsame(103,38)) break p000e0205;
 		ACCwriteln(187);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGREDE GUARDIA
	p000e0206:
	{
 		if (skipdoall('p000e0206')) break p000e0206;
 		if (in_response)
		{
			if (!CNDverb(46)) break p000e0206;
			if (!CNDnoun1(21)) break p000e0206;
 		}
		if (!CNDat(8)) break p000e0206;
		if (!CNDsame(103,38)) break p000e0206;
 		ACCwriteln(188);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ GUARDIA
	p000e0207:
	{
 		if (skipdoall('p000e0207')) break p000e0207;
 		if (in_response)
		{
			if (!CNDnoun1(21)) break p000e0207;
 		}
		if (!CNDat(8)) break p000e0207;
		if (!CNDsame(103,38)) break p000e0207;
 		ACCwriteln(189);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ALEGRE _
	p000e0208:
	{
 		if (skipdoall('p000e0208')) break p000e0208;
 		if (in_response)
		{
			if (!CNDverb(160)) break p000e0208;
 		}
 		ACCwriteln(190);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APLAUDE _
	p000e0209:
	{
 		if (skipdoall('p000e0209')) break p000e0209;
 		if (in_response)
		{
			if (!CNDverb(161)) break p000e0209;
 		}
 		ACCwriteln(191);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ASENTIR _
	p000e0210:
	{
 		if (skipdoall('p000e0210')) break p000e0210;
 		if (in_response)
		{
			if (!CNDverb(162)) break p000e0210;
 		}
 		ACCwriteln(192);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AYUDA _
	p000e0211:
	{
 		if (skipdoall('p000e0211')) break p000e0211;
 		if (in_response)
		{
			if (!CNDverb(34)) break p000e0211;
 		}
 		ACCwriteln(193);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BAILA _
	p000e0212:
	{
 		if (skipdoall('p000e0212')) break p000e0212;
 		if (in_response)
		{
			if (!CNDverb(112)) break p000e0212;
 		}
 		ACCwriteln(194);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BOSTEZA _
	p000e0213:
	{
 		if (skipdoall('p000e0213')) break p000e0213;
 		if (in_response)
		{
			if (!CNDverb(133)) break p000e0213;
 		}
 		ACCwriteln(195);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CANTA _
	p000e0214:
	{
 		if (skipdoall('p000e0214')) break p000e0214;
 		if (in_response)
		{
			if (!CNDverb(44)) break p000e0214;
 		}
 		ACCwriteln(196);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CAGA _
	p000e0215:
	{
 		if (skipdoall('p000e0215')) break p000e0215;
 		if (in_response)
		{
			if (!CNDverb(47)) break p000e0215;
 		}
 		ACCwriteln(197);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CARGAR _
	p000e0216:
	{
 		if (skipdoall('p000e0216')) break p000e0216;
 		if (in_response)
		{
			if (!CNDverb(27)) break p000e0216;
 		}
 		ACCload();
		break pro000_restart;
		{}

	}

	// CAVA _
	p000e0217:
	{
 		if (skipdoall('p000e0217')) break p000e0217;
 		if (in_response)
		{
			if (!CNDverb(51)) break p000e0217;
 		}
 		ACCwriteln(198);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESCANSA _
	p000e0218:
	{
 		if (skipdoall('p000e0218')) break p000e0218;
 		if (in_response)
		{
			if (!CNDverb(136)) break p000e0218;
 		}
 		ACCwriteln(199);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESPERTAR _
	p000e0219:
	{
 		if (skipdoall('p000e0219')) break p000e0219;
 		if (in_response)
		{
			if (!CNDverb(87)) break p000e0219;
 		}
 		ACCwriteln(200);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DORMIR _
	p000e0220:
	{
 		if (skipdoall('p000e0220')) break p000e0220;
 		if (in_response)
		{
			if (!CNDverb(61)) break p000e0220;
 		}
 		ACCwriteln(201);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENTERRAR _
	p000e0221:
	{
 		if (skipdoall('p000e0221')) break p000e0221;
 		if (in_response)
		{
			if (!CNDverb(132)) break p000e0221;
 		}
 		ACCwriteln(202);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ERUCTA _
	p000e0222:
	{
 		if (skipdoall('p000e0222')) break p000e0222;
 		if (in_response)
		{
			if (!CNDverb(126)) break p000e0222;
 		}
 		ACCwriteln(203);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCONDERSE _
	p000e0223:
	{
 		if (skipdoall('p000e0223')) break p000e0223;
 		if (in_response)
		{
			if (!CNDverb(92)) break p000e0223;
 		}
 		ACCwriteln(204);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCUCHA _
	p000e0224:
	{
 		if (skipdoall('p000e0224')) break p000e0224;
 		if (in_response)
		{
			if (!CNDverb(37)) break p000e0224;
 		}
		if (!CNDeq(34,255)) break p000e0224;
 		ACCwriteln(205);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESPERA _
	p000e0225:
	{
 		if (skipdoall('p000e0225')) break p000e0225;
 		if (in_response)
		{
			if (!CNDverb(43)) break p000e0225;
 		}
 		ACCsysmess(35);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACAVA _
	p000e0226:
	{
 		if (skipdoall('p000e0226')) break p000e0226;
 		if (in_response)
		{
			if (!CNDverb(25)) break p000e0226;
 		}
 		ACCquit();
 		function anykey00011() 
		{
 		ACCturns();
 		ACCend();
		return;
		}
 		waitKey(anykey00011);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// DOPAR _
	p000e0227:
	{
 		if (skipdoall('p000e0227')) break p000e0227;
 		if (in_response)
		{
			if (!CNDverb(151)) break p000e0227;
 		}
 		ACCwriteln(206);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GRABA _
	p000e0228:
	{
 		if (skipdoall('p000e0228')) break p000e0228;
 		if (in_response)
		{
			if (!CNDverb(26)) break p000e0228;
 		}
 		ACCsave();
		break pro000_restart;
		{}

	}

	// CHILLA _
	p000e0229:
	{
 		if (skipdoall('p000e0229')) break p000e0229;
 		if (in_response)
		{
			if (!CNDverb(77)) break p000e0229;
 		}
 		ACCwriteln(207);
 		ACCdone();
		break pro000_restart;
		{}

	}

	//  _
	p000e0230:
	{
 		if (skipdoall('p000e0230')) break p000e0230;
 		if (in_response)
		{
			if (!CNDverb(14)) break p000e0230;
 		}
 		ACCinven();
		break pro000_restart;
		{}

	}

	// LAVARSE _
	p000e0231:
	{
 		if (skipdoall('p000e0231')) break p000e0231;
 		if (in_response)
		{
			if (!CNDverb(88)) break p000e0231;
 		}
 		ACCwriteln(208);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEVANTARSE _
	p000e0232:
	{
 		if (skipdoall('p000e0232')) break p000e0232;
 		if (in_response)
		{
			if (!CNDverb(53)) break p000e0232;
 		}
 		ACCwriteln(209);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLORA _
	p000e0233:
	{
 		if (skipdoall('p000e0233')) break p000e0233;
 		if (in_response)
		{
			if (!CNDverb(93)) break p000e0233;
 		}
 		ACCwriteln(210);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// MENEA _
	p000e0234:
	{
 		if (skipdoall('p000e0234')) break p000e0234;
 		if (in_response)
		{
			if (!CNDverb(128)) break p000e0234;
 		}
 		ACCwriteln(211);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXAMINARSE _
	p000e0235:
	{
 		if (skipdoall('p000e0235')) break p000e0235;
 		if (in_response)
		{
			if (!CNDverb(85)) break p000e0235;
 		}
 		ACCwriteln(212);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// NADA _
	p000e0236:
	{
 		if (skipdoall('p000e0236')) break p000e0236;
 		if (in_response)
		{
			if (!CNDverb(56)) break p000e0236;
 		}
 		ACCwriteln(213);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// NEGAR _
	p000e0237:
	{
 		if (skipdoall('p000e0237')) break p000e0237;
 		if (in_response)
		{
			if (!CNDverb(163)) break p000e0237;
 		}
 		ACCwriteln(214);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// NOSTALGIA _
	p000e0238:
	{
 		if (skipdoall('p000e0238')) break p000e0238;
 		if (in_response)
		{
			if (!CNDverb(164)) break p000e0238;
 		}
 		ACCwriteln(215);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// IMPLORA _
	p000e0239:
	{
 		if (skipdoall('p000e0239')) break p000e0239;
 		if (in_response)
		{
			if (!CNDverb(59)) break p000e0239;
 		}
 		ACCwriteln(216);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CAGA _
	p000e0240:
	{
 		if (skipdoall('p000e0240')) break p000e0240;
 		if (in_response)
		{
			if (!CNDverb(47)) break p000e0240;
 		}
 		ACCwriteln(217);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PENSAR _
	p000e0241:
	{
 		if (skipdoall('p000e0241')) break p000e0241;
 		if (in_response)
		{
			if (!CNDverb(60)) break p000e0241;
 		}
 		ACCwriteln(218);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GRABARAM _
	p000e0242:
	{
 		if (skipdoall('p000e0242')) break p000e0242;
 		if (in_response)
		{
			if (!CNDverb(28)) break p000e0242;
 		}
 		ACCramsave();
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// CARGARAM _
	p000e0243:
	{
 		if (skipdoall('p000e0243')) break p000e0243;
 		if (in_response)
		{
			if (!CNDverb(29)) break p000e0243;
 		}
 		ACCramload(255);
 		ACCanykey();
 		function anykey00012() 
		{
 		ACCdesc();
		return;
		}
 		waitKey(anykey00012);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// ACORDARSE _
	p000e0244:
	{
 		if (skipdoall('p000e0244')) break p000e0244;
 		if (in_response)
		{
			if (!CNDverb(94)) break p000e0244;
 		}
 		ACCwriteln(219);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// REGISTRARS _
	p000e0245:
	{
 		if (skipdoall('p000e0245')) break p000e0245;
 		if (in_response)
		{
			if (!CNDverb(84)) break p000e0245;
 		}
 		ACCwriteln(220);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXITS _
	p000e0246:
	{
 		if (skipdoall('p000e0246')) break p000e0246;
 		if (in_response)
		{
			if (!CNDverb(41)) break p000e0246;
 		}
 		ACCexits(getFlag(38),1000);
 		ACCnewline();
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SALUDA _
	p000e0247:
	{
 		if (skipdoall('p000e0247')) break p000e0247;
 		if (in_response)
		{
			if (!CNDverb(113)) break p000e0247;
 		}
 		ACCwriteln(221);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BRINCA _
	p000e0248:
	{
 		if (skipdoall('p000e0248')) break p000e0248;
 		if (in_response)
		{
			if (!CNDverb(45)) break p000e0248;
 		}
 		ACCwriteln(222);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SENTAR _
	p000e0249:
	{
 		if (skipdoall('p000e0249')) break p000e0249;
 		if (in_response)
		{
			if (!CNDverb(23)) break p000e0249;
 		}
 		ACCwriteln(223);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SILBA _
	p000e0250:
	{
 		if (skipdoall('p000e0250')) break p000e0250;
 		if (in_response)
		{
			if (!CNDverb(115)) break p000e0250;
 		}
 		ACCwriteln(224);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// MATARSE _
	p000e0251:
	{
 		if (skipdoall('p000e0251')) break p000e0251;
 		if (in_response)
		{
			if (!CNDverb(81)) break p000e0251;
 		}
 		ACCwriteln(225);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SUPERGLUS _
	p000e0252:
	{
 		if (skipdoall('p000e0252')) break p000e0252;
 		if (in_response)
		{
			if (!CNDverb(70)) break p000e0252;
 		}
 		ACCversion();
 		ACCnewline();
 		ACCdone();
		break pro000_restart;
		{}

	}

	// TARAREA _
	p000e0253:
	{
 		if (skipdoall('p000e0253')) break p000e0253;
 		if (in_response)
		{
			if (!CNDverb(116)) break p000e0253;
 		}
 		ACCwriteln(226);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// TRANSCRIP _
	p000e0254:
	{
 		if (skipdoall('p000e0254')) break p000e0254;
 		if (in_response)
		{
			if (!CNDverb(68)) break p000e0254;
 		}
 		ACCtranscript(1);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCALA _
	p000e0255:
	{
 		if (skipdoall('p000e0255')) break p000e0255;
 		if (in_response)
		{
			if (!CNDverb(57)) break p000e0255;
 		}
 		ACCwriteln(227);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// USA _
	p000e0256:
	{
 		if (skipdoall('p000e0256')) break p000e0256;
 		if (in_response)
		{
			if (!CNDverb(80)) break p000e0256;
 		}
 		ACCwriteln(228);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// FLOTA _
	p000e0257:
	{
 		if (skipdoall('p000e0257')) break p000e0257;
 		if (in_response)
		{
			if (!CNDverb(117)) break p000e0257;
 		}
 		ACCwriteln(229);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VOMITA _
	p000e0258:
	{
 		if (skipdoall('p000e0258')) break p000e0258;
 		if (in_response)
		{
			if (!CNDverb(127)) break p000e0258;
 		}
 		ACCwriteln(230);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// XYZZY _
	p000e0259:
	{
 		if (skipdoall('p000e0259')) break p000e0259;
 		if (in_response)
		{
			if (!CNDverb(82)) break p000e0259;
 		}
 		ACCwriteln(231);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRAZA _
	p000e0260:
	{
 		if (skipdoall('p000e0260')) break p000e0260;
 		if (in_response)
		{
			if (!CNDverb(105)) break p000e0260;
 		}
		if (!CNDeq(34,255)) break p000e0260;
		if (!CNDbnotzero(12,1)) break p000e0260;
 		ACCwriteln(232);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRAZA _
	p000e0261:
	{
 		if (skipdoall('p000e0261')) break p000e0261;
 		if (in_response)
		{
			if (!CNDverb(105)) break p000e0261;
 		}
		if (!CNDeq(34,255)) break p000e0261;
		if (!CNDbzero(12,1)) break p000e0261;
 		ACCwriteln(233);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRAZA _
	p000e0262:
	{
 		if (skipdoall('p000e0262')) break p000e0262;
 		if (in_response)
		{
			if (!CNDverb(105)) break p000e0262;
 		}
		if (!CNDnoteq(34,255)) break p000e0262;
		if (!CNDnoteq(51,255)) break p000e0262;
		if (!CNDonotzero(getFlag(51),3)) break p000e0262;
		if (!CNDpresent(getFlag(51))) break p000e0262;
 		ACCwriteln(234);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRAZA _
	p000e0263:
	{
 		if (skipdoall('p000e0263')) break p000e0263;
 		if (in_response)
		{
			if (!CNDverb(105)) break p000e0263;
 		}
		if (!CNDnoteq(34,255)) break p000e0263;
		if (!CNDnoteq(51,255)) break p000e0263;
		if (!CNDonotzero(getFlag(51),3)) break p000e0263;
		if (!CNDabsent(getFlag(51))) break p000e0263;
 		ACCwriteln(235);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRAZA _
	p000e0264:
	{
 		if (skipdoall('p000e0264')) break p000e0264;
 		if (in_response)
		{
			if (!CNDverb(105)) break p000e0264;
 		}
		if (!CNDnoteq(34,255)) break p000e0264;
		if (!CNDeq(51,255)) break p000e0264;
 		ACCwriteln(236);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRAZA _
	p000e0265:
	{
 		if (skipdoall('p000e0265')) break p000e0265;
 		if (in_response)
		{
			if (!CNDverb(105)) break p000e0265;
 		}
		if (!CNDnoteq(51,255)) break p000e0265;
		if (!CNDpresent(getFlag(51))) break p000e0265;
 		ACCwriteln(237);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRAZA _
	p000e0266:
	{
 		if (skipdoall('p000e0266')) break p000e0266;
 		if (in_response)
		{
			if (!CNDverb(105)) break p000e0266;
 		}
		if (!CNDnoteq(51,255)) break p000e0266;
		if (!CNDabsent(getFlag(51))) break p000e0266;
 		ACCwriteln(238);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE _
	p000e0267:
	{
 		if (skipdoall('p000e0267')) break p000e0267;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0267;
 		}
		if (!CNDeq(34,255)) break p000e0267;
		if (!CNDbnotzero(12,1)) break p000e0267;
 		ACCwriteln(239);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE _
	p000e0268:
	{
 		if (skipdoall('p000e0268')) break p000e0268;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0268;
 		}
		if (!CNDeq(34,255)) break p000e0268;
		if (!CNDbzero(12,1)) break p000e0268;
 		ACCwriteln(240);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE _
	p000e0269:
	{
 		if (skipdoall('p000e0269')) break p000e0269;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0269;
 		}
		if (!CNDnoteq(34,255)) break p000e0269;
		if (!CNDnoteq(51,255)) break p000e0269;
		if (!CNDonotzero(getFlag(51),3)) break p000e0269;
		if (!CNDpresent(getFlag(51))) break p000e0269;
 		ACCwriteln(241);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE _
	p000e0270:
	{
 		if (skipdoall('p000e0270')) break p000e0270;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0270;
 		}
		if (!CNDnoteq(34,255)) break p000e0270;
		if (!CNDnoteq(51,255)) break p000e0270;
		if (!CNDonotzero(getFlag(51),3)) break p000e0270;
		if (!CNDabsent(getFlag(51))) break p000e0270;
 		ACCwriteln(242);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE _
	p000e0271:
	{
 		if (skipdoall('p000e0271')) break p000e0271;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0271;
 		}
		if (!CNDnoteq(34,255)) break p000e0271;
		if (!CNDeq(51,255)) break p000e0271;
 		ACCwriteln(243);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE _
	p000e0272:
	{
 		if (skipdoall('p000e0272')) break p000e0272;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0272;
 		}
		if (!CNDnoteq(51,255)) break p000e0272;
		if (!CNDpresent(getFlag(51))) break p000e0272;
 		ACCwriteln(244);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE _
	p000e0273:
	{
 		if (skipdoall('p000e0273')) break p000e0273;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0273;
 		}
		if (!CNDnoteq(51,255)) break p000e0273;
		if (!CNDabsent(getFlag(51))) break p000e0273;
 		ACCwriteln(245);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACARICIA _
	p000e0274:
	{
 		if (skipdoall('p000e0274')) break p000e0274;
 		if (in_response)
		{
			if (!CNDverb(145)) break p000e0274;
 		}
		if (!CNDeq(34,255)) break p000e0274;
		if (!CNDbnotzero(12,1)) break p000e0274;
 		ACCwriteln(246);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACARICIA _
	p000e0275:
	{
 		if (skipdoall('p000e0275')) break p000e0275;
 		if (in_response)
		{
			if (!CNDverb(145)) break p000e0275;
 		}
		if (!CNDeq(34,255)) break p000e0275;
		if (!CNDbzero(12,1)) break p000e0275;
 		ACCwriteln(247);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACARICIA _
	p000e0276:
	{
 		if (skipdoall('p000e0276')) break p000e0276;
 		if (in_response)
		{
			if (!CNDverb(145)) break p000e0276;
 		}
		if (!CNDnoteq(34,255)) break p000e0276;
		if (!CNDnoteq(51,255)) break p000e0276;
		if (!CNDonotzero(getFlag(51),3)) break p000e0276;
		if (!CNDpresent(getFlag(51))) break p000e0276;
 		ACCwriteln(248);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACARICIA _
	p000e0277:
	{
 		if (skipdoall('p000e0277')) break p000e0277;
 		if (in_response)
		{
			if (!CNDverb(145)) break p000e0277;
 		}
		if (!CNDnoteq(34,255)) break p000e0277;
		if (!CNDnoteq(51,255)) break p000e0277;
		if (!CNDonotzero(getFlag(51),3)) break p000e0277;
		if (!CNDabsent(getFlag(51))) break p000e0277;
 		ACCwriteln(249);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACARICIA _
	p000e0278:
	{
 		if (skipdoall('p000e0278')) break p000e0278;
 		if (in_response)
		{
			if (!CNDverb(145)) break p000e0278;
 		}
		if (!CNDnoteq(34,255)) break p000e0278;
		if (!CNDeq(51,255)) break p000e0278;
 		ACCwriteln(250);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACARICIA _
	p000e0279:
	{
 		if (skipdoall('p000e0279')) break p000e0279;
 		if (in_response)
		{
			if (!CNDverb(145)) break p000e0279;
 		}
		if (!CNDnoteq(51,255)) break p000e0279;
		if (!CNDpresent(getFlag(51))) break p000e0279;
 		ACCwriteln(251);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACARICIA _
	p000e0280:
	{
 		if (skipdoall('p000e0280')) break p000e0280;
 		if (in_response)
		{
			if (!CNDverb(145)) break p000e0280;
 		}
		if (!CNDnoteq(51,255)) break p000e0280;
		if (!CNDabsent(getFlag(51))) break p000e0280;
 		ACCwriteln(252);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACERCA _
	p000e0281:
	{
 		if (skipdoall('p000e0281')) break p000e0281;
 		if (in_response)
		{
			if (!CNDverb(140)) break p000e0281;
 		}
		if (!CNDeq(34,255)) break p000e0281;
		if (!CNDbnotzero(12,1)) break p000e0281;
 		ACCwriteln(253);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACERCA _
	p000e0282:
	{
 		if (skipdoall('p000e0282')) break p000e0282;
 		if (in_response)
		{
			if (!CNDverb(140)) break p000e0282;
 		}
		if (!CNDeq(34,255)) break p000e0282;
		if (!CNDbzero(12,1)) break p000e0282;
 		ACCwriteln(254);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACERCA _
	p000e0283:
	{
 		if (skipdoall('p000e0283')) break p000e0283;
 		if (in_response)
		{
			if (!CNDverb(140)) break p000e0283;
 		}
		if (!CNDnoteq(34,255)) break p000e0283;
		if (!CNDnoteq(51,255)) break p000e0283;
		if (!CNDonotzero(getFlag(51),3)) break p000e0283;
		if (!CNDpresent(getFlag(51))) break p000e0283;
 		ACCwriteln(255);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACERCA _
	p000e0284:
	{
 		if (skipdoall('p000e0284')) break p000e0284;
 		if (in_response)
		{
			if (!CNDverb(140)) break p000e0284;
 		}
		if (!CNDnoteq(34,255)) break p000e0284;
		if (!CNDnoteq(51,255)) break p000e0284;
		if (!CNDonotzero(getFlag(51),3)) break p000e0284;
		if (!CNDabsent(getFlag(51))) break p000e0284;
 		ACCwriteln(256);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACERCA _
	p000e0285:
	{
 		if (skipdoall('p000e0285')) break p000e0285;
 		if (in_response)
		{
			if (!CNDverb(140)) break p000e0285;
 		}
		if (!CNDnoteq(34,255)) break p000e0285;
		if (!CNDeq(51,255)) break p000e0285;
 		ACCwriteln(257);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACERCA _
	p000e0286:
	{
 		if (skipdoall('p000e0286')) break p000e0286;
 		if (in_response)
		{
			if (!CNDverb(140)) break p000e0286;
 		}
		if (!CNDnoteq(51,255)) break p000e0286;
		if (!CNDpresent(getFlag(51))) break p000e0286;
 		ACCwriteln(258);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACERCA _
	p000e0287:
	{
 		if (skipdoall('p000e0287')) break p000e0287;
 		if (in_response)
		{
			if (!CNDverb(140)) break p000e0287;
 		}
		if (!CNDnoteq(51,255)) break p000e0287;
		if (!CNDabsent(getFlag(51))) break p000e0287;
 		ACCwriteln(259);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGITA _
	p000e0288:
	{
 		if (skipdoall('p000e0288')) break p000e0288;
 		if (in_response)
		{
			if (!CNDverb(49)) break p000e0288;
 		}
		if (!CNDeq(34,255)) break p000e0288;
		if (!CNDbnotzero(12,1)) break p000e0288;
 		ACCwriteln(260);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGITA _
	p000e0289:
	{
 		if (skipdoall('p000e0289')) break p000e0289;
 		if (in_response)
		{
			if (!CNDverb(49)) break p000e0289;
 		}
		if (!CNDeq(34,255)) break p000e0289;
		if (!CNDbzero(12,1)) break p000e0289;
 		ACCwriteln(261);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGITA _
	p000e0290:
	{
 		if (skipdoall('p000e0290')) break p000e0290;
 		if (in_response)
		{
			if (!CNDverb(49)) break p000e0290;
 		}
		if (!CNDnoteq(34,255)) break p000e0290;
		if (!CNDnoteq(51,255)) break p000e0290;
		if (!CNDonotzero(getFlag(51),3)) break p000e0290;
		if (!CNDpresent(getFlag(51))) break p000e0290;
 		ACCwriteln(262);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGITA _
	p000e0291:
	{
 		if (skipdoall('p000e0291')) break p000e0291;
 		if (in_response)
		{
			if (!CNDverb(49)) break p000e0291;
 		}
		if (!CNDnoteq(34,255)) break p000e0291;
		if (!CNDnoteq(51,255)) break p000e0291;
		if (!CNDonotzero(getFlag(51),3)) break p000e0291;
		if (!CNDabsent(getFlag(51))) break p000e0291;
 		ACCwriteln(263);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGITA _
	p000e0292:
	{
 		if (skipdoall('p000e0292')) break p000e0292;
 		if (in_response)
		{
			if (!CNDverb(49)) break p000e0292;
 		}
		if (!CNDnoteq(34,255)) break p000e0292;
		if (!CNDeq(51,255)) break p000e0292;
 		ACCwriteln(264);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGITA _
	p000e0293:
	{
 		if (skipdoall('p000e0293')) break p000e0293;
 		if (in_response)
		{
			if (!CNDverb(49)) break p000e0293;
 		}
		if (!CNDnoteq(51,255)) break p000e0293;
		if (!CNDpresent(getFlag(51))) break p000e0293;
 		ACCwriteln(265);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGITA _
	p000e0294:
	{
 		if (skipdoall('p000e0294')) break p000e0294;
 		if (in_response)
		{
			if (!CNDverb(49)) break p000e0294;
 		}
		if (!CNDnoteq(51,255)) break p000e0294;
		if (!CNDabsent(getFlag(51))) break p000e0294;
 		ACCwriteln(266);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ALZA _
	p000e0295:
	{
 		if (skipdoall('p000e0295')) break p000e0295;
 		if (in_response)
		{
			if (!CNDverb(118)) break p000e0295;
 		}
		if (!CNDeq(34,255)) break p000e0295;
		if (!CNDbnotzero(12,1)) break p000e0295;
 		ACCwriteln(267);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ALZA _
	p000e0296:
	{
 		if (skipdoall('p000e0296')) break p000e0296;
 		if (in_response)
		{
			if (!CNDverb(118)) break p000e0296;
 		}
		if (!CNDeq(34,255)) break p000e0296;
		if (!CNDbzero(12,1)) break p000e0296;
 		ACCwriteln(268);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ALZA _
	p000e0297:
	{
 		if (skipdoall('p000e0297')) break p000e0297;
 		if (in_response)
		{
			if (!CNDverb(118)) break p000e0297;
 		}
		if (!CNDnoteq(34,255)) break p000e0297;
		if (!CNDnoteq(51,255)) break p000e0297;
		if (!CNDonotzero(getFlag(51),3)) break p000e0297;
		if (!CNDpresent(getFlag(51))) break p000e0297;
 		ACCwriteln(269);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ALZA _
	p000e0298:
	{
 		if (skipdoall('p000e0298')) break p000e0298;
 		if (in_response)
		{
			if (!CNDverb(118)) break p000e0298;
 		}
		if (!CNDnoteq(34,255)) break p000e0298;
		if (!CNDnoteq(51,255)) break p000e0298;
		if (!CNDonotzero(getFlag(51),3)) break p000e0298;
		if (!CNDabsent(getFlag(51))) break p000e0298;
 		ACCwriteln(270);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ALZA _
	p000e0299:
	{
 		if (skipdoall('p000e0299')) break p000e0299;
 		if (in_response)
		{
			if (!CNDverb(118)) break p000e0299;
 		}
		if (!CNDnoteq(34,255)) break p000e0299;
		if (!CNDeq(51,255)) break p000e0299;
 		ACCwriteln(271);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ALZA _
	p000e0300:
	{
 		if (skipdoall('p000e0300')) break p000e0300;
 		if (in_response)
		{
			if (!CNDverb(118)) break p000e0300;
 		}
		if (!CNDnoteq(51,255)) break p000e0300;
		if (!CNDpresent(getFlag(51))) break p000e0300;
		if (!CNDgt(55,52)) break p000e0300;
 		ACCwriteln(272);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ALZA _
	p000e0301:
	{
 		if (skipdoall('p000e0301')) break p000e0301;
 		if (in_response)
		{
			if (!CNDverb(118)) break p000e0301;
 		}
		if (!CNDnoteq(51,255)) break p000e0301;
		if (!CNDpresent(getFlag(51))) break p000e0301;
 		ACCwriteln(273);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ALZA _
	p000e0302:
	{
 		if (skipdoall('p000e0302')) break p000e0302;
 		if (in_response)
		{
			if (!CNDverb(118)) break p000e0302;
 		}
		if (!CNDnoteq(51,255)) break p000e0302;
		if (!CNDabsent(getFlag(51))) break p000e0302;
 		ACCwriteln(274);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APAGA _
	p000e0303:
	{
 		if (skipdoall('p000e0303')) break p000e0303;
 		if (in_response)
		{
			if (!CNDverb(138)) break p000e0303;
 		}
		if (!CNDeq(34,255)) break p000e0303;
		if (!CNDbnotzero(12,1)) break p000e0303;
 		ACCwriteln(275);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APAGA _
	p000e0304:
	{
 		if (skipdoall('p000e0304')) break p000e0304;
 		if (in_response)
		{
			if (!CNDverb(138)) break p000e0304;
 		}
		if (!CNDeq(34,255)) break p000e0304;
		if (!CNDbzero(12,1)) break p000e0304;
 		ACCwriteln(276);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APAGA _
	p000e0305:
	{
 		if (skipdoall('p000e0305')) break p000e0305;
 		if (in_response)
		{
			if (!CNDverb(138)) break p000e0305;
 		}
		if (!CNDnoteq(34,255)) break p000e0305;
		if (!CNDnoteq(51,255)) break p000e0305;
		if (!CNDonotzero(getFlag(51),3)) break p000e0305;
		if (!CNDpresent(getFlag(51))) break p000e0305;
 		ACCwriteln(277);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APAGA _
	p000e0306:
	{
 		if (skipdoall('p000e0306')) break p000e0306;
 		if (in_response)
		{
			if (!CNDverb(138)) break p000e0306;
 		}
		if (!CNDnoteq(34,255)) break p000e0306;
		if (!CNDnoteq(51,255)) break p000e0306;
		if (!CNDonotzero(getFlag(51),3)) break p000e0306;
		if (!CNDabsent(getFlag(51))) break p000e0306;
 		ACCwriteln(278);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APAGA _
	p000e0307:
	{
 		if (skipdoall('p000e0307')) break p000e0307;
 		if (in_response)
		{
			if (!CNDverb(138)) break p000e0307;
 		}
		if (!CNDnoteq(34,255)) break p000e0307;
		if (!CNDeq(51,255)) break p000e0307;
 		ACCwriteln(279);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APAGA _
	p000e0308:
	{
 		if (skipdoall('p000e0308')) break p000e0308;
 		if (in_response)
		{
			if (!CNDverb(138)) break p000e0308;
 		}
		if (!CNDnoteq(51,255)) break p000e0308;
		if (!CNDpresent(getFlag(51))) break p000e0308;
 		ACCwriteln(280);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APAGA _
	p000e0309:
	{
 		if (skipdoall('p000e0309')) break p000e0309;
 		if (in_response)
		{
			if (!CNDverb(138)) break p000e0309;
 		}
		if (!CNDnoteq(51,255)) break p000e0309;
		if (!CNDabsent(getFlag(51))) break p000e0309;
 		ACCwriteln(281);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APRETAR _
	p000e0310:
	{
 		if (skipdoall('p000e0310')) break p000e0310;
 		if (in_response)
		{
			if (!CNDverb(111)) break p000e0310;
 		}
		if (!CNDeq(34,255)) break p000e0310;
		if (!CNDbnotzero(12,1)) break p000e0310;
 		ACCwriteln(282);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APRETAR _
	p000e0311:
	{
 		if (skipdoall('p000e0311')) break p000e0311;
 		if (in_response)
		{
			if (!CNDverb(111)) break p000e0311;
 		}
		if (!CNDeq(34,255)) break p000e0311;
		if (!CNDbzero(12,1)) break p000e0311;
 		ACCwriteln(283);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APRETAR _
	p000e0312:
	{
 		if (skipdoall('p000e0312')) break p000e0312;
 		if (in_response)
		{
			if (!CNDverb(111)) break p000e0312;
 		}
		if (!CNDnoteq(34,255)) break p000e0312;
		if (!CNDnoteq(51,255)) break p000e0312;
		if (!CNDonotzero(getFlag(51),3)) break p000e0312;
		if (!CNDpresent(getFlag(51))) break p000e0312;
 		ACCwriteln(284);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APRETAR _
	p000e0313:
	{
 		if (skipdoall('p000e0313')) break p000e0313;
 		if (in_response)
		{
			if (!CNDverb(111)) break p000e0313;
 		}
		if (!CNDnoteq(34,255)) break p000e0313;
		if (!CNDnoteq(51,255)) break p000e0313;
		if (!CNDonotzero(getFlag(51),3)) break p000e0313;
		if (!CNDabsent(getFlag(51))) break p000e0313;
 		ACCwriteln(285);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APRETAR _
	p000e0314:
	{
 		if (skipdoall('p000e0314')) break p000e0314;
 		if (in_response)
		{
			if (!CNDverb(111)) break p000e0314;
 		}
		if (!CNDnoteq(34,255)) break p000e0314;
		if (!CNDeq(51,255)) break p000e0314;
 		ACCwriteln(286);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APRETAR _
	p000e0315:
	{
 		if (skipdoall('p000e0315')) break p000e0315;
 		if (in_response)
		{
			if (!CNDverb(111)) break p000e0315;
 		}
		if (!CNDnoteq(51,255)) break p000e0315;
		if (!CNDpresent(getFlag(51))) break p000e0315;
 		ACCwriteln(287);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APRETAR _
	p000e0316:
	{
 		if (skipdoall('p000e0316')) break p000e0316;
 		if (in_response)
		{
			if (!CNDverb(111)) break p000e0316;
 		}
		if (!CNDnoteq(51,255)) break p000e0316;
		if (!CNDabsent(getFlag(51))) break p000e0316;
 		ACCwriteln(288);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGREDE _
	p000e0317:
	{
 		if (skipdoall('p000e0317')) break p000e0317;
 		if (in_response)
		{
			if (!CNDverb(46)) break p000e0317;
 		}
		if (!CNDeq(34,255)) break p000e0317;
		if (!CNDbnotzero(12,1)) break p000e0317;
 		ACCwriteln(289);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGREDE _
	p000e0318:
	{
 		if (skipdoall('p000e0318')) break p000e0318;
 		if (in_response)
		{
			if (!CNDverb(46)) break p000e0318;
 		}
		if (!CNDeq(34,255)) break p000e0318;
		if (!CNDbzero(12,1)) break p000e0318;
 		ACCwriteln(290);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGREDE _
	p000e0319:
	{
 		if (skipdoall('p000e0319')) break p000e0319;
 		if (in_response)
		{
			if (!CNDverb(46)) break p000e0319;
 		}
		if (!CNDnoteq(34,255)) break p000e0319;
		if (!CNDnoteq(51,255)) break p000e0319;
		if (!CNDonotzero(getFlag(51),3)) break p000e0319;
		if (!CNDpresent(getFlag(51))) break p000e0319;
 		ACCwriteln(291);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGREDE _
	p000e0320:
	{
 		if (skipdoall('p000e0320')) break p000e0320;
 		if (in_response)
		{
			if (!CNDverb(46)) break p000e0320;
 		}
		if (!CNDnoteq(34,255)) break p000e0320;
		if (!CNDnoteq(51,255)) break p000e0320;
		if (!CNDonotzero(getFlag(51),3)) break p000e0320;
		if (!CNDabsent(getFlag(51))) break p000e0320;
 		ACCwriteln(292);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGREDE _
	p000e0321:
	{
 		if (skipdoall('p000e0321')) break p000e0321;
 		if (in_response)
		{
			if (!CNDverb(46)) break p000e0321;
 		}
		if (!CNDnoteq(34,255)) break p000e0321;
		if (!CNDeq(51,255)) break p000e0321;
 		ACCwriteln(293);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGREDE _
	p000e0322:
	{
 		if (skipdoall('p000e0322')) break p000e0322;
 		if (in_response)
		{
			if (!CNDverb(46)) break p000e0322;
 		}
		if (!CNDnoteq(51,255)) break p000e0322;
		if (!CNDpresent(getFlag(51))) break p000e0322;
 		ACCwriteln(294);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGREDE _
	p000e0323:
	{
 		if (skipdoall('p000e0323')) break p000e0323;
 		if (in_response)
		{
			if (!CNDverb(46)) break p000e0323;
 		}
		if (!CNDnoteq(51,255)) break p000e0323;
		if (!CNDabsent(getFlag(51))) break p000e0323;
 		ACCwriteln(295);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANUDA _
	p000e0324:
	{
 		if (skipdoall('p000e0324')) break p000e0324;
 		if (in_response)
		{
			if (!CNDverb(54)) break p000e0324;
 		}
		if (!CNDeq(34,255)) break p000e0324;
		if (!CNDbnotzero(12,1)) break p000e0324;
 		ACCwriteln(296);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANUDA _
	p000e0325:
	{
 		if (skipdoall('p000e0325')) break p000e0325;
 		if (in_response)
		{
			if (!CNDverb(54)) break p000e0325;
 		}
		if (!CNDeq(34,255)) break p000e0325;
		if (!CNDbzero(12,1)) break p000e0325;
 		ACCwriteln(297);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANUDA _
	p000e0326:
	{
 		if (skipdoall('p000e0326')) break p000e0326;
 		if (in_response)
		{
			if (!CNDverb(54)) break p000e0326;
 		}
		if (!CNDnoteq(34,255)) break p000e0326;
		if (!CNDnoteq(51,255)) break p000e0326;
		if (!CNDonotzero(getFlag(51),3)) break p000e0326;
		if (!CNDpresent(getFlag(51))) break p000e0326;
 		ACCwriteln(298);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANUDA _
	p000e0327:
	{
 		if (skipdoall('p000e0327')) break p000e0327;
 		if (in_response)
		{
			if (!CNDverb(54)) break p000e0327;
 		}
		if (!CNDnoteq(34,255)) break p000e0327;
		if (!CNDnoteq(51,255)) break p000e0327;
		if (!CNDonotzero(getFlag(51),3)) break p000e0327;
		if (!CNDabsent(getFlag(51))) break p000e0327;
 		ACCwriteln(299);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANUDA _
	p000e0328:
	{
 		if (skipdoall('p000e0328')) break p000e0328;
 		if (in_response)
		{
			if (!CNDverb(54)) break p000e0328;
 		}
		if (!CNDnoteq(34,255)) break p000e0328;
		if (!CNDeq(51,255)) break p000e0328;
 		ACCwriteln(300);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANUDA _
	p000e0329:
	{
 		if (skipdoall('p000e0329')) break p000e0329;
 		if (in_response)
		{
			if (!CNDverb(54)) break p000e0329;
 		}
		if (!CNDnoteq(51,255)) break p000e0329;
		if (!CNDpresent(getFlag(51))) break p000e0329;
 		ACCwriteln(301);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANUDA _
	p000e0330:
	{
 		if (skipdoall('p000e0330')) break p000e0330;
 		if (in_response)
		{
			if (!CNDverb(54)) break p000e0330;
 		}
		if (!CNDnoteq(51,255)) break p000e0330;
		if (!CNDabsent(getFlag(51))) break p000e0330;
 		ACCwriteln(302);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARRASTRA _
	p000e0331:
	{
 		if (skipdoall('p000e0331')) break p000e0331;
 		if (in_response)
		{
			if (!CNDverb(83)) break p000e0331;
 		}
		if (!CNDeq(34,255)) break p000e0331;
		if (!CNDbnotzero(12,1)) break p000e0331;
 		ACCwriteln(303);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARRASTRA _
	p000e0332:
	{
 		if (skipdoall('p000e0332')) break p000e0332;
 		if (in_response)
		{
			if (!CNDverb(83)) break p000e0332;
 		}
		if (!CNDeq(34,255)) break p000e0332;
		if (!CNDbzero(12,1)) break p000e0332;
 		ACCwriteln(304);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARRASTRA _
	p000e0333:
	{
 		if (skipdoall('p000e0333')) break p000e0333;
 		if (in_response)
		{
			if (!CNDverb(83)) break p000e0333;
 		}
		if (!CNDnoteq(34,255)) break p000e0333;
		if (!CNDnoteq(51,255)) break p000e0333;
		if (!CNDonotzero(getFlag(51),3)) break p000e0333;
		if (!CNDpresent(getFlag(51))) break p000e0333;
 		ACCwriteln(305);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARRASTRA _
	p000e0334:
	{
 		if (skipdoall('p000e0334')) break p000e0334;
 		if (in_response)
		{
			if (!CNDverb(83)) break p000e0334;
 		}
		if (!CNDnoteq(34,255)) break p000e0334;
		if (!CNDnoteq(51,255)) break p000e0334;
		if (!CNDonotzero(getFlag(51),3)) break p000e0334;
		if (!CNDabsent(getFlag(51))) break p000e0334;
 		ACCwriteln(306);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARRASTRA _
	p000e0335:
	{
 		if (skipdoall('p000e0335')) break p000e0335;
 		if (in_response)
		{
			if (!CNDverb(83)) break p000e0335;
 		}
		if (!CNDnoteq(34,255)) break p000e0335;
		if (!CNDeq(51,255)) break p000e0335;
 		ACCwriteln(307);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARRASTRA _
	p000e0336:
	{
 		if (skipdoall('p000e0336')) break p000e0336;
 		if (in_response)
		{
			if (!CNDverb(83)) break p000e0336;
 		}
		if (!CNDnoteq(51,255)) break p000e0336;
		if (!CNDpresent(getFlag(51))) break p000e0336;
 		ACCwriteln(308);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARRASTRA _
	p000e0337:
	{
 		if (skipdoall('p000e0337')) break p000e0337;
 		if (in_response)
		{
			if (!CNDverb(83)) break p000e0337;
 		}
		if (!CNDnoteq(51,255)) break p000e0337;
		if (!CNDabsent(getFlag(51))) break p000e0337;
 		ACCwriteln(309);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BEBE _
	p000e0338:
	{
 		if (skipdoall('p000e0338')) break p000e0338;
 		if (in_response)
		{
			if (!CNDverb(39)) break p000e0338;
 		}
		if (!CNDeq(34,255)) break p000e0338;
		if (!CNDbnotzero(12,1)) break p000e0338;
 		ACCwriteln(310);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BEBE _
	p000e0339:
	{
 		if (skipdoall('p000e0339')) break p000e0339;
 		if (in_response)
		{
			if (!CNDverb(39)) break p000e0339;
 		}
		if (!CNDeq(34,255)) break p000e0339;
		if (!CNDbzero(12,1)) break p000e0339;
 		ACCwriteln(311);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BEBE _
	p000e0340:
	{
 		if (skipdoall('p000e0340')) break p000e0340;
 		if (in_response)
		{
			if (!CNDverb(39)) break p000e0340;
 		}
		if (!CNDnoteq(34,255)) break p000e0340;
		if (!CNDnoteq(51,255)) break p000e0340;
		if (!CNDonotzero(getFlag(51),3)) break p000e0340;
		if (!CNDpresent(getFlag(51))) break p000e0340;
 		ACCwriteln(312);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BEBE _
	p000e0341:
	{
 		if (skipdoall('p000e0341')) break p000e0341;
 		if (in_response)
		{
			if (!CNDverb(39)) break p000e0341;
 		}
		if (!CNDnoteq(34,255)) break p000e0341;
		if (!CNDnoteq(51,255)) break p000e0341;
		if (!CNDonotzero(getFlag(51),3)) break p000e0341;
		if (!CNDabsent(getFlag(51))) break p000e0341;
 		ACCwriteln(313);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BEBE _
	p000e0342:
	{
 		if (skipdoall('p000e0342')) break p000e0342;
 		if (in_response)
		{
			if (!CNDverb(39)) break p000e0342;
 		}
		if (!CNDnoteq(34,255)) break p000e0342;
		if (!CNDeq(51,255)) break p000e0342;
 		ACCwriteln(314);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BEBE _
	p000e0343:
	{
 		if (skipdoall('p000e0343')) break p000e0343;
 		if (in_response)
		{
			if (!CNDverb(39)) break p000e0343;
 		}
		if (!CNDnoteq(51,255)) break p000e0343;
		if (!CNDpresent(getFlag(51))) break p000e0343;
 		ACCwriteln(315);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BEBE _
	p000e0344:
	{
 		if (skipdoall('p000e0344')) break p000e0344;
 		if (in_response)
		{
			if (!CNDverb(39)) break p000e0344;
 		}
		if (!CNDnoteq(51,255)) break p000e0344;
		if (!CNDabsent(getFlag(51))) break p000e0344;
 		ACCwriteln(316);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BALANCEA _
	p000e0345:
	{
 		if (skipdoall('p000e0345')) break p000e0345;
 		if (in_response)
		{
			if (!CNDverb(131)) break p000e0345;
 		}
		if (!CNDeq(34,255)) break p000e0345;
		if (!CNDbnotzero(12,1)) break p000e0345;
 		ACCwriteln(317);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BALANCEA _
	p000e0346:
	{
 		if (skipdoall('p000e0346')) break p000e0346;
 		if (in_response)
		{
			if (!CNDverb(131)) break p000e0346;
 		}
		if (!CNDeq(34,255)) break p000e0346;
		if (!CNDbzero(12,1)) break p000e0346;
 		ACCwriteln(318);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BALANCEA _
	p000e0347:
	{
 		if (skipdoall('p000e0347')) break p000e0347;
 		if (in_response)
		{
			if (!CNDverb(131)) break p000e0347;
 		}
		if (!CNDnoteq(34,255)) break p000e0347;
		if (!CNDnoteq(51,255)) break p000e0347;
		if (!CNDonotzero(getFlag(51),3)) break p000e0347;
		if (!CNDpresent(getFlag(51))) break p000e0347;
 		ACCwriteln(319);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BALANCEA _
	p000e0348:
	{
 		if (skipdoall('p000e0348')) break p000e0348;
 		if (in_response)
		{
			if (!CNDverb(131)) break p000e0348;
 		}
		if (!CNDnoteq(34,255)) break p000e0348;
		if (!CNDnoteq(51,255)) break p000e0348;
		if (!CNDonotzero(getFlag(51),3)) break p000e0348;
		if (!CNDabsent(getFlag(51))) break p000e0348;
 		ACCwriteln(320);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BALANCEA _
	p000e0349:
	{
 		if (skipdoall('p000e0349')) break p000e0349;
 		if (in_response)
		{
			if (!CNDverb(131)) break p000e0349;
 		}
		if (!CNDnoteq(34,255)) break p000e0349;
		if (!CNDeq(51,255)) break p000e0349;
 		ACCwriteln(321);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BALANCEA _
	p000e0350:
	{
 		if (skipdoall('p000e0350')) break p000e0350;
 		if (in_response)
		{
			if (!CNDverb(131)) break p000e0350;
 		}
		if (!CNDnoteq(51,255)) break p000e0350;
		if (!CNDpresent(getFlag(51))) break p000e0350;
 		ACCwriteln(322);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BALANCEA _
	p000e0351:
	{
 		if (skipdoall('p000e0351')) break p000e0351;
 		if (in_response)
		{
			if (!CNDverb(131)) break p000e0351;
 		}
		if (!CNDnoteq(51,255)) break p000e0351;
		if (!CNDabsent(getFlag(51))) break p000e0351;
 		ACCwriteln(323);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BALANCEARS _
	p000e0352:
	{
 		if (skipdoall('p000e0352')) break p000e0352;
 		if (in_response)
		{
			if (!CNDverb(50)) break p000e0352;
 		}
		if (!CNDeq(34,255)) break p000e0352;
		if (!CNDbnotzero(12,1)) break p000e0352;
 		ACCwriteln(324);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BALANCEARS _
	p000e0353:
	{
 		if (skipdoall('p000e0353')) break p000e0353;
 		if (in_response)
		{
			if (!CNDverb(50)) break p000e0353;
 		}
		if (!CNDeq(34,255)) break p000e0353;
		if (!CNDbzero(12,1)) break p000e0353;
 		ACCwriteln(325);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BALANCEARS _
	p000e0354:
	{
 		if (skipdoall('p000e0354')) break p000e0354;
 		if (in_response)
		{
			if (!CNDverb(50)) break p000e0354;
 		}
		if (!CNDnoteq(34,255)) break p000e0354;
		if (!CNDnoteq(51,255)) break p000e0354;
		if (!CNDonotzero(getFlag(51),3)) break p000e0354;
		if (!CNDpresent(getFlag(51))) break p000e0354;
 		ACCwriteln(326);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BALANCEARS _
	p000e0355:
	{
 		if (skipdoall('p000e0355')) break p000e0355;
 		if (in_response)
		{
			if (!CNDverb(50)) break p000e0355;
 		}
		if (!CNDnoteq(34,255)) break p000e0355;
		if (!CNDnoteq(51,255)) break p000e0355;
		if (!CNDonotzero(getFlag(51),3)) break p000e0355;
		if (!CNDabsent(getFlag(51))) break p000e0355;
 		ACCwriteln(327);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BALANCEARS _
	p000e0356:
	{
 		if (skipdoall('p000e0356')) break p000e0356;
 		if (in_response)
		{
			if (!CNDverb(50)) break p000e0356;
 		}
		if (!CNDnoteq(34,255)) break p000e0356;
		if (!CNDeq(51,255)) break p000e0356;
 		ACCwriteln(328);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BALANCEARS _
	p000e0357:
	{
 		if (skipdoall('p000e0357')) break p000e0357;
 		if (in_response)
		{
			if (!CNDverb(50)) break p000e0357;
 		}
		if (!CNDnoteq(51,255)) break p000e0357;
		if (!CNDpresent(getFlag(51))) break p000e0357;
 		ACCwriteln(329);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BALANCEARS _
	p000e0358:
	{
 		if (skipdoall('p000e0358')) break p000e0358;
 		if (in_response)
		{
			if (!CNDverb(50)) break p000e0358;
 		}
		if (!CNDnoteq(51,255)) break p000e0358;
		if (!CNDabsent(getFlag(51))) break p000e0358;
 		ACCwriteln(330);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BESA _
	p000e0359:
	{
 		if (skipdoall('p000e0359')) break p000e0359;
 		if (in_response)
		{
			if (!CNDverb(62)) break p000e0359;
 		}
		if (!CNDeq(34,255)) break p000e0359;
		if (!CNDbnotzero(12,1)) break p000e0359;
 		ACCwriteln(331);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BESA _
	p000e0360:
	{
 		if (skipdoall('p000e0360')) break p000e0360;
 		if (in_response)
		{
			if (!CNDverb(62)) break p000e0360;
 		}
		if (!CNDeq(34,255)) break p000e0360;
		if (!CNDbzero(12,1)) break p000e0360;
 		ACCwriteln(332);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BESA _
	p000e0361:
	{
 		if (skipdoall('p000e0361')) break p000e0361;
 		if (in_response)
		{
			if (!CNDverb(62)) break p000e0361;
 		}
		if (!CNDnoteq(34,255)) break p000e0361;
		if (!CNDnoteq(51,255)) break p000e0361;
		if (!CNDonotzero(getFlag(51),3)) break p000e0361;
		if (!CNDpresent(getFlag(51))) break p000e0361;
 		ACCwriteln(333);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BESA _
	p000e0362:
	{
 		if (skipdoall('p000e0362')) break p000e0362;
 		if (in_response)
		{
			if (!CNDverb(62)) break p000e0362;
 		}
		if (!CNDnoteq(34,255)) break p000e0362;
		if (!CNDnoteq(51,255)) break p000e0362;
		if (!CNDonotzero(getFlag(51),3)) break p000e0362;
		if (!CNDabsent(getFlag(51))) break p000e0362;
 		ACCwriteln(334);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BESA _
	p000e0363:
	{
 		if (skipdoall('p000e0363')) break p000e0363;
 		if (in_response)
		{
			if (!CNDverb(62)) break p000e0363;
 		}
		if (!CNDnoteq(34,255)) break p000e0363;
		if (!CNDeq(51,255)) break p000e0363;
 		ACCwriteln(335);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BESA _
	p000e0364:
	{
 		if (skipdoall('p000e0364')) break p000e0364;
 		if (in_response)
		{
			if (!CNDverb(62)) break p000e0364;
 		}
		if (!CNDnoteq(51,255)) break p000e0364;
		if (!CNDpresent(getFlag(51))) break p000e0364;
 		ACCwriteln(336);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BESA _
	p000e0365:
	{
 		if (skipdoall('p000e0365')) break p000e0365;
 		if (in_response)
		{
			if (!CNDverb(62)) break p000e0365;
 		}
		if (!CNDnoteq(51,255)) break p000e0365;
		if (!CNDabsent(getFlag(51))) break p000e0365;
 		ACCwriteln(337);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CERRAR _
	p000e0366:
	{
 		if (skipdoall('p000e0366')) break p000e0366;
 		if (in_response)
		{
			if (!CNDverb(65)) break p000e0366;
 		}
		if (!CNDeq(34,255)) break p000e0366;
		if (!CNDbnotzero(12,1)) break p000e0366;
 		ACCwriteln(338);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CERRAR _
	p000e0367:
	{
 		if (skipdoall('p000e0367')) break p000e0367;
 		if (in_response)
		{
			if (!CNDverb(65)) break p000e0367;
 		}
		if (!CNDeq(34,255)) break p000e0367;
		if (!CNDbzero(12,1)) break p000e0367;
 		ACCwriteln(339);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CERRAR _
	p000e0368:
	{
 		if (skipdoall('p000e0368')) break p000e0368;
 		if (in_response)
		{
			if (!CNDverb(65)) break p000e0368;
 		}
		if (!CNDnoteq(34,255)) break p000e0368;
		if (!CNDnoteq(51,255)) break p000e0368;
		if (!CNDonotzero(getFlag(51),3)) break p000e0368;
		if (!CNDpresent(getFlag(51))) break p000e0368;
 		ACCwriteln(340);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CERRAR _
	p000e0369:
	{
 		if (skipdoall('p000e0369')) break p000e0369;
 		if (in_response)
		{
			if (!CNDverb(65)) break p000e0369;
 		}
		if (!CNDnoteq(34,255)) break p000e0369;
		if (!CNDnoteq(51,255)) break p000e0369;
		if (!CNDonotzero(getFlag(51),3)) break p000e0369;
		if (!CNDabsent(getFlag(51))) break p000e0369;
 		ACCwriteln(341);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CERRAR _
	p000e0370:
	{
 		if (skipdoall('p000e0370')) break p000e0370;
 		if (in_response)
		{
			if (!CNDverb(65)) break p000e0370;
 		}
		if (!CNDnoteq(34,255)) break p000e0370;
		if (!CNDeq(51,255)) break p000e0370;
 		ACCwriteln(342);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CERRAR _
	p000e0371:
	{
 		if (skipdoall('p000e0371')) break p000e0371;
 		if (in_response)
		{
			if (!CNDverb(65)) break p000e0371;
 		}
		if (!CNDnoteq(51,255)) break p000e0371;
		if (!CNDpresent(getFlag(51))) break p000e0371;
 		ACCwriteln(343);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CERRAR _
	p000e0372:
	{
 		if (skipdoall('p000e0372')) break p000e0372;
 		if (in_response)
		{
			if (!CNDverb(65)) break p000e0372;
 		}
		if (!CNDnoteq(51,255)) break p000e0372;
		if (!CNDabsent(getFlag(51))) break p000e0372;
 		ACCwriteln(344);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARRA _
	p000e0373:
	{
 		if (skipdoall('p000e0373')) break p000e0373;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0373;
 		}
		if (!CNDprep(3)) break p000e0373;
 		ACCwhatox2(14);
		if (!CNDnoteq(14,255)) break p000e0373;
		if (!CNDonotzero(getFlag(14),2)) break p000e0373;
 		ACClet(33,75);
		{}

	}

	// AGARRA _
	p000e0374:
	{
 		if (skipdoall('p000e0374')) break p000e0374;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0374;
 		}
		if (!CNDeq(34,255)) break p000e0374;
		if (!CNDbnotzero(12,1)) break p000e0374;
 		ACCwriteln(345);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARRA _
	p000e0375:
	{
 		if (skipdoall('p000e0375')) break p000e0375;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0375;
 		}
		if (!CNDeq(34,255)) break p000e0375;
		if (!CNDbzero(12,1)) break p000e0375;
 		ACCwriteln(346);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARRA _
	p000e0376:
	{
 		if (skipdoall('p000e0376')) break p000e0376;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0376;
 		}
 		ACCautog();
		if (!success) break pro000_restart;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// COME _
	p000e0377:
	{
 		if (skipdoall('p000e0377')) break p000e0377;
 		if (in_response)
		{
			if (!CNDverb(38)) break p000e0377;
 		}
		if (!CNDeq(34,255)) break p000e0377;
		if (!CNDbnotzero(12,1)) break p000e0377;
 		ACCwriteln(347);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// COME _
	p000e0378:
	{
 		if (skipdoall('p000e0378')) break p000e0378;
 		if (in_response)
		{
			if (!CNDverb(38)) break p000e0378;
 		}
		if (!CNDeq(34,255)) break p000e0378;
		if (!CNDbzero(12,1)) break p000e0378;
 		ACCwriteln(348);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// COME _
	p000e0379:
	{
 		if (skipdoall('p000e0379')) break p000e0379;
 		if (in_response)
		{
			if (!CNDverb(38)) break p000e0379;
 		}
		if (!CNDnoteq(34,255)) break p000e0379;
		if (!CNDnoteq(51,255)) break p000e0379;
		if (!CNDonotzero(getFlag(51),3)) break p000e0379;
		if (!CNDpresent(getFlag(51))) break p000e0379;
 		ACCwriteln(349);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// COME _
	p000e0380:
	{
 		if (skipdoall('p000e0380')) break p000e0380;
 		if (in_response)
		{
			if (!CNDverb(38)) break p000e0380;
 		}
		if (!CNDnoteq(34,255)) break p000e0380;
		if (!CNDnoteq(51,255)) break p000e0380;
		if (!CNDonotzero(getFlag(51),3)) break p000e0380;
		if (!CNDabsent(getFlag(51))) break p000e0380;
 		ACCwriteln(350);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// COME _
	p000e0381:
	{
 		if (skipdoall('p000e0381')) break p000e0381;
 		if (in_response)
		{
			if (!CNDverb(38)) break p000e0381;
 		}
		if (!CNDnoteq(34,255)) break p000e0381;
		if (!CNDeq(51,255)) break p000e0381;
 		ACCwriteln(351);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// COME _
	p000e0382:
	{
 		if (skipdoall('p000e0382')) break p000e0382;
 		if (in_response)
		{
			if (!CNDverb(38)) break p000e0382;
 		}
		if (!CNDnoteq(51,255)) break p000e0382;
		if (!CNDpresent(getFlag(51))) break p000e0382;
 		ACCwriteln(352);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// COME _
	p000e0383:
	{
 		if (skipdoall('p000e0383')) break p000e0383;
 		if (in_response)
		{
			if (!CNDverb(38)) break p000e0383;
 		}
		if (!CNDnoteq(51,255)) break p000e0383;
		if (!CNDabsent(getFlag(51))) break p000e0383;
 		ACCwriteln(353);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ADQUIERE _
	p000e0384:
	{
 		if (skipdoall('p000e0384')) break p000e0384;
 		if (in_response)
		{
			if (!CNDverb(106)) break p000e0384;
 		}
		if (!CNDeq(34,255)) break p000e0384;
		if (!CNDbnotzero(12,1)) break p000e0384;
 		ACCwriteln(354);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ADQUIERE _
	p000e0385:
	{
 		if (skipdoall('p000e0385')) break p000e0385;
 		if (in_response)
		{
			if (!CNDverb(106)) break p000e0385;
 		}
		if (!CNDeq(34,255)) break p000e0385;
		if (!CNDbzero(12,1)) break p000e0385;
 		ACCwriteln(355);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ADQUIERE _
	p000e0386:
	{
 		if (skipdoall('p000e0386')) break p000e0386;
 		if (in_response)
		{
			if (!CNDverb(106)) break p000e0386;
 		}
		if (!CNDnoteq(34,255)) break p000e0386;
		if (!CNDnoteq(51,255)) break p000e0386;
		if (!CNDonotzero(getFlag(51),3)) break p000e0386;
		if (!CNDpresent(getFlag(51))) break p000e0386;
 		ACCwriteln(356);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ADQUIERE _
	p000e0387:
	{
 		if (skipdoall('p000e0387')) break p000e0387;
 		if (in_response)
		{
			if (!CNDverb(106)) break p000e0387;
 		}
		if (!CNDnoteq(34,255)) break p000e0387;
		if (!CNDnoteq(51,255)) break p000e0387;
		if (!CNDonotzero(getFlag(51),3)) break p000e0387;
		if (!CNDabsent(getFlag(51))) break p000e0387;
 		ACCwriteln(357);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ADQUIERE _
	p000e0388:
	{
 		if (skipdoall('p000e0388')) break p000e0388;
 		if (in_response)
		{
			if (!CNDverb(106)) break p000e0388;
 		}
		if (!CNDnoteq(34,255)) break p000e0388;
		if (!CNDeq(51,255)) break p000e0388;
 		ACCwriteln(358);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ADQUIERE _
	p000e0389:
	{
 		if (skipdoall('p000e0389')) break p000e0389;
 		if (in_response)
		{
			if (!CNDverb(106)) break p000e0389;
 		}
		if (!CNDnoteq(51,255)) break p000e0389;
		if (!CNDpresent(getFlag(51))) break p000e0389;
 		ACCwriteln(359);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ADQUIERE _
	p000e0390:
	{
 		if (skipdoall('p000e0390')) break p000e0390;
 		if (in_response)
		{
			if (!CNDverb(106)) break p000e0390;
 		}
		if (!CNDnoteq(51,255)) break p000e0390;
		if (!CNDabsent(getFlag(51))) break p000e0390;
 		ACCwriteln(360);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CONECTA _
	p000e0391:
	{
 		if (skipdoall('p000e0391')) break p000e0391;
 		if (in_response)
		{
			if (!CNDverb(103)) break p000e0391;
 		}
		if (!CNDeq(34,255)) break p000e0391;
		if (!CNDbnotzero(12,1)) break p000e0391;
 		ACCwriteln(361);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CONECTA _
	p000e0392:
	{
 		if (skipdoall('p000e0392')) break p000e0392;
 		if (in_response)
		{
			if (!CNDverb(103)) break p000e0392;
 		}
		if (!CNDeq(34,255)) break p000e0392;
		if (!CNDbzero(12,1)) break p000e0392;
 		ACCwriteln(362);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CONECTA _
	p000e0393:
	{
 		if (skipdoall('p000e0393')) break p000e0393;
 		if (in_response)
		{
			if (!CNDverb(103)) break p000e0393;
 		}
		if (!CNDnoteq(34,255)) break p000e0393;
		if (!CNDnoteq(51,255)) break p000e0393;
		if (!CNDonotzero(getFlag(51),3)) break p000e0393;
		if (!CNDpresent(getFlag(51))) break p000e0393;
 		ACCwriteln(363);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CONECTA _
	p000e0394:
	{
 		if (skipdoall('p000e0394')) break p000e0394;
 		if (in_response)
		{
			if (!CNDverb(103)) break p000e0394;
 		}
		if (!CNDnoteq(34,255)) break p000e0394;
		if (!CNDnoteq(51,255)) break p000e0394;
		if (!CNDonotzero(getFlag(51),3)) break p000e0394;
		if (!CNDabsent(getFlag(51))) break p000e0394;
 		ACCwriteln(364);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CONECTA _
	p000e0395:
	{
 		if (skipdoall('p000e0395')) break p000e0395;
 		if (in_response)
		{
			if (!CNDverb(103)) break p000e0395;
 		}
		if (!CNDnoteq(34,255)) break p000e0395;
		if (!CNDeq(51,255)) break p000e0395;
 		ACCwriteln(365);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CONECTA _
	p000e0396:
	{
 		if (skipdoall('p000e0396')) break p000e0396;
 		if (in_response)
		{
			if (!CNDverb(103)) break p000e0396;
 		}
		if (!CNDnoteq(51,255)) break p000e0396;
		if (!CNDpresent(getFlag(51))) break p000e0396;
 		ACCwriteln(366);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CONECTA _
	p000e0397:
	{
 		if (skipdoall('p000e0397')) break p000e0397;
 		if (in_response)
		{
			if (!CNDverb(103)) break p000e0397;
 		}
		if (!CNDnoteq(51,255)) break p000e0397;
		if (!CNDabsent(getFlag(51))) break p000e0397;
 		ACCwriteln(367);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CONSULTA _
	p000e0398:
	{
 		if (skipdoall('p000e0398')) break p000e0398;
 		if (in_response)
		{
			if (!CNDverb(107)) break p000e0398;
 		}
		if (!CNDeq(34,255)) break p000e0398;
		if (!CNDbnotzero(12,1)) break p000e0398;
 		ACCwriteln(368);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CONSULTA _
	p000e0399:
	{
 		if (skipdoall('p000e0399')) break p000e0399;
 		if (in_response)
		{
			if (!CNDverb(107)) break p000e0399;
 		}
		if (!CNDeq(34,255)) break p000e0399;
		if (!CNDbzero(12,1)) break p000e0399;
 		ACCwriteln(369);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CONSULTA _
	p000e0400:
	{
 		if (skipdoall('p000e0400')) break p000e0400;
 		if (in_response)
		{
			if (!CNDverb(107)) break p000e0400;
 		}
		if (!CNDnoteq(34,255)) break p000e0400;
		if (!CNDnoteq(51,255)) break p000e0400;
		if (!CNDonotzero(getFlag(51),3)) break p000e0400;
		if (!CNDpresent(getFlag(51))) break p000e0400;
 		ACCwriteln(370);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CONSULTA _
	p000e0401:
	{
 		if (skipdoall('p000e0401')) break p000e0401;
 		if (in_response)
		{
			if (!CNDverb(107)) break p000e0401;
 		}
		if (!CNDnoteq(34,255)) break p000e0401;
		if (!CNDnoteq(51,255)) break p000e0401;
		if (!CNDonotzero(getFlag(51),3)) break p000e0401;
		if (!CNDabsent(getFlag(51))) break p000e0401;
 		ACCwriteln(371);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CONSULTA _
	p000e0402:
	{
 		if (skipdoall('p000e0402')) break p000e0402;
 		if (in_response)
		{
			if (!CNDverb(107)) break p000e0402;
 		}
		if (!CNDnoteq(34,255)) break p000e0402;
		if (!CNDeq(51,255)) break p000e0402;
 		ACCwriteln(372);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CONSULTA _
	p000e0403:
	{
 		if (skipdoall('p000e0403')) break p000e0403;
 		if (in_response)
		{
			if (!CNDverb(107)) break p000e0403;
 		}
		if (!CNDnoteq(51,255)) break p000e0403;
		if (!CNDpresent(getFlag(51))) break p000e0403;
 		ACCwriteln(373);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CONSULTA _
	p000e0404:
	{
 		if (skipdoall('p000e0404')) break p000e0404;
 		if (in_response)
		{
			if (!CNDverb(107)) break p000e0404;
 		}
		if (!CNDnoteq(51,255)) break p000e0404;
		if (!CNDabsent(getFlag(51))) break p000e0404;
 		ACCwriteln(374);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CORTA _
	p000e0405:
	{
 		if (skipdoall('p000e0405')) break p000e0405;
 		if (in_response)
		{
			if (!CNDverb(52)) break p000e0405;
 		}
		if (!CNDeq(34,255)) break p000e0405;
		if (!CNDbnotzero(12,1)) break p000e0405;
 		ACCwriteln(375);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CORTA _
	p000e0406:
	{
 		if (skipdoall('p000e0406')) break p000e0406;
 		if (in_response)
		{
			if (!CNDverb(52)) break p000e0406;
 		}
		if (!CNDeq(34,255)) break p000e0406;
		if (!CNDbzero(12,1)) break p000e0406;
 		ACCwriteln(376);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CORTA _
	p000e0407:
	{
 		if (skipdoall('p000e0407')) break p000e0407;
 		if (in_response)
		{
			if (!CNDverb(52)) break p000e0407;
 		}
		if (!CNDnoteq(34,255)) break p000e0407;
		if (!CNDnoteq(51,255)) break p000e0407;
		if (!CNDonotzero(getFlag(51),3)) break p000e0407;
		if (!CNDpresent(getFlag(51))) break p000e0407;
 		ACCwriteln(377);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CORTA _
	p000e0408:
	{
 		if (skipdoall('p000e0408')) break p000e0408;
 		if (in_response)
		{
			if (!CNDverb(52)) break p000e0408;
 		}
		if (!CNDnoteq(34,255)) break p000e0408;
		if (!CNDnoteq(51,255)) break p000e0408;
		if (!CNDonotzero(getFlag(51),3)) break p000e0408;
		if (!CNDabsent(getFlag(51))) break p000e0408;
 		ACCwriteln(378);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CORTA _
	p000e0409:
	{
 		if (skipdoall('p000e0409')) break p000e0409;
 		if (in_response)
		{
			if (!CNDverb(52)) break p000e0409;
 		}
		if (!CNDnoteq(34,255)) break p000e0409;
		if (!CNDeq(51,255)) break p000e0409;
 		ACCwriteln(379);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CORTA _
	p000e0410:
	{
 		if (skipdoall('p000e0410')) break p000e0410;
 		if (in_response)
		{
			if (!CNDverb(52)) break p000e0410;
 		}
		if (!CNDnoteq(51,255)) break p000e0410;
		if (!CNDpresent(getFlag(51))) break p000e0410;
 		ACCwriteln(380);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CORTA _
	p000e0411:
	{
 		if (skipdoall('p000e0411')) break p000e0411;
 		if (in_response)
		{
			if (!CNDverb(52)) break p000e0411;
 		}
		if (!CNDnoteq(51,255)) break p000e0411;
		if (!CNDabsent(getFlag(51))) break p000e0411;
 		ACCwriteln(381);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0412:
	{
 		if (skipdoall('p000e0412')) break p000e0412;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0412;
 		}
		if (!CNDsame(46,34)) break p000e0412;
 		ACCwhatox(15);
		if (!CNDonotzero(getFlag(15),3)) break p000e0412;
		if (!CNDnoteq(44,255)) break p000e0412;
 		ACCcopyff(34,14);
 		ACCcopyff(44,34);
 		ACCcopyff(14,44);
 		ACCcopyff(35,14);
 		ACCcopyff(45,35);
 		ACCcopyff(14,45);
 		ACCwhato();
		{}

	}

	// DA _
	p000e0413:
	{
 		if (skipdoall('p000e0413')) break p000e0413;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0413;
 		}
		if (!CNDprep(2)) break p000e0413;
		if (!CNDbzero(12,2)) break p000e0413;
		if (!CNDeq(44,255)) break p000e0413;
		if (!CNDbnotzero(12,1)) break p000e0413;
 		ACCwriteln(382);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0414:
	{
 		if (skipdoall('p000e0414')) break p000e0414;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0414;
 		}
		if (!CNDeq(34,255)) break p000e0414;
		if (!CNDbnotzero(12,1)) break p000e0414;
 		ACCwriteln(383);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0415:
	{
 		if (skipdoall('p000e0415')) break p000e0415;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0415;
 		}
		if (!CNDeq(34,255)) break p000e0415;
		if (!CNDbzero(12,1)) break p000e0415;
 		ACCwriteln(384);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0416:
	{
 		if (skipdoall('p000e0416')) break p000e0416;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0416;
 		}
		if (!CNDnoteq(34,255)) break p000e0416;
		if (!CNDeq(51,255)) break p000e0416;
 		ACCwriteln(385);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0417:
	{
 		if (skipdoall('p000e0417')) break p000e0417;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0417;
 		}
		if (!CNDnoteq(51,255)) break p000e0417;
		if (!CNDworn(getFlag(51))) break p000e0417;
		if (!CNDonotzero(getFlag(51),1)) break p000e0417;
 		ACCwriteln(386);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0418:
	{
 		if (skipdoall('p000e0418')) break p000e0418;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0418;
 		}
		if (!CNDnoteq(51,255)) break p000e0418;
		if (!CNDnotcarr(getFlag(51))) break p000e0418;
 		ACCwriteln(387);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0419:
	{
 		if (skipdoall('p000e0419')) break p000e0419;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0419;
 		}
		if (!CNDnoteq(51,255)) break p000e0419;
		if (!CNDcarried(getFlag(51))) break p000e0419;
		if (!CNDeq(44,255)) break p000e0419;
		if (!CNDbzero(12,1)) break p000e0419;
 		ACCwriteln(388);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0420:
	{
 		if (skipdoall('p000e0420')) break p000e0420;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0420;
 		}
		if (!CNDnoteq(51,255)) break p000e0420;
		if (!CNDcarried(getFlag(51))) break p000e0420;
		if (!CNDeq(44,255)) break p000e0420;
		if (!CNDbnotzero(12,1)) break p000e0420;
 		ACCwriteln(389);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0421:
	{
 		if (skipdoall('p000e0421')) break p000e0421;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0421;
 		}
		if (!CNDnoteq(51,255)) break p000e0421;
		if (!CNDcarried(getFlag(51))) break p000e0421;
		if (!CNDnoteq(44,255)) break p000e0421;
 		ACCwhatox2(15);
		if (!CNDeq(15,255)) break p000e0421;
 		ACCwriteln(390);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0422:
	{
 		if (skipdoall('p000e0422')) break p000e0422;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0422;
 		}
		if (!CNDnoteq(51,255)) break p000e0422;
		if (!CNDcarried(getFlag(51))) break p000e0422;
		if (!CNDnoteq(44,255)) break p000e0422;
 		ACCwhatox2(15);
		if (!CNDnoteq(15,255)) break p000e0422;
		if (!CNDozero(getFlag(15),3)) break p000e0422;
 		ACCwriteln(391);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0423:
	{
 		if (skipdoall('p000e0423')) break p000e0423;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0423;
 		}
		if (!CNDnoteq(51,255)) break p000e0423;
		if (!CNDcarried(getFlag(51))) break p000e0423;
		if (!CNDnoteq(44,255)) break p000e0423;
 		ACCwhatox2(15);
		if (!CNDnoteq(15,255)) break p000e0423;
		if (!CNDonotzero(getFlag(15),3)) break p000e0423;
		if (!CNDpresent(getFlag(15))) break p000e0423;
 		ACCwriteln(392);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0424:
	{
 		if (skipdoall('p000e0424')) break p000e0424;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0424;
 		}
		if (!CNDnoteq(51,255)) break p000e0424;
		if (!CNDcarried(getFlag(51))) break p000e0424;
		if (!CNDnoteq(44,255)) break p000e0424;
 		ACCwhatox2(15);
		if (!CNDnoteq(15,255)) break p000e0424;
		if (!CNDonotzero(getFlag(15),3)) break p000e0424;
		if (!CNDabsent(getFlag(15))) break p000e0424;
 		ACCwriteln(393);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0425:
	{
 		if (skipdoall('p000e0425')) break p000e0425;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0425;
 		}
		if (!CNDeq(34,255)) break p000e0425;
		if (!CNDbnotzero(12,1)) break p000e0425;
 		ACCwriteln(394);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0426:
	{
 		if (skipdoall('p000e0426')) break p000e0426;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0426;
 		}
		if (!CNDeq(34,255)) break p000e0426;
		if (!CNDbzero(12,1)) break p000e0426;
 		ACCwriteln(395);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0427:
	{
 		if (skipdoall('p000e0427')) break p000e0427;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0427;
 		}
		if (!CNDnoteq(34,255)) break p000e0427;
		if (!CNDnoteq(51,255)) break p000e0427;
		if (!CNDonotzero(getFlag(51),3)) break p000e0427;
		if (!CNDpresent(getFlag(51))) break p000e0427;
 		ACCwriteln(396);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0428:
	{
 		if (skipdoall('p000e0428')) break p000e0428;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0428;
 		}
		if (!CNDnoteq(34,255)) break p000e0428;
		if (!CNDnoteq(51,255)) break p000e0428;
		if (!CNDonotzero(getFlag(51),3)) break p000e0428;
		if (!CNDabsent(getFlag(51))) break p000e0428;
 		ACCwriteln(397);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0429:
	{
 		if (skipdoall('p000e0429')) break p000e0429;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0429;
 		}
		if (!CNDnoteq(34,255)) break p000e0429;
		if (!CNDeq(51,255)) break p000e0429;
 		ACCwriteln(398);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0430:
	{
 		if (skipdoall('p000e0430')) break p000e0430;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0430;
 		}
		if (!CNDnoteq(51,255)) break p000e0430;
		if (!CNDpresent(getFlag(51))) break p000e0430;
 		ACCwriteln(399);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0431:
	{
 		if (skipdoall('p000e0431')) break p000e0431;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0431;
 		}
		if (!CNDnoteq(51,255)) break p000e0431;
		if (!CNDabsent(getFlag(51))) break p000e0431;
 		ACCwriteln(400);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DEJA _
	p000e0432:
	{
 		if (skipdoall('p000e0432')) break p000e0432;
 		if (in_response)
		{
			if (!CNDverb(21)) break p000e0432;
 		}
		if (!CNDprep(4)) break p000e0432;
 		ACCwhatox2(14);
		if (!CNDnoteq(14,255)) break p000e0432;
		if (!CNDonotzero(getFlag(14),2)) break p000e0432;
 		ACClet(33,74);
		{}

	}

	// DEJA _
	p000e0433:
	{
 		if (skipdoall('p000e0433')) break p000e0433;
 		if (in_response)
		{
			if (!CNDverb(21)) break p000e0433;
 		}
		if (!CNDeq(34,255)) break p000e0433;
		if (!CNDbnotzero(12,1)) break p000e0433;
 		ACCwriteln(401);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DEJA _
	p000e0434:
	{
 		if (skipdoall('p000e0434')) break p000e0434;
 		if (in_response)
		{
			if (!CNDverb(21)) break p000e0434;
 		}
		if (!CNDeq(34,255)) break p000e0434;
		if (!CNDbzero(12,1)) break p000e0434;
 		ACCwriteln(402);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DEJA _
	p000e0435:
	{
 		if (skipdoall('p000e0435')) break p000e0435;
 		if (in_response)
		{
			if (!CNDverb(21)) break p000e0435;
 		}
 		ACCautod();
		if (!success) break pro000_restart;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESATA _
	p000e0436:
	{
 		if (skipdoall('p000e0436')) break p000e0436;
 		if (in_response)
		{
			if (!CNDverb(98)) break p000e0436;
 		}
		if (!CNDeq(34,255)) break p000e0436;
		if (!CNDbnotzero(12,1)) break p000e0436;
 		ACCwriteln(403);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESATA _
	p000e0437:
	{
 		if (skipdoall('p000e0437')) break p000e0437;
 		if (in_response)
		{
			if (!CNDverb(98)) break p000e0437;
 		}
		if (!CNDeq(34,255)) break p000e0437;
		if (!CNDbzero(12,1)) break p000e0437;
 		ACCwriteln(404);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESATA _
	p000e0438:
	{
 		if (skipdoall('p000e0438')) break p000e0438;
 		if (in_response)
		{
			if (!CNDverb(98)) break p000e0438;
 		}
		if (!CNDnoteq(34,255)) break p000e0438;
		if (!CNDnoteq(51,255)) break p000e0438;
		if (!CNDonotzero(getFlag(51),3)) break p000e0438;
		if (!CNDpresent(getFlag(51))) break p000e0438;
 		ACCwriteln(405);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESATA _
	p000e0439:
	{
 		if (skipdoall('p000e0439')) break p000e0439;
 		if (in_response)
		{
			if (!CNDverb(98)) break p000e0439;
 		}
		if (!CNDnoteq(34,255)) break p000e0439;
		if (!CNDnoteq(51,255)) break p000e0439;
		if (!CNDonotzero(getFlag(51),3)) break p000e0439;
		if (!CNDabsent(getFlag(51))) break p000e0439;
 		ACCwriteln(406);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESATA _
	p000e0440:
	{
 		if (skipdoall('p000e0440')) break p000e0440;
 		if (in_response)
		{
			if (!CNDverb(98)) break p000e0440;
 		}
		if (!CNDnoteq(34,255)) break p000e0440;
		if (!CNDeq(51,255)) break p000e0440;
 		ACCwriteln(407);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESATA _
	p000e0441:
	{
 		if (skipdoall('p000e0441')) break p000e0441;
 		if (in_response)
		{
			if (!CNDverb(98)) break p000e0441;
 		}
		if (!CNDnoteq(51,255)) break p000e0441;
		if (!CNDpresent(getFlag(51))) break p000e0441;
 		ACCwriteln(408);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESATA _
	p000e0442:
	{
 		if (skipdoall('p000e0442')) break p000e0442;
 		if (in_response)
		{
			if (!CNDverb(98)) break p000e0442;
 		}
		if (!CNDnoteq(51,255)) break p000e0442;
		if (!CNDabsent(getFlag(51))) break p000e0442;
 		ACCwriteln(409);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESEMPUÃ‘A _
	p000e0443:
	{
 		if (skipdoall('p000e0443')) break p000e0443;
 		if (in_response)
		{
			if (!CNDverb(155)) break p000e0443;
 		}
		if (!CNDeq(34,255)) break p000e0443;
		if (!CNDbnotzero(12,1)) break p000e0443;
 		ACCwriteln(410);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESEMPUÃ‘A _
	p000e0444:
	{
 		if (skipdoall('p000e0444')) break p000e0444;
 		if (in_response)
		{
			if (!CNDverb(155)) break p000e0444;
 		}
		if (!CNDeq(34,255)) break p000e0444;
		if (!CNDbzero(12,1)) break p000e0444;
 		ACCwriteln(411);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESEMPUÃ‘A _
	p000e0445:
	{
 		if (skipdoall('p000e0445')) break p000e0445;
 		if (in_response)
		{
			if (!CNDverb(155)) break p000e0445;
 		}
		if (!CNDnoteq(34,255)) break p000e0445;
		if (!CNDnoteq(51,255)) break p000e0445;
		if (!CNDonotzero(getFlag(51),3)) break p000e0445;
		if (!CNDpresent(getFlag(51))) break p000e0445;
 		ACCwriteln(412);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESEMPUÃ‘A _
	p000e0446:
	{
 		if (skipdoall('p000e0446')) break p000e0446;
 		if (in_response)
		{
			if (!CNDverb(155)) break p000e0446;
 		}
		if (!CNDnoteq(34,255)) break p000e0446;
		if (!CNDnoteq(51,255)) break p000e0446;
		if (!CNDonotzero(getFlag(51),3)) break p000e0446;
		if (!CNDabsent(getFlag(51))) break p000e0446;
 		ACCwriteln(413);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESEMPUÃ‘A _
	p000e0447:
	{
 		if (skipdoall('p000e0447')) break p000e0447;
 		if (in_response)
		{
			if (!CNDverb(155)) break p000e0447;
 		}
		if (!CNDnoteq(34,255)) break p000e0447;
		if (!CNDeq(51,255)) break p000e0447;
 		ACCwriteln(414);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESEMPUÃ‘A _
	p000e0448:
	{
 		if (skipdoall('p000e0448')) break p000e0448;
 		if (in_response)
		{
			if (!CNDverb(155)) break p000e0448;
 		}
		if (!CNDnoteq(51,255)) break p000e0448;
		if (!CNDpresent(getFlag(51))) break p000e0448;
 		ACCwriteln(415);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESEMPUÃ‘A _
	p000e0449:
	{
 		if (skipdoall('p000e0449')) break p000e0449;
 		if (in_response)
		{
			if (!CNDverb(155)) break p000e0449;
 		}
		if (!CNDnoteq(51,255)) break p000e0449;
		if (!CNDabsent(getFlag(51))) break p000e0449;
 		ACCwriteln(416);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESCONECTA _
	p000e0450:
	{
 		if (skipdoall('p000e0450')) break p000e0450;
 		if (in_response)
		{
			if (!CNDverb(104)) break p000e0450;
 		}
		if (!CNDeq(34,255)) break p000e0450;
		if (!CNDbnotzero(12,1)) break p000e0450;
 		ACCwriteln(417);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESCONECTA _
	p000e0451:
	{
 		if (skipdoall('p000e0451')) break p000e0451;
 		if (in_response)
		{
			if (!CNDverb(104)) break p000e0451;
 		}
		if (!CNDeq(34,255)) break p000e0451;
		if (!CNDbzero(12,1)) break p000e0451;
 		ACCwriteln(418);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESCONECTA _
	p000e0452:
	{
 		if (skipdoall('p000e0452')) break p000e0452;
 		if (in_response)
		{
			if (!CNDverb(104)) break p000e0452;
 		}
		if (!CNDnoteq(34,255)) break p000e0452;
		if (!CNDnoteq(51,255)) break p000e0452;
		if (!CNDonotzero(getFlag(51),3)) break p000e0452;
		if (!CNDpresent(getFlag(51))) break p000e0452;
 		ACCwriteln(419);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESCONECTA _
	p000e0453:
	{
 		if (skipdoall('p000e0453')) break p000e0453;
 		if (in_response)
		{
			if (!CNDverb(104)) break p000e0453;
 		}
		if (!CNDnoteq(34,255)) break p000e0453;
		if (!CNDnoteq(51,255)) break p000e0453;
		if (!CNDonotzero(getFlag(51),3)) break p000e0453;
		if (!CNDabsent(getFlag(51))) break p000e0453;
 		ACCwriteln(420);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESCONECTA _
	p000e0454:
	{
 		if (skipdoall('p000e0454')) break p000e0454;
 		if (in_response)
		{
			if (!CNDverb(104)) break p000e0454;
 		}
		if (!CNDnoteq(34,255)) break p000e0454;
		if (!CNDeq(51,255)) break p000e0454;
 		ACCwriteln(421);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESCONECTA _
	p000e0455:
	{
 		if (skipdoall('p000e0455')) break p000e0455;
 		if (in_response)
		{
			if (!CNDverb(104)) break p000e0455;
 		}
		if (!CNDnoteq(51,255)) break p000e0455;
		if (!CNDpresent(getFlag(51))) break p000e0455;
 		ACCwriteln(422);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESCONECTA _
	p000e0456:
	{
 		if (skipdoall('p000e0456')) break p000e0456;
 		if (in_response)
		{
			if (!CNDverb(104)) break p000e0456;
 		}
		if (!CNDnoteq(51,255)) break p000e0456;
		if (!CNDabsent(getFlag(51))) break p000e0456;
 		ACCwriteln(423);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESDOBLA _
	p000e0457:
	{
 		if (skipdoall('p000e0457')) break p000e0457;
 		if (in_response)
		{
			if (!CNDverb(97)) break p000e0457;
 		}
		if (!CNDeq(34,255)) break p000e0457;
		if (!CNDbnotzero(12,1)) break p000e0457;
 		ACCwriteln(424);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESDOBLA _
	p000e0458:
	{
 		if (skipdoall('p000e0458')) break p000e0458;
 		if (in_response)
		{
			if (!CNDverb(97)) break p000e0458;
 		}
		if (!CNDeq(34,255)) break p000e0458;
		if (!CNDbzero(12,1)) break p000e0458;
 		ACCwriteln(425);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESDOBLA _
	p000e0459:
	{
 		if (skipdoall('p000e0459')) break p000e0459;
 		if (in_response)
		{
			if (!CNDverb(97)) break p000e0459;
 		}
		if (!CNDnoteq(34,255)) break p000e0459;
		if (!CNDnoteq(51,255)) break p000e0459;
		if (!CNDonotzero(getFlag(51),3)) break p000e0459;
		if (!CNDpresent(getFlag(51))) break p000e0459;
 		ACCwriteln(426);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESDOBLA _
	p000e0460:
	{
 		if (skipdoall('p000e0460')) break p000e0460;
 		if (in_response)
		{
			if (!CNDverb(97)) break p000e0460;
 		}
		if (!CNDnoteq(34,255)) break p000e0460;
		if (!CNDnoteq(51,255)) break p000e0460;
		if (!CNDonotzero(getFlag(51),3)) break p000e0460;
		if (!CNDabsent(getFlag(51))) break p000e0460;
 		ACCwriteln(427);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESDOBLA _
	p000e0461:
	{
 		if (skipdoall('p000e0461')) break p000e0461;
 		if (in_response)
		{
			if (!CNDverb(97)) break p000e0461;
 		}
		if (!CNDnoteq(34,255)) break p000e0461;
		if (!CNDeq(51,255)) break p000e0461;
 		ACCwriteln(428);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESDOBLA _
	p000e0462:
	{
 		if (skipdoall('p000e0462')) break p000e0462;
 		if (in_response)
		{
			if (!CNDverb(97)) break p000e0462;
 		}
		if (!CNDnoteq(51,255)) break p000e0462;
		if (!CNDpresent(getFlag(51))) break p000e0462;
 		ACCwriteln(429);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESDOBLA _
	p000e0463:
	{
 		if (skipdoall('p000e0463')) break p000e0463;
 		if (in_response)
		{
			if (!CNDverb(97)) break p000e0463;
 		}
		if (!CNDnoteq(51,255)) break p000e0463;
		if (!CNDabsent(getFlag(51))) break p000e0463;
 		ACCwriteln(430);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESTRUIR _
	p000e0464:
	{
 		if (skipdoall('p000e0464')) break p000e0464;
 		if (in_response)
		{
			if (!CNDverb(154)) break p000e0464;
 		}
		if (!CNDeq(34,255)) break p000e0464;
		if (!CNDbnotzero(12,1)) break p000e0464;
 		ACCwriteln(431);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESTRUIR _
	p000e0465:
	{
 		if (skipdoall('p000e0465')) break p000e0465;
 		if (in_response)
		{
			if (!CNDverb(154)) break p000e0465;
 		}
		if (!CNDeq(34,255)) break p000e0465;
		if (!CNDbzero(12,1)) break p000e0465;
 		ACCwriteln(432);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESTRUIR _
	p000e0466:
	{
 		if (skipdoall('p000e0466')) break p000e0466;
 		if (in_response)
		{
			if (!CNDverb(154)) break p000e0466;
 		}
		if (!CNDnoteq(34,255)) break p000e0466;
		if (!CNDnoteq(51,255)) break p000e0466;
		if (!CNDonotzero(getFlag(51),3)) break p000e0466;
		if (!CNDpresent(getFlag(51))) break p000e0466;
 		ACCwriteln(433);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESTRUIR _
	p000e0467:
	{
 		if (skipdoall('p000e0467')) break p000e0467;
 		if (in_response)
		{
			if (!CNDverb(154)) break p000e0467;
 		}
		if (!CNDnoteq(34,255)) break p000e0467;
		if (!CNDnoteq(51,255)) break p000e0467;
		if (!CNDonotzero(getFlag(51),3)) break p000e0467;
		if (!CNDabsent(getFlag(51))) break p000e0467;
 		ACCwriteln(434);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESTRUIR _
	p000e0468:
	{
 		if (skipdoall('p000e0468')) break p000e0468;
 		if (in_response)
		{
			if (!CNDverb(154)) break p000e0468;
 		}
		if (!CNDnoteq(34,255)) break p000e0468;
		if (!CNDeq(51,255)) break p000e0468;
 		ACCwriteln(435);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESTRUIR _
	p000e0469:
	{
 		if (skipdoall('p000e0469')) break p000e0469;
 		if (in_response)
		{
			if (!CNDverb(154)) break p000e0469;
 		}
		if (!CNDnoteq(51,255)) break p000e0469;
		if (!CNDpresent(getFlag(51))) break p000e0469;
 		ACCwriteln(436);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESTRUIR _
	p000e0470:
	{
 		if (skipdoall('p000e0470')) break p000e0470;
 		if (in_response)
		{
			if (!CNDverb(154)) break p000e0470;
 		}
		if (!CNDnoteq(51,255)) break p000e0470;
		if (!CNDabsent(getFlag(51))) break p000e0470;
 		ACCwriteln(437);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DISPARA _
	p000e0471:
	{
 		if (skipdoall('p000e0471')) break p000e0471;
 		if (in_response)
		{
			if (!CNDverb(157)) break p000e0471;
 		}
		if (!CNDeq(34,255)) break p000e0471;
		if (!CNDbnotzero(12,1)) break p000e0471;
 		ACCwriteln(438);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DISPARA _
	p000e0472:
	{
 		if (skipdoall('p000e0472')) break p000e0472;
 		if (in_response)
		{
			if (!CNDverb(157)) break p000e0472;
 		}
		if (!CNDeq(34,255)) break p000e0472;
		if (!CNDbzero(12,1)) break p000e0472;
 		ACCwriteln(439);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DISPARA _
	p000e0473:
	{
 		if (skipdoall('p000e0473')) break p000e0473;
 		if (in_response)
		{
			if (!CNDverb(157)) break p000e0473;
 		}
		if (!CNDnoteq(34,255)) break p000e0473;
		if (!CNDnoteq(51,255)) break p000e0473;
		if (!CNDonotzero(getFlag(51),3)) break p000e0473;
		if (!CNDpresent(getFlag(51))) break p000e0473;
 		ACCwriteln(440);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DISPARA _
	p000e0474:
	{
 		if (skipdoall('p000e0474')) break p000e0474;
 		if (in_response)
		{
			if (!CNDverb(157)) break p000e0474;
 		}
		if (!CNDnoteq(34,255)) break p000e0474;
		if (!CNDnoteq(51,255)) break p000e0474;
		if (!CNDonotzero(getFlag(51),3)) break p000e0474;
		if (!CNDabsent(getFlag(51))) break p000e0474;
 		ACCwriteln(441);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DISPARA _
	p000e0475:
	{
 		if (skipdoall('p000e0475')) break p000e0475;
 		if (in_response)
		{
			if (!CNDverb(157)) break p000e0475;
 		}
		if (!CNDnoteq(34,255)) break p000e0475;
		if (!CNDeq(51,255)) break p000e0475;
 		ACCwriteln(442);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DISPARA _
	p000e0476:
	{
 		if (skipdoall('p000e0476')) break p000e0476;
 		if (in_response)
		{
			if (!CNDverb(157)) break p000e0476;
 		}
		if (!CNDnoteq(51,255)) break p000e0476;
		if (!CNDpresent(getFlag(51))) break p000e0476;
 		ACCwriteln(443);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DISPARA _
	p000e0477:
	{
 		if (skipdoall('p000e0477')) break p000e0477;
 		if (in_response)
		{
			if (!CNDverb(157)) break p000e0477;
 		}
		if (!CNDnoteq(51,255)) break p000e0477;
		if (!CNDabsent(getFlag(51))) break p000e0477;
 		ACCwriteln(444);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DOBLA _
	p000e0478:
	{
 		if (skipdoall('p000e0478')) break p000e0478;
 		if (in_response)
		{
			if (!CNDverb(96)) break p000e0478;
 		}
		if (!CNDeq(34,255)) break p000e0478;
		if (!CNDbnotzero(12,1)) break p000e0478;
 		ACCwriteln(445);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DOBLA _
	p000e0479:
	{
 		if (skipdoall('p000e0479')) break p000e0479;
 		if (in_response)
		{
			if (!CNDverb(96)) break p000e0479;
 		}
		if (!CNDeq(34,255)) break p000e0479;
		if (!CNDbzero(12,1)) break p000e0479;
 		ACCwriteln(446);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DOBLA _
	p000e0480:
	{
 		if (skipdoall('p000e0480')) break p000e0480;
 		if (in_response)
		{
			if (!CNDverb(96)) break p000e0480;
 		}
		if (!CNDnoteq(34,255)) break p000e0480;
		if (!CNDnoteq(51,255)) break p000e0480;
		if (!CNDonotzero(getFlag(51),3)) break p000e0480;
		if (!CNDpresent(getFlag(51))) break p000e0480;
 		ACCwriteln(447);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DOBLA _
	p000e0481:
	{
 		if (skipdoall('p000e0481')) break p000e0481;
 		if (in_response)
		{
			if (!CNDverb(96)) break p000e0481;
 		}
		if (!CNDnoteq(34,255)) break p000e0481;
		if (!CNDnoteq(51,255)) break p000e0481;
		if (!CNDonotzero(getFlag(51),3)) break p000e0481;
		if (!CNDabsent(getFlag(51))) break p000e0481;
 		ACCwriteln(448);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DOBLA _
	p000e0482:
	{
 		if (skipdoall('p000e0482')) break p000e0482;
 		if (in_response)
		{
			if (!CNDverb(96)) break p000e0482;
 		}
		if (!CNDnoteq(34,255)) break p000e0482;
		if (!CNDeq(51,255)) break p000e0482;
 		ACCwriteln(449);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DOBLA _
	p000e0483:
	{
 		if (skipdoall('p000e0483')) break p000e0483;
 		if (in_response)
		{
			if (!CNDverb(96)) break p000e0483;
 		}
		if (!CNDnoteq(51,255)) break p000e0483;
		if (!CNDpresent(getFlag(51))) break p000e0483;
 		ACCwriteln(450);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DOBLA _
	p000e0484:
	{
 		if (skipdoall('p000e0484')) break p000e0484;
 		if (in_response)
		{
			if (!CNDverb(96)) break p000e0484;
 		}
		if (!CNDnoteq(51,255)) break p000e0484;
		if (!CNDabsent(getFlag(51))) break p000e0484;
 		ACCwriteln(451);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EMPUJA _
	p000e0485:
	{
 		if (skipdoall('p000e0485')) break p000e0485;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0485;
 		}
		if (!CNDeq(34,255)) break p000e0485;
		if (!CNDbnotzero(12,1)) break p000e0485;
 		ACCwriteln(452);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EMPUJA _
	p000e0486:
	{
 		if (skipdoall('p000e0486')) break p000e0486;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0486;
 		}
		if (!CNDeq(34,255)) break p000e0486;
		if (!CNDbzero(12,1)) break p000e0486;
 		ACCwriteln(453);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EMPUJA _
	p000e0487:
	{
 		if (skipdoall('p000e0487')) break p000e0487;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0487;
 		}
		if (!CNDnoteq(34,255)) break p000e0487;
		if (!CNDnoteq(51,255)) break p000e0487;
		if (!CNDonotzero(getFlag(51),3)) break p000e0487;
		if (!CNDpresent(getFlag(51))) break p000e0487;
 		ACCwriteln(454);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EMPUJA _
	p000e0488:
	{
 		if (skipdoall('p000e0488')) break p000e0488;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0488;
 		}
		if (!CNDnoteq(34,255)) break p000e0488;
		if (!CNDnoteq(51,255)) break p000e0488;
		if (!CNDonotzero(getFlag(51),3)) break p000e0488;
		if (!CNDabsent(getFlag(51))) break p000e0488;
 		ACCwriteln(455);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EMPUJA _
	p000e0489:
	{
 		if (skipdoall('p000e0489')) break p000e0489;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0489;
 		}
		if (!CNDnoteq(34,255)) break p000e0489;
		if (!CNDeq(51,255)) break p000e0489;
 		ACCwriteln(456);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EMPUJA _
	p000e0490:
	{
 		if (skipdoall('p000e0490')) break p000e0490;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0490;
 		}
		if (!CNDnoteq(51,255)) break p000e0490;
		if (!CNDpresent(getFlag(51))) break p000e0490;
 		ACCwriteln(457);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EMPUJA _
	p000e0491:
	{
 		if (skipdoall('p000e0491')) break p000e0491;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0491;
 		}
		if (!CNDnoteq(51,255)) break p000e0491;
		if (!CNDabsent(getFlag(51))) break p000e0491;
 		ACCwriteln(458);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESENFUNDA _
	p000e0492:
	{
 		if (skipdoall('p000e0492')) break p000e0492;
 		if (in_response)
		{
			if (!CNDverb(156)) break p000e0492;
 		}
		if (!CNDeq(34,255)) break p000e0492;
		if (!CNDbnotzero(12,1)) break p000e0492;
 		ACCwriteln(459);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESENFUNDA _
	p000e0493:
	{
 		if (skipdoall('p000e0493')) break p000e0493;
 		if (in_response)
		{
			if (!CNDverb(156)) break p000e0493;
 		}
		if (!CNDeq(34,255)) break p000e0493;
		if (!CNDbzero(12,1)) break p000e0493;
 		ACCwriteln(460);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESENFUNDA _
	p000e0494:
	{
 		if (skipdoall('p000e0494')) break p000e0494;
 		if (in_response)
		{
			if (!CNDverb(156)) break p000e0494;
 		}
		if (!CNDnoteq(34,255)) break p000e0494;
		if (!CNDnoteq(51,255)) break p000e0494;
		if (!CNDonotzero(getFlag(51),3)) break p000e0494;
		if (!CNDpresent(getFlag(51))) break p000e0494;
 		ACCwriteln(461);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESENFUNDA _
	p000e0495:
	{
 		if (skipdoall('p000e0495')) break p000e0495;
 		if (in_response)
		{
			if (!CNDverb(156)) break p000e0495;
 		}
		if (!CNDnoteq(34,255)) break p000e0495;
		if (!CNDnoteq(51,255)) break p000e0495;
		if (!CNDonotzero(getFlag(51),3)) break p000e0495;
		if (!CNDabsent(getFlag(51))) break p000e0495;
 		ACCwriteln(462);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESENFUNDA _
	p000e0496:
	{
 		if (skipdoall('p000e0496')) break p000e0496;
 		if (in_response)
		{
			if (!CNDverb(156)) break p000e0496;
 		}
		if (!CNDnoteq(34,255)) break p000e0496;
		if (!CNDeq(51,255)) break p000e0496;
 		ACCwriteln(463);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESENFUNDA _
	p000e0497:
	{
 		if (skipdoall('p000e0497')) break p000e0497;
 		if (in_response)
		{
			if (!CNDverb(156)) break p000e0497;
 		}
		if (!CNDnoteq(51,255)) break p000e0497;
		if (!CNDpresent(getFlag(51))) break p000e0497;
 		ACCwriteln(464);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESENFUNDA _
	p000e0498:
	{
 		if (skipdoall('p000e0498')) break p000e0498;
 		if (in_response)
		{
			if (!CNDverb(156)) break p000e0498;
 		}
		if (!CNDnoteq(51,255)) break p000e0498;
		if (!CNDabsent(getFlag(51))) break p000e0498;
 		ACCwriteln(465);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACTIVA _
	p000e0499:
	{
 		if (skipdoall('p000e0499')) break p000e0499;
 		if (in_response)
		{
			if (!CNDverb(137)) break p000e0499;
 		}
		if (!CNDeq(34,255)) break p000e0499;
		if (!CNDbnotzero(12,1)) break p000e0499;
 		ACCwriteln(466);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACTIVA _
	p000e0500:
	{
 		if (skipdoall('p000e0500')) break p000e0500;
 		if (in_response)
		{
			if (!CNDverb(137)) break p000e0500;
 		}
		if (!CNDeq(34,255)) break p000e0500;
		if (!CNDbzero(12,1)) break p000e0500;
 		ACCwriteln(467);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACTIVA _
	p000e0501:
	{
 		if (skipdoall('p000e0501')) break p000e0501;
 		if (in_response)
		{
			if (!CNDverb(137)) break p000e0501;
 		}
		if (!CNDnoteq(34,255)) break p000e0501;
		if (!CNDnoteq(51,255)) break p000e0501;
		if (!CNDonotzero(getFlag(51),3)) break p000e0501;
		if (!CNDpresent(getFlag(51))) break p000e0501;
 		ACCwriteln(468);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACTIVA _
	p000e0502:
	{
 		if (skipdoall('p000e0502')) break p000e0502;
 		if (in_response)
		{
			if (!CNDverb(137)) break p000e0502;
 		}
		if (!CNDnoteq(34,255)) break p000e0502;
		if (!CNDnoteq(51,255)) break p000e0502;
		if (!CNDonotzero(getFlag(51),3)) break p000e0502;
		if (!CNDabsent(getFlag(51))) break p000e0502;
 		ACCwriteln(469);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACTIVA _
	p000e0503:
	{
 		if (skipdoall('p000e0503')) break p000e0503;
 		if (in_response)
		{
			if (!CNDverb(137)) break p000e0503;
 		}
		if (!CNDnoteq(34,255)) break p000e0503;
		if (!CNDeq(51,255)) break p000e0503;
 		ACCwriteln(470);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACTIVA _
	p000e0504:
	{
 		if (skipdoall('p000e0504')) break p000e0504;
 		if (in_response)
		{
			if (!CNDverb(137)) break p000e0504;
 		}
		if (!CNDnoteq(51,255)) break p000e0504;
		if (!CNDpresent(getFlag(51))) break p000e0504;
 		ACCwriteln(471);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACTIVA _
	p000e0505:
	{
 		if (skipdoall('p000e0505')) break p000e0505;
 		if (in_response)
		{
			if (!CNDverb(137)) break p000e0505;
 		}
		if (!CNDnoteq(51,255)) break p000e0505;
		if (!CNDabsent(getFlag(51))) break p000e0505;
 		ACCwriteln(472);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCONDE _
	p000e0506:
	{
 		if (skipdoall('p000e0506')) break p000e0506;
 		if (in_response)
		{
			if (!CNDverb(91)) break p000e0506;
 		}
		if (!CNDeq(34,255)) break p000e0506;
		if (!CNDbnotzero(12,1)) break p000e0506;
 		ACCwriteln(473);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCONDE _
	p000e0507:
	{
 		if (skipdoall('p000e0507')) break p000e0507;
 		if (in_response)
		{
			if (!CNDverb(91)) break p000e0507;
 		}
		if (!CNDeq(34,255)) break p000e0507;
		if (!CNDbzero(12,1)) break p000e0507;
 		ACCwriteln(474);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCONDE _
	p000e0508:
	{
 		if (skipdoall('p000e0508')) break p000e0508;
 		if (in_response)
		{
			if (!CNDverb(91)) break p000e0508;
 		}
		if (!CNDnoteq(34,255)) break p000e0508;
		if (!CNDnoteq(51,255)) break p000e0508;
		if (!CNDonotzero(getFlag(51),3)) break p000e0508;
		if (!CNDpresent(getFlag(51))) break p000e0508;
 		ACCwriteln(475);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCONDE _
	p000e0509:
	{
 		if (skipdoall('p000e0509')) break p000e0509;
 		if (in_response)
		{
			if (!CNDverb(91)) break p000e0509;
 		}
		if (!CNDnoteq(34,255)) break p000e0509;
		if (!CNDnoteq(51,255)) break p000e0509;
		if (!CNDonotzero(getFlag(51),3)) break p000e0509;
		if (!CNDabsent(getFlag(51))) break p000e0509;
 		ACCwriteln(476);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCONDE _
	p000e0510:
	{
 		if (skipdoall('p000e0510')) break p000e0510;
 		if (in_response)
		{
			if (!CNDverb(91)) break p000e0510;
 		}
		if (!CNDnoteq(34,255)) break p000e0510;
		if (!CNDeq(51,255)) break p000e0510;
 		ACCwriteln(477);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCONDE _
	p000e0511:
	{
 		if (skipdoall('p000e0511')) break p000e0511;
 		if (in_response)
		{
			if (!CNDverb(91)) break p000e0511;
 		}
		if (!CNDnoteq(51,255)) break p000e0511;
		if (!CNDpresent(getFlag(51))) break p000e0511;
 		ACCwriteln(478);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCONDE _
	p000e0512:
	{
 		if (skipdoall('p000e0512')) break p000e0512;
 		if (in_response)
		{
			if (!CNDverb(91)) break p000e0512;
 		}
		if (!CNDnoteq(51,255)) break p000e0512;
		if (!CNDabsent(getFlag(51))) break p000e0512;
 		ACCwriteln(479);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCUPE _
	p000e0513:
	{
 		if (skipdoall('p000e0513')) break p000e0513;
 		if (in_response)
		{
			if (!CNDverb(48)) break p000e0513;
 		}
		if (!CNDeq(34,255)) break p000e0513;
		if (!CNDbnotzero(12,1)) break p000e0513;
 		ACCwriteln(480);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCUPE _
	p000e0514:
	{
 		if (skipdoall('p000e0514')) break p000e0514;
 		if (in_response)
		{
			if (!CNDverb(48)) break p000e0514;
 		}
		if (!CNDeq(34,255)) break p000e0514;
		if (!CNDbzero(12,1)) break p000e0514;
 		ACCwriteln(481);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCUPE _
	p000e0515:
	{
 		if (skipdoall('p000e0515')) break p000e0515;
 		if (in_response)
		{
			if (!CNDverb(48)) break p000e0515;
 		}
		if (!CNDnoteq(34,255)) break p000e0515;
		if (!CNDnoteq(51,255)) break p000e0515;
		if (!CNDonotzero(getFlag(51),3)) break p000e0515;
		if (!CNDpresent(getFlag(51))) break p000e0515;
 		ACCwriteln(482);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCUPE _
	p000e0516:
	{
 		if (skipdoall('p000e0516')) break p000e0516;
 		if (in_response)
		{
			if (!CNDverb(48)) break p000e0516;
 		}
		if (!CNDnoteq(34,255)) break p000e0516;
		if (!CNDnoteq(51,255)) break p000e0516;
		if (!CNDonotzero(getFlag(51),3)) break p000e0516;
		if (!CNDabsent(getFlag(51))) break p000e0516;
 		ACCwriteln(483);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCUPE _
	p000e0517:
	{
 		if (skipdoall('p000e0517')) break p000e0517;
 		if (in_response)
		{
			if (!CNDverb(48)) break p000e0517;
 		}
		if (!CNDnoteq(34,255)) break p000e0517;
		if (!CNDeq(51,255)) break p000e0517;
 		ACCwriteln(484);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCUPE _
	p000e0518:
	{
 		if (skipdoall('p000e0518')) break p000e0518;
 		if (in_response)
		{
			if (!CNDverb(48)) break p000e0518;
 		}
		if (!CNDnoteq(51,255)) break p000e0518;
		if (!CNDpresent(getFlag(51))) break p000e0518;
 		ACCwriteln(485);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCUPE _
	p000e0519:
	{
 		if (skipdoall('p000e0519')) break p000e0519;
 		if (in_response)
		{
			if (!CNDverb(48)) break p000e0519;
 		}
		if (!CNDnoteq(51,255)) break p000e0519;
		if (!CNDabsent(getFlag(51))) break p000e0519;
 		ACCwriteln(486);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESTIRA _
	p000e0520:
	{
 		if (skipdoall('p000e0520')) break p000e0520;
 		if (in_response)
		{
			if (!CNDverb(139)) break p000e0520;
 		}
		if (!CNDeq(34,255)) break p000e0520;
		if (!CNDbnotzero(12,1)) break p000e0520;
 		ACCwriteln(487);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESTIRA _
	p000e0521:
	{
 		if (skipdoall('p000e0521')) break p000e0521;
 		if (in_response)
		{
			if (!CNDverb(139)) break p000e0521;
 		}
		if (!CNDeq(34,255)) break p000e0521;
		if (!CNDbzero(12,1)) break p000e0521;
 		ACCwriteln(488);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESTIRA _
	p000e0522:
	{
 		if (skipdoall('p000e0522')) break p000e0522;
 		if (in_response)
		{
			if (!CNDverb(139)) break p000e0522;
 		}
		if (!CNDnoteq(34,255)) break p000e0522;
		if (!CNDnoteq(51,255)) break p000e0522;
		if (!CNDonotzero(getFlag(51),3)) break p000e0522;
		if (!CNDpresent(getFlag(51))) break p000e0522;
 		ACCwriteln(489);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESTIRA _
	p000e0523:
	{
 		if (skipdoall('p000e0523')) break p000e0523;
 		if (in_response)
		{
			if (!CNDverb(139)) break p000e0523;
 		}
		if (!CNDnoteq(34,255)) break p000e0523;
		if (!CNDnoteq(51,255)) break p000e0523;
		if (!CNDonotzero(getFlag(51),3)) break p000e0523;
		if (!CNDabsent(getFlag(51))) break p000e0523;
 		ACCwriteln(490);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESTIRA _
	p000e0524:
	{
 		if (skipdoall('p000e0524')) break p000e0524;
 		if (in_response)
		{
			if (!CNDverb(139)) break p000e0524;
 		}
		if (!CNDnoteq(34,255)) break p000e0524;
		if (!CNDeq(51,255)) break p000e0524;
 		ACCwriteln(491);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESTIRA _
	p000e0525:
	{
 		if (skipdoall('p000e0525')) break p000e0525;
 		if (in_response)
		{
			if (!CNDverb(139)) break p000e0525;
 		}
		if (!CNDnoteq(51,255)) break p000e0525;
		if (!CNDpresent(getFlag(51))) break p000e0525;
 		ACCwriteln(492);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESTIRA _
	p000e0526:
	{
 		if (skipdoall('p000e0526')) break p000e0526;
 		if (in_response)
		{
			if (!CNDverb(139)) break p000e0526;
 		}
		if (!CNDnoteq(51,255)) break p000e0526;
		if (!CNDabsent(getFlag(51))) break p000e0526;
 		ACCwriteln(493);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESTRANGULA _
	p000e0527:
	{
 		if (skipdoall('p000e0527')) break p000e0527;
 		if (in_response)
		{
			if (!CNDverb(147)) break p000e0527;
 		}
		if (!CNDeq(34,255)) break p000e0527;
		if (!CNDbnotzero(12,1)) break p000e0527;
 		ACCwriteln(494);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESTRANGULA _
	p000e0528:
	{
 		if (skipdoall('p000e0528')) break p000e0528;
 		if (in_response)
		{
			if (!CNDverb(147)) break p000e0528;
 		}
		if (!CNDeq(34,255)) break p000e0528;
		if (!CNDbzero(12,1)) break p000e0528;
 		ACCwriteln(495);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESTRANGULA _
	p000e0529:
	{
 		if (skipdoall('p000e0529')) break p000e0529;
 		if (in_response)
		{
			if (!CNDverb(147)) break p000e0529;
 		}
		if (!CNDnoteq(34,255)) break p000e0529;
		if (!CNDnoteq(51,255)) break p000e0529;
		if (!CNDonotzero(getFlag(51),3)) break p000e0529;
		if (!CNDpresent(getFlag(51))) break p000e0529;
 		ACCwriteln(496);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESTRANGULA _
	p000e0530:
	{
 		if (skipdoall('p000e0530')) break p000e0530;
 		if (in_response)
		{
			if (!CNDverb(147)) break p000e0530;
 		}
		if (!CNDnoteq(34,255)) break p000e0530;
		if (!CNDnoteq(51,255)) break p000e0530;
		if (!CNDonotzero(getFlag(51),3)) break p000e0530;
		if (!CNDabsent(getFlag(51))) break p000e0530;
 		ACCwriteln(497);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESTRANGULA _
	p000e0531:
	{
 		if (skipdoall('p000e0531')) break p000e0531;
 		if (in_response)
		{
			if (!CNDverb(147)) break p000e0531;
 		}
		if (!CNDnoteq(34,255)) break p000e0531;
		if (!CNDeq(51,255)) break p000e0531;
 		ACCwriteln(498);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESTRANGULA _
	p000e0532:
	{
 		if (skipdoall('p000e0532')) break p000e0532;
 		if (in_response)
		{
			if (!CNDverb(147)) break p000e0532;
 		}
		if (!CNDnoteq(51,255)) break p000e0532;
		if (!CNDpresent(getFlag(51))) break p000e0532;
 		ACCwriteln(499);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESTRANGULA _
	p000e0533:
	{
 		if (skipdoall('p000e0533')) break p000e0533;
 		if (in_response)
		{
			if (!CNDverb(147)) break p000e0533;
 		}
		if (!CNDnoteq(51,255)) break p000e0533;
		if (!CNDabsent(getFlag(51))) break p000e0533;
 		ACCwriteln(500);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GIRA _
	p000e0534:
	{
 		if (skipdoall('p000e0534')) break p000e0534;
 		if (in_response)
		{
			if (!CNDverb(35)) break p000e0534;
 		}
		if (!CNDeq(34,255)) break p000e0534;
		if (!CNDbnotzero(12,1)) break p000e0534;
 		ACCwriteln(501);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GIRA _
	p000e0535:
	{
 		if (skipdoall('p000e0535')) break p000e0535;
 		if (in_response)
		{
			if (!CNDverb(35)) break p000e0535;
 		}
		if (!CNDeq(34,255)) break p000e0535;
		if (!CNDbzero(12,1)) break p000e0535;
 		ACCwriteln(502);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GIRA _
	p000e0536:
	{
 		if (skipdoall('p000e0536')) break p000e0536;
 		if (in_response)
		{
			if (!CNDverb(35)) break p000e0536;
 		}
		if (!CNDnoteq(34,255)) break p000e0536;
		if (!CNDnoteq(51,255)) break p000e0536;
		if (!CNDonotzero(getFlag(51),3)) break p000e0536;
		if (!CNDpresent(getFlag(51))) break p000e0536;
 		ACCwriteln(503);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GIRA _
	p000e0537:
	{
 		if (skipdoall('p000e0537')) break p000e0537;
 		if (in_response)
		{
			if (!CNDverb(35)) break p000e0537;
 		}
		if (!CNDnoteq(34,255)) break p000e0537;
		if (!CNDnoteq(51,255)) break p000e0537;
		if (!CNDonotzero(getFlag(51),3)) break p000e0537;
		if (!CNDabsent(getFlag(51))) break p000e0537;
 		ACCwriteln(504);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GIRA _
	p000e0538:
	{
 		if (skipdoall('p000e0538')) break p000e0538;
 		if (in_response)
		{
			if (!CNDverb(35)) break p000e0538;
 		}
		if (!CNDnoteq(34,255)) break p000e0538;
		if (!CNDeq(51,255)) break p000e0538;
 		ACCwriteln(505);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GIRA _
	p000e0539:
	{
 		if (skipdoall('p000e0539')) break p000e0539;
 		if (in_response)
		{
			if (!CNDverb(35)) break p000e0539;
 		}
		if (!CNDnoteq(51,255)) break p000e0539;
		if (!CNDpresent(getFlag(51))) break p000e0539;
 		ACCwriteln(506);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GIRA _
	p000e0540:
	{
 		if (skipdoall('p000e0540')) break p000e0540;
 		if (in_response)
		{
			if (!CNDverb(35)) break p000e0540;
 		}
		if (!CNDnoteq(51,255)) break p000e0540;
		if (!CNDabsent(getFlag(51))) break p000e0540;
 		ACCwriteln(507);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GOLPEA _
	p000e0541:
	{
 		if (skipdoall('p000e0541')) break p000e0541;
 		if (in_response)
		{
			if (!CNDverb(72)) break p000e0541;
 		}
		if (!CNDeq(34,255)) break p000e0541;
		if (!CNDbnotzero(12,1)) break p000e0541;
 		ACCwriteln(508);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GOLPEA _
	p000e0542:
	{
 		if (skipdoall('p000e0542')) break p000e0542;
 		if (in_response)
		{
			if (!CNDverb(72)) break p000e0542;
 		}
		if (!CNDeq(34,255)) break p000e0542;
		if (!CNDbzero(12,1)) break p000e0542;
 		ACCwriteln(509);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GOLPEA _
	p000e0543:
	{
 		if (skipdoall('p000e0543')) break p000e0543;
 		if (in_response)
		{
			if (!CNDverb(72)) break p000e0543;
 		}
		if (!CNDnoteq(34,255)) break p000e0543;
		if (!CNDnoteq(51,255)) break p000e0543;
		if (!CNDonotzero(getFlag(51),3)) break p000e0543;
		if (!CNDpresent(getFlag(51))) break p000e0543;
 		ACCwriteln(510);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GOLPEA _
	p000e0544:
	{
 		if (skipdoall('p000e0544')) break p000e0544;
 		if (in_response)
		{
			if (!CNDverb(72)) break p000e0544;
 		}
		if (!CNDnoteq(34,255)) break p000e0544;
		if (!CNDnoteq(51,255)) break p000e0544;
		if (!CNDonotzero(getFlag(51),3)) break p000e0544;
		if (!CNDabsent(getFlag(51))) break p000e0544;
 		ACCwriteln(511);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GOLPEA _
	p000e0545:
	{
 		if (skipdoall('p000e0545')) break p000e0545;
 		if (in_response)
		{
			if (!CNDverb(72)) break p000e0545;
 		}
		if (!CNDnoteq(34,255)) break p000e0545;
		if (!CNDeq(51,255)) break p000e0545;
 		ACCwriteln(512);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GOLPEA _
	p000e0546:
	{
 		if (skipdoall('p000e0546')) break p000e0546;
 		if (in_response)
		{
			if (!CNDverb(72)) break p000e0546;
 		}
		if (!CNDnoteq(51,255)) break p000e0546;
		if (!CNDpresent(getFlag(51))) break p000e0546;
 		ACCwriteln(513);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GOLPEA _
	p000e0547:
	{
 		if (skipdoall('p000e0547')) break p000e0547;
 		if (in_response)
		{
			if (!CNDverb(72)) break p000e0547;
 		}
		if (!CNDnoteq(51,255)) break p000e0547;
		if (!CNDabsent(getFlag(51))) break p000e0547;
 		ACCwriteln(514);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HABLA _
	p000e0548:
	{
 		if (skipdoall('p000e0548')) break p000e0548;
 		if (in_response)
		{
			if (!CNDverb(122)) break p000e0548;
 		}
		if (!CNDeq(34,255)) break p000e0548;
		if (!CNDbnotzero(12,1)) break p000e0548;
 		ACCwriteln(515);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HABLA _
	p000e0549:
	{
 		if (skipdoall('p000e0549')) break p000e0549;
 		if (in_response)
		{
			if (!CNDverb(122)) break p000e0549;
 		}
		if (!CNDeq(34,255)) break p000e0549;
		if (!CNDbzero(12,1)) break p000e0549;
 		ACCwriteln(516);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HABLA _
	p000e0550:
	{
 		if (skipdoall('p000e0550')) break p000e0550;
 		if (in_response)
		{
			if (!CNDverb(122)) break p000e0550;
 		}
		if (!CNDnoteq(34,255)) break p000e0550;
		if (!CNDnoteq(51,255)) break p000e0550;
		if (!CNDonotzero(getFlag(51),3)) break p000e0550;
		if (!CNDpresent(getFlag(51))) break p000e0550;
 		ACCwriteln(517);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HABLA _
	p000e0551:
	{
 		if (skipdoall('p000e0551')) break p000e0551;
 		if (in_response)
		{
			if (!CNDverb(122)) break p000e0551;
 		}
		if (!CNDnoteq(34,255)) break p000e0551;
		if (!CNDnoteq(51,255)) break p000e0551;
		if (!CNDonotzero(getFlag(51),3)) break p000e0551;
		if (!CNDabsent(getFlag(51))) break p000e0551;
 		ACCwriteln(518);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HABLA _
	p000e0552:
	{
 		if (skipdoall('p000e0552')) break p000e0552;
 		if (in_response)
		{
			if (!CNDverb(122)) break p000e0552;
 		}
		if (!CNDnoteq(34,255)) break p000e0552;
		if (!CNDeq(51,255)) break p000e0552;
 		ACCwriteln(519);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HABLA _
	p000e0553:
	{
 		if (skipdoall('p000e0553')) break p000e0553;
 		if (in_response)
		{
			if (!CNDverb(122)) break p000e0553;
 		}
		if (!CNDnoteq(51,255)) break p000e0553;
		if (!CNDpresent(getFlag(51))) break p000e0553;
 		ACCwriteln(520);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HABLA _
	p000e0554:
	{
 		if (skipdoall('p000e0554')) break p000e0554;
 		if (in_response)
		{
			if (!CNDverb(122)) break p000e0554;
 		}
		if (!CNDnoteq(51,255)) break p000e0554;
		if (!CNDabsent(getFlag(51))) break p000e0554;
 		ACCwriteln(521);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INCREPA _
	p000e0555:
	{
 		if (skipdoall('p000e0555')) break p000e0555;
 		if (in_response)
		{
			if (!CNDverb(89)) break p000e0555;
 		}
		if (!CNDeq(34,255)) break p000e0555;
		if (!CNDbnotzero(12,1)) break p000e0555;
 		ACCwriteln(522);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INCREPA _
	p000e0556:
	{
 		if (skipdoall('p000e0556')) break p000e0556;
 		if (in_response)
		{
			if (!CNDverb(89)) break p000e0556;
 		}
		if (!CNDeq(34,255)) break p000e0556;
		if (!CNDbzero(12,1)) break p000e0556;
 		ACCwriteln(523);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INCREPA _
	p000e0557:
	{
 		if (skipdoall('p000e0557')) break p000e0557;
 		if (in_response)
		{
			if (!CNDverb(89)) break p000e0557;
 		}
		if (!CNDnoteq(34,255)) break p000e0557;
		if (!CNDnoteq(51,255)) break p000e0557;
		if (!CNDonotzero(getFlag(51),3)) break p000e0557;
		if (!CNDpresent(getFlag(51))) break p000e0557;
 		ACCwriteln(524);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INCREPA _
	p000e0558:
	{
 		if (skipdoall('p000e0558')) break p000e0558;
 		if (in_response)
		{
			if (!CNDverb(89)) break p000e0558;
 		}
		if (!CNDnoteq(34,255)) break p000e0558;
		if (!CNDnoteq(51,255)) break p000e0558;
		if (!CNDonotzero(getFlag(51),3)) break p000e0558;
		if (!CNDabsent(getFlag(51))) break p000e0558;
 		ACCwriteln(525);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INCREPA _
	p000e0559:
	{
 		if (skipdoall('p000e0559')) break p000e0559;
 		if (in_response)
		{
			if (!CNDverb(89)) break p000e0559;
 		}
		if (!CNDnoteq(34,255)) break p000e0559;
		if (!CNDeq(51,255)) break p000e0559;
 		ACCwriteln(526);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INCREPA _
	p000e0560:
	{
 		if (skipdoall('p000e0560')) break p000e0560;
 		if (in_response)
		{
			if (!CNDverb(89)) break p000e0560;
 		}
		if (!CNDnoteq(51,255)) break p000e0560;
		if (!CNDpresent(getFlag(51))) break p000e0560;
 		ACCwriteln(527);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INCREPA _
	p000e0561:
	{
 		if (skipdoall('p000e0561')) break p000e0561;
 		if (in_response)
		{
			if (!CNDverb(89)) break p000e0561;
 		}
		if (!CNDnoteq(51,255)) break p000e0561;
		if (!CNDabsent(getFlag(51))) break p000e0561;
 		ACCwriteln(528);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANDA _
	p000e0562:
	{
 		if (skipdoall('p000e0562')) break p000e0562;
 		if (in_response)
		{
			if (!CNDverb(90)) break p000e0562;
 		}
		if (!CNDeq(34,255)) break p000e0562;
		if (!CNDbnotzero(12,1)) break p000e0562;
 		ACCwriteln(529);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANDA _
	p000e0563:
	{
 		if (skipdoall('p000e0563')) break p000e0563;
 		if (in_response)
		{
			if (!CNDverb(90)) break p000e0563;
 		}
		if (!CNDeq(34,255)) break p000e0563;
		if (!CNDbzero(12,1)) break p000e0563;
 		ACCwriteln(530);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANDA _
	p000e0564:
	{
 		if (skipdoall('p000e0564')) break p000e0564;
 		if (in_response)
		{
			if (!CNDverb(90)) break p000e0564;
 		}
		if (!CNDnoteq(34,255)) break p000e0564;
		if (!CNDnoteq(51,255)) break p000e0564;
		if (!CNDonotzero(getFlag(51),3)) break p000e0564;
		if (!CNDpresent(getFlag(51))) break p000e0564;
 		ACCwriteln(531);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANDA _
	p000e0565:
	{
 		if (skipdoall('p000e0565')) break p000e0565;
 		if (in_response)
		{
			if (!CNDverb(90)) break p000e0565;
 		}
		if (!CNDnoteq(34,255)) break p000e0565;
		if (!CNDnoteq(51,255)) break p000e0565;
		if (!CNDonotzero(getFlag(51),3)) break p000e0565;
		if (!CNDabsent(getFlag(51))) break p000e0565;
 		ACCwriteln(532);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANDA _
	p000e0566:
	{
 		if (skipdoall('p000e0566')) break p000e0566;
 		if (in_response)
		{
			if (!CNDverb(90)) break p000e0566;
 		}
		if (!CNDnoteq(34,255)) break p000e0566;
		if (!CNDeq(51,255)) break p000e0566;
 		ACCwriteln(533);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANDA _
	p000e0567:
	{
 		if (skipdoall('p000e0567')) break p000e0567;
 		if (in_response)
		{
			if (!CNDverb(90)) break p000e0567;
 		}
		if (!CNDnoteq(51,255)) break p000e0567;
		if (!CNDpresent(getFlag(51))) break p000e0567;
 		ACCwriteln(534);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANDA _
	p000e0568:
	{
 		if (skipdoall('p000e0568')) break p000e0568;
 		if (in_response)
		{
			if (!CNDverb(90)) break p000e0568;
 		}
		if (!CNDnoteq(51,255)) break p000e0568;
		if (!CNDabsent(getFlag(51))) break p000e0568;
 		ACCwriteln(535);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CHUPA _
	p000e0569:
	{
 		if (skipdoall('p000e0569')) break p000e0569;
 		if (in_response)
		{
			if (!CNDverb(63)) break p000e0569;
 		}
		if (!CNDeq(34,255)) break p000e0569;
		if (!CNDbnotzero(12,1)) break p000e0569;
 		ACCwriteln(536);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CHUPA _
	p000e0570:
	{
 		if (skipdoall('p000e0570')) break p000e0570;
 		if (in_response)
		{
			if (!CNDverb(63)) break p000e0570;
 		}
		if (!CNDeq(34,255)) break p000e0570;
		if (!CNDbzero(12,1)) break p000e0570;
 		ACCwriteln(537);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CHUPA _
	p000e0571:
	{
 		if (skipdoall('p000e0571')) break p000e0571;
 		if (in_response)
		{
			if (!CNDverb(63)) break p000e0571;
 		}
		if (!CNDnoteq(34,255)) break p000e0571;
		if (!CNDnoteq(51,255)) break p000e0571;
		if (!CNDonotzero(getFlag(51),3)) break p000e0571;
		if (!CNDpresent(getFlag(51))) break p000e0571;
 		ACCwriteln(538);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CHUPA _
	p000e0572:
	{
 		if (skipdoall('p000e0572')) break p000e0572;
 		if (in_response)
		{
			if (!CNDverb(63)) break p000e0572;
 		}
		if (!CNDnoteq(34,255)) break p000e0572;
		if (!CNDnoteq(51,255)) break p000e0572;
		if (!CNDonotzero(getFlag(51),3)) break p000e0572;
		if (!CNDabsent(getFlag(51))) break p000e0572;
 		ACCwriteln(539);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CHUPA _
	p000e0573:
	{
 		if (skipdoall('p000e0573')) break p000e0573;
 		if (in_response)
		{
			if (!CNDverb(63)) break p000e0573;
 		}
		if (!CNDnoteq(34,255)) break p000e0573;
		if (!CNDeq(51,255)) break p000e0573;
 		ACCwriteln(540);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CHUPA _
	p000e0574:
	{
 		if (skipdoall('p000e0574')) break p000e0574;
 		if (in_response)
		{
			if (!CNDverb(63)) break p000e0574;
 		}
		if (!CNDnoteq(51,255)) break p000e0574;
		if (!CNDpresent(getFlag(51))) break p000e0574;
 		ACCwriteln(541);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CHUPA _
	p000e0575:
	{
 		if (skipdoall('p000e0575')) break p000e0575;
 		if (in_response)
		{
			if (!CNDverb(63)) break p000e0575;
 		}
		if (!CNDnoteq(51,255)) break p000e0575;
		if (!CNDabsent(getFlag(51))) break p000e0575;
 		ACCwriteln(542);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0576:
	{
 		if (skipdoall('p000e0576')) break p000e0576;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0576;
 		}
		if (!CNDeq(34,255)) break p000e0576;
		if (!CNDbnotzero(12,1)) break p000e0576;
 		ACCwriteln(543);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0577:
	{
 		if (skipdoall('p000e0577')) break p000e0577;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0577;
 		}
		if (!CNDeq(34,255)) break p000e0577;
		if (!CNDbzero(12,1)) break p000e0577;
 		ACCwriteln(544);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0578:
	{
 		if (skipdoall('p000e0578')) break p000e0578;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0578;
 		}
		if (!CNDnoteq(34,255)) break p000e0578;
		if (!CNDnoteq(51,255)) break p000e0578;
		if (!CNDonotzero(getFlag(51),3)) break p000e0578;
		if (!CNDpresent(getFlag(51))) break p000e0578;
 		ACCwriteln(545);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0579:
	{
 		if (skipdoall('p000e0579')) break p000e0579;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0579;
 		}
		if (!CNDnoteq(34,255)) break p000e0579;
		if (!CNDnoteq(51,255)) break p000e0579;
		if (!CNDonotzero(getFlag(51),3)) break p000e0579;
		if (!CNDabsent(getFlag(51))) break p000e0579;
 		ACCwriteln(546);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0580:
	{
 		if (skipdoall('p000e0580')) break p000e0580;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0580;
 		}
		if (!CNDnoteq(34,255)) break p000e0580;
		if (!CNDeq(51,255)) break p000e0580;
 		ACCwriteln(547);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0581:
	{
 		if (skipdoall('p000e0581')) break p000e0581;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0581;
 		}
		if (!CNDnoteq(51,255)) break p000e0581;
		if (!CNDpresent(getFlag(51))) break p000e0581;
 		ACCwriteln(548);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0582:
	{
 		if (skipdoall('p000e0582')) break p000e0582;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0582;
 		}
		if (!CNDnoteq(51,255)) break p000e0582;
		if (!CNDabsent(getFlag(51))) break p000e0582;
 		ACCwriteln(549);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEE _
	p000e0583:
	{
 		if (skipdoall('p000e0583')) break p000e0583;
 		if (in_response)
		{
			if (!CNDverb(109)) break p000e0583;
 		}
		if (!CNDeq(34,255)) break p000e0583;
		if (!CNDbnotzero(12,1)) break p000e0583;
 		ACCwriteln(550);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEE _
	p000e0584:
	{
 		if (skipdoall('p000e0584')) break p000e0584;
 		if (in_response)
		{
			if (!CNDverb(109)) break p000e0584;
 		}
		if (!CNDeq(34,255)) break p000e0584;
		if (!CNDbzero(12,1)) break p000e0584;
 		ACCwriteln(551);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEE _
	p000e0585:
	{
 		if (skipdoall('p000e0585')) break p000e0585;
 		if (in_response)
		{
			if (!CNDverb(109)) break p000e0585;
 		}
		if (!CNDnoteq(34,255)) break p000e0585;
		if (!CNDnoteq(51,255)) break p000e0585;
		if (!CNDonotzero(getFlag(51),3)) break p000e0585;
		if (!CNDpresent(getFlag(51))) break p000e0585;
 		ACCwriteln(552);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEE _
	p000e0586:
	{
 		if (skipdoall('p000e0586')) break p000e0586;
 		if (in_response)
		{
			if (!CNDverb(109)) break p000e0586;
 		}
		if (!CNDnoteq(34,255)) break p000e0586;
		if (!CNDnoteq(51,255)) break p000e0586;
		if (!CNDonotzero(getFlag(51),3)) break p000e0586;
		if (!CNDabsent(getFlag(51))) break p000e0586;
 		ACCwriteln(553);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEE _
	p000e0587:
	{
 		if (skipdoall('p000e0587')) break p000e0587;
 		if (in_response)
		{
			if (!CNDverb(109)) break p000e0587;
 		}
		if (!CNDnoteq(34,255)) break p000e0587;
		if (!CNDeq(51,255)) break p000e0587;
 		ACCwriteln(554);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEE _
	p000e0588:
	{
 		if (skipdoall('p000e0588')) break p000e0588;
 		if (in_response)
		{
			if (!CNDverb(109)) break p000e0588;
 		}
		if (!CNDnoteq(51,255)) break p000e0588;
		if (!CNDpresent(getFlag(51))) break p000e0588;
 		ACCwriteln(555);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEE _
	p000e0589:
	{
 		if (skipdoall('p000e0589')) break p000e0589;
 		if (in_response)
		{
			if (!CNDverb(109)) break p000e0589;
 		}
		if (!CNDnoteq(51,255)) break p000e0589;
		if (!CNDabsent(getFlag(51))) break p000e0589;
 		ACCwriteln(556);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEVANTA _
	p000e0590:
	{
 		if (skipdoall('p000e0590')) break p000e0590;
 		if (in_response)
		{
			if (!CNDverb(114)) break p000e0590;
 		}
		if (!CNDeq(34,255)) break p000e0590;
		if (!CNDbnotzero(12,1)) break p000e0590;
 		ACCwriteln(557);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEVANTA _
	p000e0591:
	{
 		if (skipdoall('p000e0591')) break p000e0591;
 		if (in_response)
		{
			if (!CNDverb(114)) break p000e0591;
 		}
		if (!CNDeq(34,255)) break p000e0591;
		if (!CNDbzero(12,1)) break p000e0591;
 		ACCwriteln(558);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEVANTA _
	p000e0592:
	{
 		if (skipdoall('p000e0592')) break p000e0592;
 		if (in_response)
		{
			if (!CNDverb(114)) break p000e0592;
 		}
		if (!CNDnoteq(34,255)) break p000e0592;
		if (!CNDnoteq(51,255)) break p000e0592;
		if (!CNDonotzero(getFlag(51),3)) break p000e0592;
		if (!CNDpresent(getFlag(51))) break p000e0592;
 		ACCwriteln(559);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEVANTA _
	p000e0593:
	{
 		if (skipdoall('p000e0593')) break p000e0593;
 		if (in_response)
		{
			if (!CNDverb(114)) break p000e0593;
 		}
		if (!CNDnoteq(34,255)) break p000e0593;
		if (!CNDnoteq(51,255)) break p000e0593;
		if (!CNDonotzero(getFlag(51),3)) break p000e0593;
		if (!CNDabsent(getFlag(51))) break p000e0593;
 		ACCwriteln(560);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEVANTA _
	p000e0594:
	{
 		if (skipdoall('p000e0594')) break p000e0594;
 		if (in_response)
		{
			if (!CNDverb(114)) break p000e0594;
 		}
		if (!CNDnoteq(34,255)) break p000e0594;
		if (!CNDeq(51,255)) break p000e0594;
 		ACCwriteln(561);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEVANTA _
	p000e0595:
	{
 		if (skipdoall('p000e0595')) break p000e0595;
 		if (in_response)
		{
			if (!CNDverb(114)) break p000e0595;
 		}
		if (!CNDnoteq(51,255)) break p000e0595;
		if (!CNDpresent(getFlag(51))) break p000e0595;
		if (!CNDgt(55,52)) break p000e0595;
 		ACCwriteln(562);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEVANTA _
	p000e0596:
	{
 		if (skipdoall('p000e0596')) break p000e0596;
 		if (in_response)
		{
			if (!CNDverb(114)) break p000e0596;
 		}
		if (!CNDnoteq(51,255)) break p000e0596;
		if (!CNDpresent(getFlag(51))) break p000e0596;
 		ACCwriteln(563);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEVANTA _
	p000e0597:
	{
 		if (skipdoall('p000e0597')) break p000e0597;
 		if (in_response)
		{
			if (!CNDverb(114)) break p000e0597;
 		}
		if (!CNDnoteq(51,255)) break p000e0597;
		if (!CNDabsent(getFlag(51))) break p000e0597;
 		ACCwriteln(564);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// FREGAR _
	p000e0598:
	{
 		if (skipdoall('p000e0598')) break p000e0598;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0598;
 		}
		if (!CNDeq(34,255)) break p000e0598;
		if (!CNDbnotzero(12,1)) break p000e0598;
 		ACCwriteln(565);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// FREGAR _
	p000e0599:
	{
 		if (skipdoall('p000e0599')) break p000e0599;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0599;
 		}
		if (!CNDeq(34,255)) break p000e0599;
		if (!CNDbzero(12,1)) break p000e0599;
 		ACCwriteln(566);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// FREGAR _
	p000e0600:
	{
 		if (skipdoall('p000e0600')) break p000e0600;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0600;
 		}
		if (!CNDnoteq(34,255)) break p000e0600;
		if (!CNDnoteq(51,255)) break p000e0600;
		if (!CNDonotzero(getFlag(51),3)) break p000e0600;
		if (!CNDpresent(getFlag(51))) break p000e0600;
 		ACCwriteln(567);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// FREGAR _
	p000e0601:
	{
 		if (skipdoall('p000e0601')) break p000e0601;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0601;
 		}
		if (!CNDnoteq(34,255)) break p000e0601;
		if (!CNDnoteq(51,255)) break p000e0601;
		if (!CNDonotzero(getFlag(51),3)) break p000e0601;
		if (!CNDabsent(getFlag(51))) break p000e0601;
 		ACCwriteln(568);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// FREGAR _
	p000e0602:
	{
 		if (skipdoall('p000e0602')) break p000e0602;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0602;
 		}
		if (!CNDnoteq(34,255)) break p000e0602;
		if (!CNDeq(51,255)) break p000e0602;
 		ACCwriteln(569);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// FREGAR _
	p000e0603:
	{
 		if (skipdoall('p000e0603')) break p000e0603;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0603;
 		}
		if (!CNDnoteq(51,255)) break p000e0603;
		if (!CNDpresent(getFlag(51))) break p000e0603;
 		ACCwriteln(570);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// FREGAR _
	p000e0604:
	{
 		if (skipdoall('p000e0604')) break p000e0604;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0604;
 		}
		if (!CNDnoteq(51,255)) break p000e0604;
		if (!CNDabsent(getFlag(51))) break p000e0604;
 		ACCwriteln(571);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LUCHA _
	p000e0605:
	{
 		if (skipdoall('p000e0605')) break p000e0605;
 		if (in_response)
		{
			if (!CNDverb(146)) break p000e0605;
 		}
		if (!CNDeq(34,255)) break p000e0605;
		if (!CNDbnotzero(12,1)) break p000e0605;
 		ACCwriteln(572);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LUCHA _
	p000e0606:
	{
 		if (skipdoall('p000e0606')) break p000e0606;
 		if (in_response)
		{
			if (!CNDverb(146)) break p000e0606;
 		}
		if (!CNDeq(34,255)) break p000e0606;
		if (!CNDbzero(12,1)) break p000e0606;
 		ACCwriteln(573);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LUCHA _
	p000e0607:
	{
 		if (skipdoall('p000e0607')) break p000e0607;
 		if (in_response)
		{
			if (!CNDverb(146)) break p000e0607;
 		}
		if (!CNDnoteq(34,255)) break p000e0607;
		if (!CNDnoteq(51,255)) break p000e0607;
		if (!CNDonotzero(getFlag(51),3)) break p000e0607;
		if (!CNDpresent(getFlag(51))) break p000e0607;
 		ACCwriteln(574);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LUCHA _
	p000e0608:
	{
 		if (skipdoall('p000e0608')) break p000e0608;
 		if (in_response)
		{
			if (!CNDverb(146)) break p000e0608;
 		}
		if (!CNDnoteq(34,255)) break p000e0608;
		if (!CNDnoteq(51,255)) break p000e0608;
		if (!CNDonotzero(getFlag(51),3)) break p000e0608;
		if (!CNDabsent(getFlag(51))) break p000e0608;
 		ACCwriteln(575);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LUCHA _
	p000e0609:
	{
 		if (skipdoall('p000e0609')) break p000e0609;
 		if (in_response)
		{
			if (!CNDverb(146)) break p000e0609;
 		}
		if (!CNDnoteq(34,255)) break p000e0609;
		if (!CNDeq(51,255)) break p000e0609;
 		ACCwriteln(576);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LUCHA _
	p000e0610:
	{
 		if (skipdoall('p000e0610')) break p000e0610;
 		if (in_response)
		{
			if (!CNDverb(146)) break p000e0610;
 		}
		if (!CNDnoteq(51,255)) break p000e0610;
		if (!CNDpresent(getFlag(51))) break p000e0610;
 		ACCwriteln(577);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LUCHA _
	p000e0611:
	{
 		if (skipdoall('p000e0611')) break p000e0611;
 		if (in_response)
		{
			if (!CNDverb(146)) break p000e0611;
 		}
		if (!CNDnoteq(51,255)) break p000e0611;
		if (!CNDabsent(getFlag(51))) break p000e0611;
 		ACCwriteln(578);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLAMA _
	p000e0612:
	{
 		if (skipdoall('p000e0612')) break p000e0612;
 		if (in_response)
		{
			if (!CNDverb(76)) break p000e0612;
 		}
		if (!CNDeq(34,255)) break p000e0612;
		if (!CNDbnotzero(12,1)) break p000e0612;
 		ACCwriteln(579);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLAMA _
	p000e0613:
	{
 		if (skipdoall('p000e0613')) break p000e0613;
 		if (in_response)
		{
			if (!CNDverb(76)) break p000e0613;
 		}
		if (!CNDeq(34,255)) break p000e0613;
		if (!CNDbzero(12,1)) break p000e0613;
 		ACCwriteln(580);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLAMA _
	p000e0614:
	{
 		if (skipdoall('p000e0614')) break p000e0614;
 		if (in_response)
		{
			if (!CNDverb(76)) break p000e0614;
 		}
		if (!CNDnoteq(34,255)) break p000e0614;
		if (!CNDnoteq(51,255)) break p000e0614;
		if (!CNDonotzero(getFlag(51),3)) break p000e0614;
		if (!CNDpresent(getFlag(51))) break p000e0614;
 		ACCwriteln(581);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLAMA _
	p000e0615:
	{
 		if (skipdoall('p000e0615')) break p000e0615;
 		if (in_response)
		{
			if (!CNDverb(76)) break p000e0615;
 		}
		if (!CNDnoteq(34,255)) break p000e0615;
		if (!CNDnoteq(51,255)) break p000e0615;
		if (!CNDonotzero(getFlag(51),3)) break p000e0615;
		if (!CNDabsent(getFlag(51))) break p000e0615;
 		ACCwriteln(582);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLAMA _
	p000e0616:
	{
 		if (skipdoall('p000e0616')) break p000e0616;
 		if (in_response)
		{
			if (!CNDverb(76)) break p000e0616;
 		}
		if (!CNDnoteq(34,255)) break p000e0616;
		if (!CNDeq(51,255)) break p000e0616;
 		ACCwriteln(583);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLAMA _
	p000e0617:
	{
 		if (skipdoall('p000e0617')) break p000e0617;
 		if (in_response)
		{
			if (!CNDverb(76)) break p000e0617;
 		}
		if (!CNDnoteq(51,255)) break p000e0617;
		if (!CNDpresent(getFlag(51))) break p000e0617;
 		ACCwriteln(584);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLAMA _
	p000e0618:
	{
 		if (skipdoall('p000e0618')) break p000e0618;
 		if (in_response)
		{
			if (!CNDverb(76)) break p000e0618;
 		}
		if (!CNDnoteq(51,255)) break p000e0618;
		if (!CNDabsent(getFlag(51))) break p000e0618;
 		ACCwriteln(585);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA _
	p000e0619:
	{
 		if (skipdoall('p000e0619')) break p000e0619;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0619;
 		}
		if (!CNDeq(34,255)) break p000e0619;
		if (!CNDbnotzero(12,1)) break p000e0619;
 		ACCwriteln(586);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA _
	p000e0620:
	{
 		if (skipdoall('p000e0620')) break p000e0620;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0620;
 		}
		if (!CNDeq(34,255)) break p000e0620;
		if (!CNDbzero(12,1)) break p000e0620;
 		ACCwriteln(587);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA _
	p000e0621:
	{
 		if (skipdoall('p000e0621')) break p000e0621;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0621;
 		}
		if (!CNDnoteq(34,255)) break p000e0621;
		if (!CNDnoteq(51,255)) break p000e0621;
		if (!CNDonotzero(getFlag(51),3)) break p000e0621;
		if (!CNDpresent(getFlag(51))) break p000e0621;
 		ACCwriteln(588);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA _
	p000e0622:
	{
 		if (skipdoall('p000e0622')) break p000e0622;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0622;
 		}
		if (!CNDnoteq(34,255)) break p000e0622;
		if (!CNDnoteq(51,255)) break p000e0622;
		if (!CNDonotzero(getFlag(51),3)) break p000e0622;
		if (!CNDabsent(getFlag(51))) break p000e0622;
 		ACCwriteln(589);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA _
	p000e0623:
	{
 		if (skipdoall('p000e0623')) break p000e0623;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0623;
 		}
		if (!CNDnoteq(34,255)) break p000e0623;
		if (!CNDeq(51,255)) break p000e0623;
 		ACCwriteln(590);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA _
	p000e0624:
	{
 		if (skipdoall('p000e0624')) break p000e0624;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0624;
 		}
		if (!CNDnoteq(51,255)) break p000e0624;
		if (!CNDpresent(getFlag(51))) break p000e0624;
		if (!CNDonotzero(getFlag(51),2)) break p000e0624;
 		ACCwriteln(591);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA _
	p000e0625:
	{
 		if (skipdoall('p000e0625')) break p000e0625;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0625;
 		}
		if (!CNDnoteq(51,255)) break p000e0625;
		if (!CNDpresent(getFlag(51))) break p000e0625;
 		ACCwriteln(592);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA _
	p000e0626:
	{
 		if (skipdoall('p000e0626')) break p000e0626;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0626;
 		}
		if (!CNDnoteq(51,255)) break p000e0626;
		if (!CNDabsent(getFlag(51))) break p000e0626;
 		ACCwriteln(593);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ASESINA _
	p000e0627:
	{
 		if (skipdoall('p000e0627')) break p000e0627;
 		if (in_response)
		{
			if (!CNDverb(125)) break p000e0627;
 		}
		if (!CNDeq(34,255)) break p000e0627;
		if (!CNDbnotzero(12,1)) break p000e0627;
 		ACCwriteln(594);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ASESINA _
	p000e0628:
	{
 		if (skipdoall('p000e0628')) break p000e0628;
 		if (in_response)
		{
			if (!CNDverb(125)) break p000e0628;
 		}
		if (!CNDeq(34,255)) break p000e0628;
		if (!CNDbzero(12,1)) break p000e0628;
 		ACCwriteln(595);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ASESINA _
	p000e0629:
	{
 		if (skipdoall('p000e0629')) break p000e0629;
 		if (in_response)
		{
			if (!CNDverb(125)) break p000e0629;
 		}
		if (!CNDnoteq(34,255)) break p000e0629;
		if (!CNDnoteq(51,255)) break p000e0629;
		if (!CNDonotzero(getFlag(51),3)) break p000e0629;
		if (!CNDpresent(getFlag(51))) break p000e0629;
 		ACCwriteln(596);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ASESINA _
	p000e0630:
	{
 		if (skipdoall('p000e0630')) break p000e0630;
 		if (in_response)
		{
			if (!CNDverb(125)) break p000e0630;
 		}
		if (!CNDnoteq(34,255)) break p000e0630;
		if (!CNDnoteq(51,255)) break p000e0630;
		if (!CNDonotzero(getFlag(51),3)) break p000e0630;
		if (!CNDabsent(getFlag(51))) break p000e0630;
 		ACCwriteln(597);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ASESINA _
	p000e0631:
	{
 		if (skipdoall('p000e0631')) break p000e0631;
 		if (in_response)
		{
			if (!CNDverb(125)) break p000e0631;
 		}
		if (!CNDnoteq(34,255)) break p000e0631;
		if (!CNDeq(51,255)) break p000e0631;
 		ACCwriteln(598);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ASESINA _
	p000e0632:
	{
 		if (skipdoall('p000e0632')) break p000e0632;
 		if (in_response)
		{
			if (!CNDverb(125)) break p000e0632;
 		}
		if (!CNDnoteq(51,255)) break p000e0632;
		if (!CNDpresent(getFlag(51))) break p000e0632;
 		ACCwriteln(599);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ASESINA _
	p000e0633:
	{
 		if (skipdoall('p000e0633')) break p000e0633;
 		if (in_response)
		{
			if (!CNDverb(125)) break p000e0633;
 		}
		if (!CNDnoteq(51,255)) break p000e0633;
		if (!CNDabsent(getFlag(51))) break p000e0633;
 		ACCwriteln(600);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// MEZCLA _
	p000e0634:
	{
 		if (skipdoall('p000e0634')) break p000e0634;
 		if (in_response)
		{
			if (!CNDverb(124)) break p000e0634;
 		}
		if (!CNDeq(34,255)) break p000e0634;
		if (!CNDbnotzero(12,1)) break p000e0634;
 		ACCwriteln(601);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// MEZCLA _
	p000e0635:
	{
 		if (skipdoall('p000e0635')) break p000e0635;
 		if (in_response)
		{
			if (!CNDverb(124)) break p000e0635;
 		}
		if (!CNDeq(34,255)) break p000e0635;
		if (!CNDbzero(12,1)) break p000e0635;
 		ACCwriteln(602);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// MEZCLA _
	p000e0636:
	{
 		if (skipdoall('p000e0636')) break p000e0636;
 		if (in_response)
		{
			if (!CNDverb(124)) break p000e0636;
 		}
		if (!CNDnoteq(34,255)) break p000e0636;
		if (!CNDnoteq(51,255)) break p000e0636;
		if (!CNDonotzero(getFlag(51),3)) break p000e0636;
		if (!CNDpresent(getFlag(51))) break p000e0636;
 		ACCwriteln(603);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// MEZCLA _
	p000e0637:
	{
 		if (skipdoall('p000e0637')) break p000e0637;
 		if (in_response)
		{
			if (!CNDverb(124)) break p000e0637;
 		}
		if (!CNDnoteq(34,255)) break p000e0637;
		if (!CNDnoteq(51,255)) break p000e0637;
		if (!CNDonotzero(getFlag(51),3)) break p000e0637;
		if (!CNDabsent(getFlag(51))) break p000e0637;
 		ACCwriteln(604);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// MEZCLA _
	p000e0638:
	{
 		if (skipdoall('p000e0638')) break p000e0638;
 		if (in_response)
		{
			if (!CNDverb(124)) break p000e0638;
 		}
		if (!CNDnoteq(34,255)) break p000e0638;
		if (!CNDeq(51,255)) break p000e0638;
 		ACCwriteln(605);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// MEZCLA _
	p000e0639:
	{
 		if (skipdoall('p000e0639')) break p000e0639;
 		if (in_response)
		{
			if (!CNDverb(124)) break p000e0639;
 		}
		if (!CNDnoteq(51,255)) break p000e0639;
		if (!CNDpresent(getFlag(51))) break p000e0639;
 		ACCwriteln(606);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// MEZCLA _
	p000e0640:
	{
 		if (skipdoall('p000e0640')) break p000e0640;
 		if (in_response)
		{
			if (!CNDverb(124)) break p000e0640;
 		}
		if (!CNDnoteq(51,255)) break p000e0640;
		if (!CNDabsent(getFlag(51))) break p000e0640;
 		ACCwriteln(607);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0641:
	{
 		if (skipdoall('p000e0641')) break p000e0641;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0641;
 		}
 		ACCwhatox2(15);
		{}

	}

	// ECHA _
	p000e0642:
	{
 		if (skipdoall('p000e0642')) break p000e0642;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0642;
 		}
		if (!CNDeq(34,255)) break p000e0642;
		if (!CNDbzero(12,1)) break p000e0642;
 		ACCwriteln(608);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0643:
	{
 		if (skipdoall('p000e0643')) break p000e0643;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0643;
 		}
		if (!CNDeq(34,255)) break p000e0643;
		if (!CNDbnotzero(12,1)) break p000e0643;
 		ACCwriteln(609);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0644:
	{
 		if (skipdoall('p000e0644')) break p000e0644;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0644;
 		}
		if (!CNDnoteq(34,255)) break p000e0644;
		if (!CNDeq(51,255)) break p000e0644;
 		ACCwriteln(610);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0645:
	{
 		if (skipdoall('p000e0645')) break p000e0645;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0645;
 		}
		if (!CNDbzero(12,2)) break p000e0645;
		if (!CNDeq(44,255)) break p000e0645;
		if (!CNDbnotzero(12,1)) break p000e0645;
 		ACCwriteln(611);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0646:
	{
 		if (skipdoall('p000e0646')) break p000e0646;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0646;
 		}
		if (!CNDnoteq(51,255)) break p000e0646;
		if (!CNDworn(getFlag(51))) break p000e0646;
		if (!CNDonotzero(getFlag(51),1)) break p000e0646;
 		ACCwriteln(612);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0647:
	{
 		if (skipdoall('p000e0647')) break p000e0647;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0647;
 		}
		if (!CNDnoteq(51,255)) break p000e0647;
		if (!CNDnotcarr(getFlag(51))) break p000e0647;
 		ACCwriteln(613);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0648:
	{
 		if (skipdoall('p000e0648')) break p000e0648;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0648;
 		}
		if (!CNDnoteq(51,255)) break p000e0648;
		if (!CNDcarried(getFlag(51))) break p000e0648;
		if (!CNDeq(44,255)) break p000e0648;
		if (!CNDbzero(12,1)) break p000e0648;
 		ACCwriteln(614);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0649:
	{
 		if (skipdoall('p000e0649')) break p000e0649;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0649;
 		}
		if (!CNDnoteq(51,255)) break p000e0649;
		if (!CNDcarried(getFlag(51))) break p000e0649;
		if (!CNDeq(44,255)) break p000e0649;
		if (!CNDbnotzero(12,1)) break p000e0649;
 		ACCwriteln(615);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0650:
	{
 		if (skipdoall('p000e0650')) break p000e0650;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0650;
 		}
		if (!CNDnoteq(51,255)) break p000e0650;
		if (!CNDcarried(getFlag(51))) break p000e0650;
		if (!CNDnoteq(44,255)) break p000e0650;
		if (!CNDeq(15,255)) break p000e0650;
 		ACCwriteln(616);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0651:
	{
 		if (skipdoall('p000e0651')) break p000e0651;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0651;
 		}
		if (!CNDnoteq(15,255)) break p000e0651;
		if (!CNDonotzero(getFlag(15),2)) break p000e0651;
		if (!CNDsame(51,15)) break p000e0651;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0652:
	{
 		if (skipdoall('p000e0652')) break p000e0652;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0652;
 		}
		if (!CNDnoteq(51,255)) break p000e0652;
		if (!CNDcarried(getFlag(51))) break p000e0652;
		if (!CNDnoteq(44,255)) break p000e0652;
		if (!CNDnoteq(15,255)) break p000e0652;
		if (!CNDozero(getFlag(15),2)) break p000e0652;
		if (!CNDcarried(getFlag(15))) break p000e0652;
 		ACCwriteln(617);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0653:
	{
 		if (skipdoall('p000e0653')) break p000e0653;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0653;
 		}
		if (!CNDnoteq(51,255)) break p000e0653;
		if (!CNDcarried(getFlag(51))) break p000e0653;
		if (!CNDnoteq(44,255)) break p000e0653;
		if (!CNDnoteq(15,255)) break p000e0653;
		if (!CNDonotzero(getFlag(15),2)) break p000e0653;
		if (!CNDnotcarr(getFlag(15))) break p000e0653;
 		ACCwriteln(618);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0654:
	{
 		if (skipdoall('p000e0654')) break p000e0654;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0654;
 		}
		if (!CNDnoteq(51,255)) break p000e0654;
		if (!CNDcarried(getFlag(51))) break p000e0654;
		if (!CNDnoteq(44,255)) break p000e0654;
		if (!CNDnoteq(15,255)) break p000e0654;
		if (!CNDonotzero(getFlag(15),2)) break p000e0654;
		if (!CNDcarried(getFlag(15))) break p000e0654;
 		ACCautop(getFlag(15));
		if (!success) break pro000_restart;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// L _
	p000e0655:
	{
 		if (skipdoall('p000e0655')) break p000e0655;
 		if (in_response)
		{
			if (!CNDverb(24)) break p000e0655;
 		}
		if (!CNDprep(4)) break p000e0655;
		if (!CNDeq(34,255)) break p000e0655;
		if (!CNDbnotzero(12,1)) break p000e0655;
 		ACCwriteln(619);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// L _
	p000e0656:
	{
 		if (skipdoall('p000e0656')) break p000e0656;
 		if (in_response)
		{
			if (!CNDverb(24)) break p000e0656;
 		}
		if (!CNDprep(4)) break p000e0656;
		if (!CNDeq(34,255)) break p000e0656;
		if (!CNDbzero(12,1)) break p000e0656;
 		ACCwriteln(620);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// L _
	p000e0657:
	{
 		if (skipdoall('p000e0657')) break p000e0657;
 		if (in_response)
		{
			if (!CNDverb(24)) break p000e0657;
 		}
		if (!CNDlt(34,12)) break p000e0657;
 		ACCwriteln(621);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// L _
	p000e0658:
	{
 		if (skipdoall('p000e0658')) break p000e0658;
 		if (in_response)
		{
			if (!CNDverb(24)) break p000e0658;
 		}
		if (!CNDeq(34,255)) break p000e0658;
		if (!CNDbnotzero(12,1)) break p000e0658;
 		ACCwriteln(622);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// L _
	p000e0659:
	{
 		if (skipdoall('p000e0659')) break p000e0659;
 		if (in_response)
		{
			if (!CNDverb(24)) break p000e0659;
 		}
		if (!CNDprep(4)) break p000e0659;
		if (!CNDnoteq(51,255)) break p000e0659;
		if (!CNDonotzero(getFlag(51),3)) break p000e0659;
		if (!CNDpresent(getFlag(51))) break p000e0659;
 		ACCwriteln(623);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// L _
	p000e0660:
	{
 		if (skipdoall('p000e0660')) break p000e0660;
 		if (in_response)
		{
			if (!CNDverb(24)) break p000e0660;
 		}
		if (!CNDprep(4)) break p000e0660;
		if (!CNDnoteq(51,255)) break p000e0660;
		if (!CNDonotzero(getFlag(51),3)) break p000e0660;
		if (!CNDabsent(getFlag(51))) break p000e0660;
 		ACCwriteln(624);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// L _
	p000e0661:
	{
 		if (skipdoall('p000e0661')) break p000e0661;
 		if (in_response)
		{
			if (!CNDverb(24)) break p000e0661;
 		}
		if (!CNDnoteq(34,255)) break p000e0661;
		if (!CNDnoteq(51,255)) break p000e0661;
		if (!CNDonotzero(getFlag(51),3)) break p000e0661;
		if (!CNDpresent(getFlag(51))) break p000e0661;
 		ACCwriteln(625);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// L _
	p000e0662:
	{
 		if (skipdoall('p000e0662')) break p000e0662;
 		if (in_response)
		{
			if (!CNDverb(24)) break p000e0662;
 		}
		if (!CNDnoteq(34,255)) break p000e0662;
		if (!CNDnoteq(51,255)) break p000e0662;
		if (!CNDonotzero(getFlag(51),3)) break p000e0662;
		if (!CNDabsent(getFlag(51))) break p000e0662;
 		ACCwriteln(626);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// L _
	p000e0663:
	{
 		if (skipdoall('p000e0663')) break p000e0663;
 		if (in_response)
		{
			if (!CNDverb(24)) break p000e0663;
 		}
		if (!CNDprep(4)) break p000e0663;
		if (!CNDnoteq(34,255)) break p000e0663;
		if (!CNDeq(51,255)) break p000e0663;
 		ACCwriteln(627);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// L _
	p000e0664:
	{
 		if (skipdoall('p000e0664')) break p000e0664;
 		if (in_response)
		{
			if (!CNDverb(24)) break p000e0664;
 		}
		if (!CNDnoteq(34,255)) break p000e0664;
		if (!CNDeq(51,255)) break p000e0664;
 		ACCwriteln(628);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// L _
	p000e0665:
	{
 		if (skipdoall('p000e0665')) break p000e0665;
 		if (in_response)
		{
			if (!CNDverb(24)) break p000e0665;
 		}
		if (!CNDnoteq(51,255)) break p000e0665;
		if (!CNDpresent(getFlag(51))) break p000e0665;
 		ACCwriteln(629);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// L _
	p000e0666:
	{
 		if (skipdoall('p000e0666')) break p000e0666;
 		if (in_response)
		{
			if (!CNDverb(24)) break p000e0666;
 		}
		if (!CNDnoteq(51,255)) break p000e0666;
		if (!CNDabsent(getFlag(51))) break p000e0666;
 		ACCwriteln(630);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// L _
	p000e0667:
	{
 		if (skipdoall('p000e0667')) break p000e0667;
 		if (in_response)
		{
			if (!CNDverb(24)) break p000e0667;
 		}
		if (!CNDeq(34,255)) break p000e0667;
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// ENSEÃ‘A _
	p000e0668:
	{
 		if (skipdoall('p000e0668')) break p000e0668;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0668;
 		}
		if (!CNDsame(46,34)) break p000e0668;
 		ACCwhatox(15);
		if (!CNDonotzero(getFlag(15),3)) break p000e0668;
		if (!CNDnoteq(44,255)) break p000e0668;
 		ACCcopyff(34,14);
 		ACCcopyff(44,34);
 		ACCcopyff(14,44);
 		ACCcopyff(35,14);
 		ACCcopyff(45,35);
 		ACCcopyff(14,45);
 		ACCwhato();
		{}

	}

	// ENSEÃ‘A _
	p000e0669:
	{
 		if (skipdoall('p000e0669')) break p000e0669;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0669;
 		}
		if (!CNDprep(2)) break p000e0669;
		if (!CNDbzero(12,2)) break p000e0669;
		if (!CNDeq(44,255)) break p000e0669;
		if (!CNDbnotzero(12,1)) break p000e0669;
 		ACCwriteln(631);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÃ‘A _
	p000e0670:
	{
 		if (skipdoall('p000e0670')) break p000e0670;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0670;
 		}
		if (!CNDeq(34,255)) break p000e0670;
		if (!CNDbzero(12,1)) break p000e0670;
 		ACCwriteln(632);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÃ‘A _
	p000e0671:
	{
 		if (skipdoall('p000e0671')) break p000e0671;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0671;
 		}
		if (!CNDeq(34,255)) break p000e0671;
		if (!CNDbnotzero(12,1)) break p000e0671;
 		ACCwriteln(633);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÃ‘A _
	p000e0672:
	{
 		if (skipdoall('p000e0672')) break p000e0672;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0672;
 		}
		if (!CNDnoteq(34,255)) break p000e0672;
		if (!CNDeq(51,255)) break p000e0672;
 		ACCwriteln(634);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÃ‘A _
	p000e0673:
	{
 		if (skipdoall('p000e0673')) break p000e0673;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0673;
 		}
		if (!CNDnoteq(51,255)) break p000e0673;
		if (!CNDworn(getFlag(51))) break p000e0673;
		if (!CNDonotzero(getFlag(51),1)) break p000e0673;
 		ACCwriteln(635);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÃ‘A _
	p000e0674:
	{
 		if (skipdoall('p000e0674')) break p000e0674;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0674;
 		}
		if (!CNDnoteq(51,255)) break p000e0674;
		if (!CNDnotcarr(getFlag(51))) break p000e0674;
 		ACCwriteln(636);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÃ‘A _
	p000e0675:
	{
 		if (skipdoall('p000e0675')) break p000e0675;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0675;
 		}
		if (!CNDnoteq(51,255)) break p000e0675;
		if (!CNDcarried(getFlag(51))) break p000e0675;
		if (!CNDeq(44,255)) break p000e0675;
		if (!CNDbzero(12,1)) break p000e0675;
 		ACCwriteln(637);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÃ‘A _
	p000e0676:
	{
 		if (skipdoall('p000e0676')) break p000e0676;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0676;
 		}
		if (!CNDnoteq(51,255)) break p000e0676;
		if (!CNDcarried(getFlag(51))) break p000e0676;
		if (!CNDeq(44,255)) break p000e0676;
		if (!CNDbnotzero(12,1)) break p000e0676;
 		ACCwriteln(638);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÃ‘A _
	p000e0677:
	{
 		if (skipdoall('p000e0677')) break p000e0677;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0677;
 		}
		if (!CNDnoteq(51,255)) break p000e0677;
		if (!CNDcarried(getFlag(51))) break p000e0677;
		if (!CNDnoteq(44,255)) break p000e0677;
 		ACCwhatox2(15);
		if (!CNDeq(15,255)) break p000e0677;
 		ACCwriteln(639);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÃ‘A _
	p000e0678:
	{
 		if (skipdoall('p000e0678')) break p000e0678;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0678;
 		}
		if (!CNDnoteq(51,255)) break p000e0678;
		if (!CNDcarried(getFlag(51))) break p000e0678;
		if (!CNDnoteq(44,255)) break p000e0678;
 		ACCwhatox2(15);
		if (!CNDnoteq(15,255)) break p000e0678;
		if (!CNDozero(getFlag(15),3)) break p000e0678;
 		ACCwriteln(640);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÃ‘A _
	p000e0679:
	{
 		if (skipdoall('p000e0679')) break p000e0679;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0679;
 		}
		if (!CNDnoteq(51,255)) break p000e0679;
		if (!CNDcarried(getFlag(51))) break p000e0679;
		if (!CNDnoteq(44,255)) break p000e0679;
 		ACCwhatox2(15);
		if (!CNDnoteq(15,255)) break p000e0679;
		if (!CNDonotzero(getFlag(15),3)) break p000e0679;
		if (!CNDpresent(getFlag(15))) break p000e0679;
 		ACCwriteln(641);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÃ‘A _
	p000e0680:
	{
 		if (skipdoall('p000e0680')) break p000e0680;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0680;
 		}
		if (!CNDnoteq(51,255)) break p000e0680;
		if (!CNDcarried(getFlag(51))) break p000e0680;
		if (!CNDnoteq(44,255)) break p000e0680;
 		ACCwhatox2(15);
		if (!CNDnoteq(15,255)) break p000e0680;
		if (!CNDonotzero(getFlag(15),3)) break p000e0680;
		if (!CNDabsent(getFlag(15))) break p000e0680;
 		ACCwriteln(642);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESPLAZA _
	p000e0681:
	{
 		if (skipdoall('p000e0681')) break p000e0681;
 		if (in_response)
		{
			if (!CNDverb(110)) break p000e0681;
 		}
		if (!CNDeq(34,255)) break p000e0681;
		if (!CNDbnotzero(12,1)) break p000e0681;
 		ACCwriteln(643);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESPLAZA _
	p000e0682:
	{
 		if (skipdoall('p000e0682')) break p000e0682;
 		if (in_response)
		{
			if (!CNDverb(110)) break p000e0682;
 		}
		if (!CNDeq(34,255)) break p000e0682;
		if (!CNDbzero(12,1)) break p000e0682;
 		ACCwriteln(644);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESPLAZA _
	p000e0683:
	{
 		if (skipdoall('p000e0683')) break p000e0683;
 		if (in_response)
		{
			if (!CNDverb(110)) break p000e0683;
 		}
		if (!CNDnoteq(34,255)) break p000e0683;
		if (!CNDnoteq(51,255)) break p000e0683;
		if (!CNDonotzero(getFlag(51),3)) break p000e0683;
		if (!CNDpresent(getFlag(51))) break p000e0683;
 		ACCwriteln(645);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESPLAZA _
	p000e0684:
	{
 		if (skipdoall('p000e0684')) break p000e0684;
 		if (in_response)
		{
			if (!CNDverb(110)) break p000e0684;
 		}
		if (!CNDnoteq(34,255)) break p000e0684;
		if (!CNDnoteq(51,255)) break p000e0684;
		if (!CNDonotzero(getFlag(51),3)) break p000e0684;
		if (!CNDabsent(getFlag(51))) break p000e0684;
 		ACCwriteln(646);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESPLAZA _
	p000e0685:
	{
 		if (skipdoall('p000e0685')) break p000e0685;
 		if (in_response)
		{
			if (!CNDverb(110)) break p000e0685;
 		}
		if (!CNDnoteq(34,255)) break p000e0685;
		if (!CNDeq(51,255)) break p000e0685;
 		ACCwriteln(647);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESPLAZA _
	p000e0686:
	{
 		if (skipdoall('p000e0686')) break p000e0686;
 		if (in_response)
		{
			if (!CNDverb(110)) break p000e0686;
 		}
		if (!CNDnoteq(51,255)) break p000e0686;
		if (!CNDpresent(getFlag(51))) break p000e0686;
 		ACCwriteln(648);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESPLAZA _
	p000e0687:
	{
 		if (skipdoall('p000e0687')) break p000e0687;
 		if (in_response)
		{
			if (!CNDverb(110)) break p000e0687;
 		}
		if (!CNDnoteq(51,255)) break p000e0687;
		if (!CNDabsent(getFlag(51))) break p000e0687;
 		ACCwriteln(649);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// NOQUEA _
	p000e0688:
	{
 		if (skipdoall('p000e0688')) break p000e0688;
 		if (in_response)
		{
			if (!CNDverb(150)) break p000e0688;
 		}
		if (!CNDeq(34,255)) break p000e0688;
		if (!CNDbnotzero(12,1)) break p000e0688;
 		ACCwriteln(650);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// NOQUEA _
	p000e0689:
	{
 		if (skipdoall('p000e0689')) break p000e0689;
 		if (in_response)
		{
			if (!CNDverb(150)) break p000e0689;
 		}
		if (!CNDeq(34,255)) break p000e0689;
		if (!CNDbzero(12,1)) break p000e0689;
 		ACCwriteln(651);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// NOQUEA _
	p000e0690:
	{
 		if (skipdoall('p000e0690')) break p000e0690;
 		if (in_response)
		{
			if (!CNDverb(150)) break p000e0690;
 		}
		if (!CNDnoteq(34,255)) break p000e0690;
		if (!CNDnoteq(51,255)) break p000e0690;
		if (!CNDonotzero(getFlag(51),3)) break p000e0690;
		if (!CNDpresent(getFlag(51))) break p000e0690;
 		ACCwriteln(652);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// NOQUEA _
	p000e0691:
	{
 		if (skipdoall('p000e0691')) break p000e0691;
 		if (in_response)
		{
			if (!CNDverb(150)) break p000e0691;
 		}
		if (!CNDnoteq(34,255)) break p000e0691;
		if (!CNDnoteq(51,255)) break p000e0691;
		if (!CNDonotzero(getFlag(51),3)) break p000e0691;
		if (!CNDabsent(getFlag(51))) break p000e0691;
 		ACCwriteln(653);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// NOQUEA _
	p000e0692:
	{
 		if (skipdoall('p000e0692')) break p000e0692;
 		if (in_response)
		{
			if (!CNDverb(150)) break p000e0692;
 		}
		if (!CNDnoteq(34,255)) break p000e0692;
		if (!CNDeq(51,255)) break p000e0692;
 		ACCwriteln(654);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// NOQUEA _
	p000e0693:
	{
 		if (skipdoall('p000e0693')) break p000e0693;
 		if (in_response)
		{
			if (!CNDverb(150)) break p000e0693;
 		}
		if (!CNDnoteq(51,255)) break p000e0693;
		if (!CNDpresent(getFlag(51))) break p000e0693;
 		ACCwriteln(655);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// NOQUEA _
	p000e0694:
	{
 		if (skipdoall('p000e0694')) break p000e0694;
 		if (in_response)
		{
			if (!CNDverb(150)) break p000e0694;
 		}
		if (!CNDnoteq(51,255)) break p000e0694;
		if (!CNDabsent(getFlag(51))) break p000e0694;
 		ACCwriteln(656);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE _
	p000e0695:
	{
 		if (skipdoall('p000e0695')) break p000e0695;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0695;
 		}
		if (!CNDeq(34,255)) break p000e0695;
		if (!CNDbnotzero(12,1)) break p000e0695;
 		ACCwriteln(657);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE _
	p000e0696:
	{
 		if (skipdoall('p000e0696')) break p000e0696;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0696;
 		}
		if (!CNDeq(34,255)) break p000e0696;
		if (!CNDbzero(12,1)) break p000e0696;
 		ACCwriteln(658);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE _
	p000e0697:
	{
 		if (skipdoall('p000e0697')) break p000e0697;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0697;
 		}
		if (!CNDnoteq(34,255)) break p000e0697;
		if (!CNDnoteq(51,255)) break p000e0697;
		if (!CNDonotzero(getFlag(51),3)) break p000e0697;
		if (!CNDpresent(getFlag(51))) break p000e0697;
 		ACCwriteln(659);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE _
	p000e0698:
	{
 		if (skipdoall('p000e0698')) break p000e0698;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0698;
 		}
		if (!CNDnoteq(34,255)) break p000e0698;
		if (!CNDnoteq(51,255)) break p000e0698;
		if (!CNDonotzero(getFlag(51),3)) break p000e0698;
		if (!CNDabsent(getFlag(51))) break p000e0698;
 		ACCwriteln(660);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE _
	p000e0699:
	{
 		if (skipdoall('p000e0699')) break p000e0699;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0699;
 		}
		if (!CNDnoteq(34,255)) break p000e0699;
		if (!CNDeq(51,255)) break p000e0699;
 		ACCwriteln(661);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE _
	p000e0700:
	{
 		if (skipdoall('p000e0700')) break p000e0700;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0700;
 		}
		if (!CNDnoteq(51,255)) break p000e0700;
		if (!CNDpresent(getFlag(51))) break p000e0700;
 		ACCwriteln(662);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE _
	p000e0701:
	{
 		if (skipdoall('p000e0701')) break p000e0701;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0701;
 		}
		if (!CNDnoteq(51,255)) break p000e0701;
		if (!CNDabsent(getFlag(51))) break p000e0701;
 		ACCwriteln(663);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PARTE _
	p000e0702:
	{
 		if (skipdoall('p000e0702')) break p000e0702;
 		if (in_response)
		{
			if (!CNDverb(152)) break p000e0702;
 		}
		if (!CNDeq(34,255)) break p000e0702;
		if (!CNDbnotzero(12,1)) break p000e0702;
 		ACCwriteln(664);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PARTE _
	p000e0703:
	{
 		if (skipdoall('p000e0703')) break p000e0703;
 		if (in_response)
		{
			if (!CNDverb(152)) break p000e0703;
 		}
		if (!CNDeq(34,255)) break p000e0703;
		if (!CNDbzero(12,1)) break p000e0703;
 		ACCwriteln(665);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PARTE _
	p000e0704:
	{
 		if (skipdoall('p000e0704')) break p000e0704;
 		if (in_response)
		{
			if (!CNDverb(152)) break p000e0704;
 		}
		if (!CNDnoteq(34,255)) break p000e0704;
		if (!CNDnoteq(51,255)) break p000e0704;
		if (!CNDonotzero(getFlag(51),3)) break p000e0704;
		if (!CNDpresent(getFlag(51))) break p000e0704;
 		ACCwriteln(666);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PARTE _
	p000e0705:
	{
 		if (skipdoall('p000e0705')) break p000e0705;
 		if (in_response)
		{
			if (!CNDverb(152)) break p000e0705;
 		}
		if (!CNDnoteq(34,255)) break p000e0705;
		if (!CNDnoteq(51,255)) break p000e0705;
		if (!CNDonotzero(getFlag(51),3)) break p000e0705;
		if (!CNDabsent(getFlag(51))) break p000e0705;
 		ACCwriteln(667);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PARTE _
	p000e0706:
	{
 		if (skipdoall('p000e0706')) break p000e0706;
 		if (in_response)
		{
			if (!CNDverb(152)) break p000e0706;
 		}
		if (!CNDnoteq(34,255)) break p000e0706;
		if (!CNDeq(51,255)) break p000e0706;
 		ACCwriteln(668);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PARTE _
	p000e0707:
	{
 		if (skipdoall('p000e0707')) break p000e0707;
 		if (in_response)
		{
			if (!CNDverb(152)) break p000e0707;
 		}
		if (!CNDnoteq(51,255)) break p000e0707;
		if (!CNDpresent(getFlag(51))) break p000e0707;
 		ACCwriteln(669);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PARTE _
	p000e0708:
	{
 		if (skipdoall('p000e0708')) break p000e0708;
 		if (in_response)
		{
			if (!CNDverb(152)) break p000e0708;
 		}
		if (!CNDnoteq(51,255)) break p000e0708;
		if (!CNDabsent(getFlag(51))) break p000e0708;
 		ACCwriteln(670);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PATEA _
	p000e0709:
	{
 		if (skipdoall('p000e0709')) break p000e0709;
 		if (in_response)
		{
			if (!CNDverb(144)) break p000e0709;
 		}
		if (!CNDeq(34,255)) break p000e0709;
		if (!CNDbnotzero(12,1)) break p000e0709;
 		ACCwriteln(671);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PATEA _
	p000e0710:
	{
 		if (skipdoall('p000e0710')) break p000e0710;
 		if (in_response)
		{
			if (!CNDverb(144)) break p000e0710;
 		}
		if (!CNDeq(34,255)) break p000e0710;
		if (!CNDbzero(12,1)) break p000e0710;
 		ACCwriteln(672);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PATEA _
	p000e0711:
	{
 		if (skipdoall('p000e0711')) break p000e0711;
 		if (in_response)
		{
			if (!CNDverb(144)) break p000e0711;
 		}
		if (!CNDnoteq(34,255)) break p000e0711;
		if (!CNDnoteq(51,255)) break p000e0711;
		if (!CNDonotzero(getFlag(51),3)) break p000e0711;
		if (!CNDpresent(getFlag(51))) break p000e0711;
 		ACCwriteln(673);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PATEA _
	p000e0712:
	{
 		if (skipdoall('p000e0712')) break p000e0712;
 		if (in_response)
		{
			if (!CNDverb(144)) break p000e0712;
 		}
		if (!CNDnoteq(34,255)) break p000e0712;
		if (!CNDnoteq(51,255)) break p000e0712;
		if (!CNDonotzero(getFlag(51),3)) break p000e0712;
		if (!CNDabsent(getFlag(51))) break p000e0712;
 		ACCwriteln(674);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PATEA _
	p000e0713:
	{
 		if (skipdoall('p000e0713')) break p000e0713;
 		if (in_response)
		{
			if (!CNDverb(144)) break p000e0713;
 		}
		if (!CNDnoteq(34,255)) break p000e0713;
		if (!CNDeq(51,255)) break p000e0713;
 		ACCwriteln(675);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PATEA _
	p000e0714:
	{
 		if (skipdoall('p000e0714')) break p000e0714;
 		if (in_response)
		{
			if (!CNDverb(144)) break p000e0714;
 		}
		if (!CNDnoteq(51,255)) break p000e0714;
		if (!CNDpresent(getFlag(51))) break p000e0714;
 		ACCwriteln(676);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PATEA _
	p000e0715:
	{
 		if (skipdoall('p000e0715')) break p000e0715;
 		if (in_response)
		{
			if (!CNDverb(144)) break p000e0715;
 		}
		if (!CNDnoteq(51,255)) break p000e0715;
		if (!CNDabsent(getFlag(51))) break p000e0715;
 		ACCwriteln(677);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PISOTEA _
	p000e0716:
	{
 		if (skipdoall('p000e0716')) break p000e0716;
 		if (in_response)
		{
			if (!CNDverb(148)) break p000e0716;
 		}
		if (!CNDeq(34,255)) break p000e0716;
		if (!CNDbnotzero(12,1)) break p000e0716;
 		ACCwriteln(678);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PISOTEA _
	p000e0717:
	{
 		if (skipdoall('p000e0717')) break p000e0717;
 		if (in_response)
		{
			if (!CNDverb(148)) break p000e0717;
 		}
		if (!CNDeq(34,255)) break p000e0717;
		if (!CNDbzero(12,1)) break p000e0717;
 		ACCwriteln(679);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PISOTEA _
	p000e0718:
	{
 		if (skipdoall('p000e0718')) break p000e0718;
 		if (in_response)
		{
			if (!CNDverb(148)) break p000e0718;
 		}
		if (!CNDnoteq(34,255)) break p000e0718;
		if (!CNDnoteq(51,255)) break p000e0718;
		if (!CNDonotzero(getFlag(51),3)) break p000e0718;
		if (!CNDpresent(getFlag(51))) break p000e0718;
 		ACCwriteln(680);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PISOTEA _
	p000e0719:
	{
 		if (skipdoall('p000e0719')) break p000e0719;
 		if (in_response)
		{
			if (!CNDverb(148)) break p000e0719;
 		}
		if (!CNDnoteq(34,255)) break p000e0719;
		if (!CNDnoteq(51,255)) break p000e0719;
		if (!CNDonotzero(getFlag(51),3)) break p000e0719;
		if (!CNDabsent(getFlag(51))) break p000e0719;
 		ACCwriteln(681);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PISOTEA _
	p000e0720:
	{
 		if (skipdoall('p000e0720')) break p000e0720;
 		if (in_response)
		{
			if (!CNDverb(148)) break p000e0720;
 		}
		if (!CNDnoteq(34,255)) break p000e0720;
		if (!CNDeq(51,255)) break p000e0720;
 		ACCwriteln(682);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PISOTEA _
	p000e0721:
	{
 		if (skipdoall('p000e0721')) break p000e0721;
 		if (in_response)
		{
			if (!CNDverb(148)) break p000e0721;
 		}
		if (!CNDnoteq(51,255)) break p000e0721;
		if (!CNDpresent(getFlag(51))) break p000e0721;
 		ACCwriteln(683);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PISOTEA _
	p000e0722:
	{
 		if (skipdoall('p000e0722')) break p000e0722;
 		if (in_response)
		{
			if (!CNDverb(148)) break p000e0722;
 		}
		if (!CNDnoteq(51,255)) break p000e0722;
		if (!CNDabsent(getFlag(51))) break p000e0722;
 		ACCwriteln(684);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PON _
	p000e0723:
	{
 		if (skipdoall('p000e0723')) break p000e0723;
 		if (in_response)
		{
			if (!CNDverb(71)) break p000e0723;
 		}
		if (!CNDeq(34,255)) break p000e0723;
		if (!CNDbnotzero(12,1)) break p000e0723;
 		ACCwriteln(685);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PON _
	p000e0724:
	{
 		if (skipdoall('p000e0724')) break p000e0724;
 		if (in_response)
		{
			if (!CNDverb(71)) break p000e0724;
 		}
		if (!CNDeq(34,255)) break p000e0724;
		if (!CNDbzero(12,1)) break p000e0724;
 		ACCwriteln(686);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PON _
	p000e0725:
	{
 		if (skipdoall('p000e0725')) break p000e0725;
 		if (in_response)
		{
			if (!CNDverb(71)) break p000e0725;
 		}
 		ACCautow();
		if (!success) break pro000_restart;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PREGUNTA _
	p000e0726:
	{
 		if (skipdoall('p000e0726')) break p000e0726;
 		if (in_response)
		{
			if (!CNDverb(142)) break p000e0726;
 		}
		if (!CNDeq(34,255)) break p000e0726;
		if (!CNDbnotzero(12,1)) break p000e0726;
 		ACCwriteln(687);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PREGUNTA _
	p000e0727:
	{
 		if (skipdoall('p000e0727')) break p000e0727;
 		if (in_response)
		{
			if (!CNDverb(142)) break p000e0727;
 		}
		if (!CNDeq(34,255)) break p000e0727;
		if (!CNDbzero(12,1)) break p000e0727;
 		ACCwriteln(688);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PREGUNTA _
	p000e0728:
	{
 		if (skipdoall('p000e0728')) break p000e0728;
 		if (in_response)
		{
			if (!CNDverb(142)) break p000e0728;
 		}
		if (!CNDnoteq(34,255)) break p000e0728;
		if (!CNDnoteq(51,255)) break p000e0728;
		if (!CNDonotzero(getFlag(51),3)) break p000e0728;
		if (!CNDpresent(getFlag(51))) break p000e0728;
 		ACCwriteln(689);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PREGUNTA _
	p000e0729:
	{
 		if (skipdoall('p000e0729')) break p000e0729;
 		if (in_response)
		{
			if (!CNDverb(142)) break p000e0729;
 		}
		if (!CNDnoteq(34,255)) break p000e0729;
		if (!CNDnoteq(51,255)) break p000e0729;
		if (!CNDonotzero(getFlag(51),3)) break p000e0729;
		if (!CNDabsent(getFlag(51))) break p000e0729;
 		ACCwriteln(690);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PREGUNTA _
	p000e0730:
	{
 		if (skipdoall('p000e0730')) break p000e0730;
 		if (in_response)
		{
			if (!CNDverb(142)) break p000e0730;
 		}
		if (!CNDnoteq(34,255)) break p000e0730;
		if (!CNDeq(51,255)) break p000e0730;
 		ACCwriteln(691);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PREGUNTA _
	p000e0731:
	{
 		if (skipdoall('p000e0731')) break p000e0731;
 		if (in_response)
		{
			if (!CNDverb(142)) break p000e0731;
 		}
		if (!CNDnoteq(51,255)) break p000e0731;
		if (!CNDpresent(getFlag(51))) break p000e0731;
 		ACCwriteln(692);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PREGUNTA _
	p000e0732:
	{
 		if (skipdoall('p000e0732')) break p000e0732;
 		if (in_response)
		{
			if (!CNDverb(142)) break p000e0732;
 		}
		if (!CNDnoteq(51,255)) break p000e0732;
		if (!CNDabsent(getFlag(51))) break p000e0732;
 		ACCwriteln(693);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PRESIONA _
	p000e0733:
	{
 		if (skipdoall('p000e0733')) break p000e0733;
 		if (in_response)
		{
			if (!CNDverb(119)) break p000e0733;
 		}
		if (!CNDeq(34,255)) break p000e0733;
		if (!CNDbnotzero(12,1)) break p000e0733;
 		ACCwriteln(694);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PRESIONA _
	p000e0734:
	{
 		if (skipdoall('p000e0734')) break p000e0734;
 		if (in_response)
		{
			if (!CNDverb(119)) break p000e0734;
 		}
		if (!CNDeq(34,255)) break p000e0734;
		if (!CNDbzero(12,1)) break p000e0734;
 		ACCwriteln(695);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PRESIONA _
	p000e0735:
	{
 		if (skipdoall('p000e0735')) break p000e0735;
 		if (in_response)
		{
			if (!CNDverb(119)) break p000e0735;
 		}
		if (!CNDnoteq(34,255)) break p000e0735;
		if (!CNDnoteq(51,255)) break p000e0735;
		if (!CNDonotzero(getFlag(51),3)) break p000e0735;
		if (!CNDpresent(getFlag(51))) break p000e0735;
 		ACCwriteln(696);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PRESIONA _
	p000e0736:
	{
 		if (skipdoall('p000e0736')) break p000e0736;
 		if (in_response)
		{
			if (!CNDverb(119)) break p000e0736;
 		}
		if (!CNDnoteq(34,255)) break p000e0736;
		if (!CNDnoteq(51,255)) break p000e0736;
		if (!CNDonotzero(getFlag(51),3)) break p000e0736;
		if (!CNDabsent(getFlag(51))) break p000e0736;
 		ACCwriteln(697);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PRESIONA _
	p000e0737:
	{
 		if (skipdoall('p000e0737')) break p000e0737;
 		if (in_response)
		{
			if (!CNDverb(119)) break p000e0737;
 		}
		if (!CNDnoteq(34,255)) break p000e0737;
		if (!CNDeq(51,255)) break p000e0737;
 		ACCwriteln(698);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PRESIONA _
	p000e0738:
	{
 		if (skipdoall('p000e0738')) break p000e0738;
 		if (in_response)
		{
			if (!CNDverb(119)) break p000e0738;
 		}
		if (!CNDnoteq(51,255)) break p000e0738;
		if (!CNDpresent(getFlag(51))) break p000e0738;
 		ACCwriteln(699);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PRESIONA _
	p000e0739:
	{
 		if (skipdoall('p000e0739')) break p000e0739;
 		if (in_response)
		{
			if (!CNDverb(119)) break p000e0739;
 		}
		if (!CNDnoteq(51,255)) break p000e0739;
		if (!CNDabsent(getFlag(51))) break p000e0739;
 		ACCwriteln(700);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// QUEBRAR _
	p000e0740:
	{
 		if (skipdoall('p000e0740')) break p000e0740;
 		if (in_response)
		{
			if (!CNDverb(153)) break p000e0740;
 		}
		if (!CNDeq(34,255)) break p000e0740;
		if (!CNDbnotzero(12,1)) break p000e0740;
 		ACCwriteln(701);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// QUEBRAR _
	p000e0741:
	{
 		if (skipdoall('p000e0741')) break p000e0741;
 		if (in_response)
		{
			if (!CNDverb(153)) break p000e0741;
 		}
		if (!CNDeq(34,255)) break p000e0741;
		if (!CNDbzero(12,1)) break p000e0741;
 		ACCwriteln(702);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// QUEBRAR _
	p000e0742:
	{
 		if (skipdoall('p000e0742')) break p000e0742;
 		if (in_response)
		{
			if (!CNDverb(153)) break p000e0742;
 		}
		if (!CNDnoteq(34,255)) break p000e0742;
		if (!CNDnoteq(51,255)) break p000e0742;
		if (!CNDonotzero(getFlag(51),3)) break p000e0742;
		if (!CNDpresent(getFlag(51))) break p000e0742;
 		ACCwriteln(703);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// QUEBRAR _
	p000e0743:
	{
 		if (skipdoall('p000e0743')) break p000e0743;
 		if (in_response)
		{
			if (!CNDverb(153)) break p000e0743;
 		}
		if (!CNDnoteq(34,255)) break p000e0743;
		if (!CNDnoteq(51,255)) break p000e0743;
		if (!CNDonotzero(getFlag(51),3)) break p000e0743;
		if (!CNDabsent(getFlag(51))) break p000e0743;
 		ACCwriteln(704);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// QUEBRAR _
	p000e0744:
	{
 		if (skipdoall('p000e0744')) break p000e0744;
 		if (in_response)
		{
			if (!CNDverb(153)) break p000e0744;
 		}
		if (!CNDnoteq(34,255)) break p000e0744;
		if (!CNDeq(51,255)) break p000e0744;
 		ACCwriteln(705);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// QUEBRAR _
	p000e0745:
	{
 		if (skipdoall('p000e0745')) break p000e0745;
 		if (in_response)
		{
			if (!CNDverb(153)) break p000e0745;
 		}
		if (!CNDnoteq(51,255)) break p000e0745;
		if (!CNDpresent(getFlag(51))) break p000e0745;
 		ACCwriteln(706);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// QUEBRAR _
	p000e0746:
	{
 		if (skipdoall('p000e0746')) break p000e0746;
 		if (in_response)
		{
			if (!CNDverb(153)) break p000e0746;
 		}
		if (!CNDnoteq(51,255)) break p000e0746;
		if (!CNDabsent(getFlag(51))) break p000e0746;
 		ACCwriteln(707);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INCENDIA _
	p000e0747:
	{
 		if (skipdoall('p000e0747')) break p000e0747;
 		if (in_response)
		{
			if (!CNDverb(66)) break p000e0747;
 		}
		if (!CNDeq(34,255)) break p000e0747;
		if (!CNDbnotzero(12,1)) break p000e0747;
 		ACCwriteln(708);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INCENDIA _
	p000e0748:
	{
 		if (skipdoall('p000e0748')) break p000e0748;
 		if (in_response)
		{
			if (!CNDverb(66)) break p000e0748;
 		}
		if (!CNDeq(34,255)) break p000e0748;
		if (!CNDbzero(12,1)) break p000e0748;
 		ACCwriteln(709);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INCENDIA _
	p000e0749:
	{
 		if (skipdoall('p000e0749')) break p000e0749;
 		if (in_response)
		{
			if (!CNDverb(66)) break p000e0749;
 		}
		if (!CNDnoteq(34,255)) break p000e0749;
		if (!CNDnoteq(51,255)) break p000e0749;
		if (!CNDonotzero(getFlag(51),3)) break p000e0749;
		if (!CNDpresent(getFlag(51))) break p000e0749;
 		ACCwriteln(710);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INCENDIA _
	p000e0750:
	{
 		if (skipdoall('p000e0750')) break p000e0750;
 		if (in_response)
		{
			if (!CNDverb(66)) break p000e0750;
 		}
		if (!CNDnoteq(34,255)) break p000e0750;
		if (!CNDnoteq(51,255)) break p000e0750;
		if (!CNDonotzero(getFlag(51),3)) break p000e0750;
		if (!CNDabsent(getFlag(51))) break p000e0750;
 		ACCwriteln(711);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INCENDIA _
	p000e0751:
	{
 		if (skipdoall('p000e0751')) break p000e0751;
 		if (in_response)
		{
			if (!CNDverb(66)) break p000e0751;
 		}
		if (!CNDnoteq(34,255)) break p000e0751;
		if (!CNDeq(51,255)) break p000e0751;
 		ACCwriteln(712);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INCENDIA _
	p000e0752:
	{
 		if (skipdoall('p000e0752')) break p000e0752;
 		if (in_response)
		{
			if (!CNDverb(66)) break p000e0752;
 		}
		if (!CNDnoteq(51,255)) break p000e0752;
		if (!CNDpresent(getFlag(51))) break p000e0752;
 		ACCwriteln(713);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INCENDIA _
	p000e0753:
	{
 		if (skipdoall('p000e0753')) break p000e0753;
 		if (in_response)
		{
			if (!CNDverb(66)) break p000e0753;
 		}
		if (!CNDnoteq(51,255)) break p000e0753;
		if (!CNDabsent(getFlag(51))) break p000e0753;
 		ACCwriteln(714);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESVESTIR _
	p000e0754:
	{
 		if (skipdoall('p000e0754')) break p000e0754;
 		if (in_response)
		{
			if (!CNDverb(22)) break p000e0754;
 		}
		if (!CNDeq(34,255)) break p000e0754;
		if (!CNDbnotzero(12,1)) break p000e0754;
 		ACCwriteln(715);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESVESTIR _
	p000e0755:
	{
 		if (skipdoall('p000e0755')) break p000e0755;
 		if (in_response)
		{
			if (!CNDverb(22)) break p000e0755;
 		}
		if (!CNDeq(34,255)) break p000e0755;
		if (!CNDbzero(12,1)) break p000e0755;
 		ACCwriteln(716);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESVESTIR _
	p000e0756:
	{
 		if (skipdoall('p000e0756')) break p000e0756;
 		if (in_response)
		{
			if (!CNDverb(22)) break p000e0756;
 		}
 		ACCautor();
		if (!success) break pro000_restart;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASCA _
	p000e0757:
	{
 		if (skipdoall('p000e0757')) break p000e0757;
 		if (in_response)
		{
			if (!CNDverb(102)) break p000e0757;
 		}
		if (!CNDeq(34,255)) break p000e0757;
		if (!CNDbnotzero(12,1)) break p000e0757;
 		ACCwriteln(717);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASCA _
	p000e0758:
	{
 		if (skipdoall('p000e0758')) break p000e0758;
 		if (in_response)
		{
			if (!CNDverb(102)) break p000e0758;
 		}
		if (!CNDeq(34,255)) break p000e0758;
		if (!CNDbzero(12,1)) break p000e0758;
 		ACCwriteln(718);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASCA _
	p000e0759:
	{
 		if (skipdoall('p000e0759')) break p000e0759;
 		if (in_response)
		{
			if (!CNDverb(102)) break p000e0759;
 		}
		if (!CNDnoteq(34,255)) break p000e0759;
		if (!CNDnoteq(51,255)) break p000e0759;
		if (!CNDonotzero(getFlag(51),3)) break p000e0759;
		if (!CNDpresent(getFlag(51))) break p000e0759;
 		ACCwriteln(719);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASCA _
	p000e0760:
	{
 		if (skipdoall('p000e0760')) break p000e0760;
 		if (in_response)
		{
			if (!CNDverb(102)) break p000e0760;
 		}
		if (!CNDnoteq(34,255)) break p000e0760;
		if (!CNDnoteq(51,255)) break p000e0760;
		if (!CNDonotzero(getFlag(51),3)) break p000e0760;
		if (!CNDabsent(getFlag(51))) break p000e0760;
 		ACCwriteln(720);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASCA _
	p000e0761:
	{
 		if (skipdoall('p000e0761')) break p000e0761;
 		if (in_response)
		{
			if (!CNDverb(102)) break p000e0761;
 		}
		if (!CNDnoteq(34,255)) break p000e0761;
		if (!CNDeq(51,255)) break p000e0761;
 		ACCwriteln(721);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASCA _
	p000e0762:
	{
 		if (skipdoall('p000e0762')) break p000e0762;
 		if (in_response)
		{
			if (!CNDverb(102)) break p000e0762;
 		}
		if (!CNDnoteq(51,255)) break p000e0762;
		if (!CNDpresent(getFlag(51))) break p000e0762;
 		ACCwriteln(722);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASCA _
	p000e0763:
	{
 		if (skipdoall('p000e0763')) break p000e0763;
 		if (in_response)
		{
			if (!CNDverb(102)) break p000e0763;
 		}
		if (!CNDnoteq(51,255)) break p000e0763;
		if (!CNDabsent(getFlag(51))) break p000e0763;
 		ACCwriteln(723);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASGA _
	p000e0764:
	{
 		if (skipdoall('p000e0764')) break p000e0764;
 		if (in_response)
		{
			if (!CNDverb(134)) break p000e0764;
 		}
		if (!CNDeq(34,255)) break p000e0764;
		if (!CNDbnotzero(12,1)) break p000e0764;
 		ACCwriteln(724);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASGA _
	p000e0765:
	{
 		if (skipdoall('p000e0765')) break p000e0765;
 		if (in_response)
		{
			if (!CNDverb(134)) break p000e0765;
 		}
		if (!CNDeq(34,255)) break p000e0765;
		if (!CNDbzero(12,1)) break p000e0765;
 		ACCwriteln(725);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASGA _
	p000e0766:
	{
 		if (skipdoall('p000e0766')) break p000e0766;
 		if (in_response)
		{
			if (!CNDverb(134)) break p000e0766;
 		}
		if (!CNDnoteq(34,255)) break p000e0766;
		if (!CNDnoteq(51,255)) break p000e0766;
		if (!CNDonotzero(getFlag(51),3)) break p000e0766;
		if (!CNDpresent(getFlag(51))) break p000e0766;
 		ACCwriteln(726);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASGA _
	p000e0767:
	{
 		if (skipdoall('p000e0767')) break p000e0767;
 		if (in_response)
		{
			if (!CNDverb(134)) break p000e0767;
 		}
		if (!CNDnoteq(34,255)) break p000e0767;
		if (!CNDnoteq(51,255)) break p000e0767;
		if (!CNDonotzero(getFlag(51),3)) break p000e0767;
		if (!CNDabsent(getFlag(51))) break p000e0767;
 		ACCwriteln(727);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASGA _
	p000e0768:
	{
 		if (skipdoall('p000e0768')) break p000e0768;
 		if (in_response)
		{
			if (!CNDverb(134)) break p000e0768;
 		}
		if (!CNDnoteq(34,255)) break p000e0768;
		if (!CNDeq(51,255)) break p000e0768;
 		ACCwriteln(728);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASGA _
	p000e0769:
	{
 		if (skipdoall('p000e0769')) break p000e0769;
 		if (in_response)
		{
			if (!CNDverb(134)) break p000e0769;
 		}
		if (!CNDnoteq(51,255)) break p000e0769;
		if (!CNDpresent(getFlag(51))) break p000e0769;
 		ACCwriteln(729);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASGA _
	p000e0770:
	{
 		if (skipdoall('p000e0770')) break p000e0770;
 		if (in_response)
		{
			if (!CNDverb(134)) break p000e0770;
 		}
		if (!CNDnoteq(51,255)) break p000e0770;
		if (!CNDabsent(getFlag(51))) break p000e0770;
 		ACCwriteln(730);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASPA _
	p000e0771:
	{
 		if (skipdoall('p000e0771')) break p000e0771;
 		if (in_response)
		{
			if (!CNDverb(143)) break p000e0771;
 		}
		if (!CNDeq(34,255)) break p000e0771;
		if (!CNDbnotzero(12,1)) break p000e0771;
 		ACCwriteln(731);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASPA _
	p000e0772:
	{
 		if (skipdoall('p000e0772')) break p000e0772;
 		if (in_response)
		{
			if (!CNDverb(143)) break p000e0772;
 		}
		if (!CNDeq(34,255)) break p000e0772;
		if (!CNDbzero(12,1)) break p000e0772;
 		ACCwriteln(732);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASPA _
	p000e0773:
	{
 		if (skipdoall('p000e0773')) break p000e0773;
 		if (in_response)
		{
			if (!CNDverb(143)) break p000e0773;
 		}
		if (!CNDnoteq(34,255)) break p000e0773;
		if (!CNDnoteq(51,255)) break p000e0773;
		if (!CNDonotzero(getFlag(51),3)) break p000e0773;
		if (!CNDpresent(getFlag(51))) break p000e0773;
 		ACCwriteln(733);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASPA _
	p000e0774:
	{
 		if (skipdoall('p000e0774')) break p000e0774;
 		if (in_response)
		{
			if (!CNDverb(143)) break p000e0774;
 		}
		if (!CNDnoteq(34,255)) break p000e0774;
		if (!CNDnoteq(51,255)) break p000e0774;
		if (!CNDonotzero(getFlag(51),3)) break p000e0774;
		if (!CNDabsent(getFlag(51))) break p000e0774;
 		ACCwriteln(734);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASPA _
	p000e0775:
	{
 		if (skipdoall('p000e0775')) break p000e0775;
 		if (in_response)
		{
			if (!CNDverb(143)) break p000e0775;
 		}
		if (!CNDnoteq(34,255)) break p000e0775;
		if (!CNDeq(51,255)) break p000e0775;
 		ACCwriteln(735);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASPA _
	p000e0776:
	{
 		if (skipdoall('p000e0776')) break p000e0776;
 		if (in_response)
		{
			if (!CNDverb(143)) break p000e0776;
 		}
		if (!CNDnoteq(51,255)) break p000e0776;
		if (!CNDpresent(getFlag(51))) break p000e0776;
 		ACCwriteln(736);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASPA _
	p000e0777:
	{
 		if (skipdoall('p000e0777')) break p000e0777;
 		if (in_response)
		{
			if (!CNDverb(143)) break p000e0777;
 		}
		if (!CNDnoteq(51,255)) break p000e0777;
		if (!CNDabsent(getFlag(51))) break p000e0777;
 		ACCwriteln(737);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RECARGA _
	p000e0778:
	{
 		if (skipdoall('p000e0778')) break p000e0778;
 		if (in_response)
		{
			if (!CNDverb(158)) break p000e0778;
 		}
		if (!CNDeq(34,255)) break p000e0778;
		if (!CNDbnotzero(12,1)) break p000e0778;
 		ACCwriteln(738);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RECARGA _
	p000e0779:
	{
 		if (skipdoall('p000e0779')) break p000e0779;
 		if (in_response)
		{
			if (!CNDverb(158)) break p000e0779;
 		}
		if (!CNDeq(34,255)) break p000e0779;
		if (!CNDbzero(12,1)) break p000e0779;
 		ACCwriteln(739);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RECARGA _
	p000e0780:
	{
 		if (skipdoall('p000e0780')) break p000e0780;
 		if (in_response)
		{
			if (!CNDverb(158)) break p000e0780;
 		}
		if (!CNDnoteq(34,255)) break p000e0780;
		if (!CNDnoteq(51,255)) break p000e0780;
		if (!CNDonotzero(getFlag(51),3)) break p000e0780;
		if (!CNDpresent(getFlag(51))) break p000e0780;
 		ACCwriteln(740);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RECARGA _
	p000e0781:
	{
 		if (skipdoall('p000e0781')) break p000e0781;
 		if (in_response)
		{
			if (!CNDverb(158)) break p000e0781;
 		}
		if (!CNDnoteq(34,255)) break p000e0781;
		if (!CNDnoteq(51,255)) break p000e0781;
		if (!CNDonotzero(getFlag(51),3)) break p000e0781;
		if (!CNDabsent(getFlag(51))) break p000e0781;
 		ACCwriteln(741);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RECARGA _
	p000e0782:
	{
 		if (skipdoall('p000e0782')) break p000e0782;
 		if (in_response)
		{
			if (!CNDverb(158)) break p000e0782;
 		}
		if (!CNDnoteq(34,255)) break p000e0782;
		if (!CNDeq(51,255)) break p000e0782;
 		ACCwriteln(742);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RECARGA _
	p000e0783:
	{
 		if (skipdoall('p000e0783')) break p000e0783;
 		if (in_response)
		{
			if (!CNDverb(158)) break p000e0783;
 		}
		if (!CNDnoteq(51,255)) break p000e0783;
		if (!CNDpresent(getFlag(51))) break p000e0783;
 		ACCwriteln(743);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RECARGA _
	p000e0784:
	{
 		if (skipdoall('p000e0784')) break p000e0784;
 		if (in_response)
		{
			if (!CNDverb(158)) break p000e0784;
 		}
		if (!CNDnoteq(51,255)) break p000e0784;
		if (!CNDabsent(getFlag(51))) break p000e0784;
 		ACCwriteln(744);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RELLENA _
	p000e0785:
	{
 		if (skipdoall('p000e0785')) break p000e0785;
 		if (in_response)
		{
			if (!CNDverb(135)) break p000e0785;
 		}
		if (!CNDeq(34,255)) break p000e0785;
		if (!CNDbnotzero(12,1)) break p000e0785;
 		ACCwriteln(745);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RELLENA _
	p000e0786:
	{
 		if (skipdoall('p000e0786')) break p000e0786;
 		if (in_response)
		{
			if (!CNDverb(135)) break p000e0786;
 		}
		if (!CNDeq(34,255)) break p000e0786;
		if (!CNDbzero(12,1)) break p000e0786;
 		ACCwriteln(746);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RELLENA _
	p000e0787:
	{
 		if (skipdoall('p000e0787')) break p000e0787;
 		if (in_response)
		{
			if (!CNDverb(135)) break p000e0787;
 		}
		if (!CNDnoteq(34,255)) break p000e0787;
		if (!CNDnoteq(51,255)) break p000e0787;
		if (!CNDonotzero(getFlag(51),3)) break p000e0787;
		if (!CNDpresent(getFlag(51))) break p000e0787;
 		ACCwriteln(747);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RELLENA _
	p000e0788:
	{
 		if (skipdoall('p000e0788')) break p000e0788;
 		if (in_response)
		{
			if (!CNDverb(135)) break p000e0788;
 		}
		if (!CNDnoteq(34,255)) break p000e0788;
		if (!CNDnoteq(51,255)) break p000e0788;
		if (!CNDonotzero(getFlag(51),3)) break p000e0788;
		if (!CNDabsent(getFlag(51))) break p000e0788;
 		ACCwriteln(748);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RELLENA _
	p000e0789:
	{
 		if (skipdoall('p000e0789')) break p000e0789;
 		if (in_response)
		{
			if (!CNDverb(135)) break p000e0789;
 		}
		if (!CNDnoteq(34,255)) break p000e0789;
		if (!CNDeq(51,255)) break p000e0789;
 		ACCwriteln(749);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RELLENA _
	p000e0790:
	{
 		if (skipdoall('p000e0790')) break p000e0790;
 		if (in_response)
		{
			if (!CNDverb(135)) break p000e0790;
 		}
		if (!CNDnoteq(51,255)) break p000e0790;
		if (!CNDpresent(getFlag(51))) break p000e0790;
		if (!CNDonotzero(getFlag(51),2)) break p000e0790;
 		ACCwriteln(750);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RELLENA _
	p000e0791:
	{
 		if (skipdoall('p000e0791')) break p000e0791;
 		if (in_response)
		{
			if (!CNDverb(135)) break p000e0791;
 		}
		if (!CNDnoteq(51,255)) break p000e0791;
		if (!CNDpresent(getFlag(51))) break p000e0791;
 		ACCwriteln(751);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RELLENA _
	p000e0792:
	{
 		if (skipdoall('p000e0792')) break p000e0792;
 		if (in_response)
		{
			if (!CNDverb(135)) break p000e0792;
 		}
		if (!CNDnoteq(51,255)) break p000e0792;
		if (!CNDabsent(getFlag(51))) break p000e0792;
 		ACCwriteln(752);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// REMOVER _
	p000e0793:
	{
 		if (skipdoall('p000e0793')) break p000e0793;
 		if (in_response)
		{
			if (!CNDverb(130)) break p000e0793;
 		}
		if (!CNDeq(34,255)) break p000e0793;
		if (!CNDbnotzero(12,1)) break p000e0793;
 		ACCwriteln(753);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// REMOVER _
	p000e0794:
	{
 		if (skipdoall('p000e0794')) break p000e0794;
 		if (in_response)
		{
			if (!CNDverb(130)) break p000e0794;
 		}
		if (!CNDeq(34,255)) break p000e0794;
		if (!CNDbzero(12,1)) break p000e0794;
 		ACCwriteln(754);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// REMOVER _
	p000e0795:
	{
 		if (skipdoall('p000e0795')) break p000e0795;
 		if (in_response)
		{
			if (!CNDverb(130)) break p000e0795;
 		}
		if (!CNDnoteq(34,255)) break p000e0795;
		if (!CNDnoteq(51,255)) break p000e0795;
		if (!CNDonotzero(getFlag(51),3)) break p000e0795;
		if (!CNDpresent(getFlag(51))) break p000e0795;
 		ACCwriteln(755);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// REMOVER _
	p000e0796:
	{
 		if (skipdoall('p000e0796')) break p000e0796;
 		if (in_response)
		{
			if (!CNDverb(130)) break p000e0796;
 		}
		if (!CNDnoteq(34,255)) break p000e0796;
		if (!CNDnoteq(51,255)) break p000e0796;
		if (!CNDonotzero(getFlag(51),3)) break p000e0796;
		if (!CNDabsent(getFlag(51))) break p000e0796;
 		ACCwriteln(756);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// REMOVER _
	p000e0797:
	{
 		if (skipdoall('p000e0797')) break p000e0797;
 		if (in_response)
		{
			if (!CNDverb(130)) break p000e0797;
 		}
		if (!CNDnoteq(34,255)) break p000e0797;
		if (!CNDeq(51,255)) break p000e0797;
 		ACCwriteln(757);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// REMOVER _
	p000e0798:
	{
 		if (skipdoall('p000e0798')) break p000e0798;
 		if (in_response)
		{
			if (!CNDverb(130)) break p000e0798;
 		}
		if (!CNDnoteq(51,255)) break p000e0798;
		if (!CNDpresent(getFlag(51))) break p000e0798;
 		ACCwriteln(758);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// REMOVER _
	p000e0799:
	{
 		if (skipdoall('p000e0799')) break p000e0799;
 		if (in_response)
		{
			if (!CNDverb(130)) break p000e0799;
 		}
		if (!CNDnoteq(51,255)) break p000e0799;
		if (!CNDabsent(getFlag(51))) break p000e0799;
 		ACCwriteln(759);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RETORCER _
	p000e0800:
	{
 		if (skipdoall('p000e0800')) break p000e0800;
 		if (in_response)
		{
			if (!CNDverb(58)) break p000e0800;
 		}
		if (!CNDeq(34,255)) break p000e0800;
		if (!CNDbnotzero(12,1)) break p000e0800;
 		ACCwriteln(760);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RETORCER _
	p000e0801:
	{
 		if (skipdoall('p000e0801')) break p000e0801;
 		if (in_response)
		{
			if (!CNDverb(58)) break p000e0801;
 		}
		if (!CNDeq(34,255)) break p000e0801;
		if (!CNDbzero(12,1)) break p000e0801;
 		ACCwriteln(761);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RETORCER _
	p000e0802:
	{
 		if (skipdoall('p000e0802')) break p000e0802;
 		if (in_response)
		{
			if (!CNDverb(58)) break p000e0802;
 		}
		if (!CNDnoteq(34,255)) break p000e0802;
		if (!CNDnoteq(51,255)) break p000e0802;
		if (!CNDonotzero(getFlag(51),3)) break p000e0802;
		if (!CNDpresent(getFlag(51))) break p000e0802;
 		ACCwriteln(762);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RETORCER _
	p000e0803:
	{
 		if (skipdoall('p000e0803')) break p000e0803;
 		if (in_response)
		{
			if (!CNDverb(58)) break p000e0803;
 		}
		if (!CNDnoteq(34,255)) break p000e0803;
		if (!CNDnoteq(51,255)) break p000e0803;
		if (!CNDonotzero(getFlag(51),3)) break p000e0803;
		if (!CNDabsent(getFlag(51))) break p000e0803;
 		ACCwriteln(763);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RETORCER _
	p000e0804:
	{
 		if (skipdoall('p000e0804')) break p000e0804;
 		if (in_response)
		{
			if (!CNDverb(58)) break p000e0804;
 		}
		if (!CNDnoteq(34,255)) break p000e0804;
		if (!CNDeq(51,255)) break p000e0804;
 		ACCwriteln(764);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RETORCER _
	p000e0805:
	{
 		if (skipdoall('p000e0805')) break p000e0805;
 		if (in_response)
		{
			if (!CNDverb(58)) break p000e0805;
 		}
		if (!CNDnoteq(51,255)) break p000e0805;
		if (!CNDpresent(getFlag(51))) break p000e0805;
 		ACCwriteln(765);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RETORCER _
	p000e0806:
	{
 		if (skipdoall('p000e0806')) break p000e0806;
 		if (in_response)
		{
			if (!CNDverb(58)) break p000e0806;
 		}
		if (!CNDnoteq(51,255)) break p000e0806;
		if (!CNDabsent(getFlag(51))) break p000e0806;
 		ACCwriteln(766);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// REUNE _
	p000e0807:
	{
 		if (skipdoall('p000e0807')) break p000e0807;
 		if (in_response)
		{
			if (!CNDverb(141)) break p000e0807;
 		}
		if (!CNDeq(34,255)) break p000e0807;
		if (!CNDbnotzero(12,1)) break p000e0807;
 		ACCwriteln(767);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// REUNE _
	p000e0808:
	{
 		if (skipdoall('p000e0808')) break p000e0808;
 		if (in_response)
		{
			if (!CNDverb(141)) break p000e0808;
 		}
		if (!CNDeq(34,255)) break p000e0808;
		if (!CNDbzero(12,1)) break p000e0808;
 		ACCwriteln(768);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// REUNE _
	p000e0809:
	{
 		if (skipdoall('p000e0809')) break p000e0809;
 		if (in_response)
		{
			if (!CNDverb(141)) break p000e0809;
 		}
		if (!CNDnoteq(34,255)) break p000e0809;
		if (!CNDnoteq(51,255)) break p000e0809;
		if (!CNDonotzero(getFlag(51),3)) break p000e0809;
		if (!CNDpresent(getFlag(51))) break p000e0809;
 		ACCwriteln(769);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// REUNE _
	p000e0810:
	{
 		if (skipdoall('p000e0810')) break p000e0810;
 		if (in_response)
		{
			if (!CNDverb(141)) break p000e0810;
 		}
		if (!CNDnoteq(34,255)) break p000e0810;
		if (!CNDnoteq(51,255)) break p000e0810;
		if (!CNDonotzero(getFlag(51),3)) break p000e0810;
		if (!CNDabsent(getFlag(51))) break p000e0810;
 		ACCwriteln(770);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// REUNE _
	p000e0811:
	{
 		if (skipdoall('p000e0811')) break p000e0811;
 		if (in_response)
		{
			if (!CNDverb(141)) break p000e0811;
 		}
		if (!CNDnoteq(34,255)) break p000e0811;
		if (!CNDeq(51,255)) break p000e0811;
 		ACCwriteln(771);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// REUNE _
	p000e0812:
	{
 		if (skipdoall('p000e0812')) break p000e0812;
 		if (in_response)
		{
			if (!CNDverb(141)) break p000e0812;
 		}
		if (!CNDnoteq(51,255)) break p000e0812;
		if (!CNDpresent(getFlag(51))) break p000e0812;
 		ACCwriteln(772);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// REUNE _
	p000e0813:
	{
 		if (skipdoall('p000e0813')) break p000e0813;
 		if (in_response)
		{
			if (!CNDverb(141)) break p000e0813;
 		}
		if (!CNDnoteq(51,255)) break p000e0813;
		if (!CNDabsent(getFlag(51))) break p000e0813;
 		ACCwriteln(773);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// REVISA _
	p000e0814:
	{
 		if (skipdoall('p000e0814')) break p000e0814;
 		if (in_response)
		{
			if (!CNDverb(120)) break p000e0814;
 		}
		if (!CNDeq(34,255)) break p000e0814;
		if (!CNDbnotzero(12,1)) break p000e0814;
 		ACCwriteln(774);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// REVISA _
	p000e0815:
	{
 		if (skipdoall('p000e0815')) break p000e0815;
 		if (in_response)
		{
			if (!CNDverb(120)) break p000e0815;
 		}
		if (!CNDeq(34,255)) break p000e0815;
		if (!CNDbzero(12,1)) break p000e0815;
 		ACCwriteln(775);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// REVISA _
	p000e0816:
	{
 		if (skipdoall('p000e0816')) break p000e0816;
 		if (in_response)
		{
			if (!CNDverb(120)) break p000e0816;
 		}
		if (!CNDnoteq(34,255)) break p000e0816;
		if (!CNDnoteq(51,255)) break p000e0816;
		if (!CNDonotzero(getFlag(51),3)) break p000e0816;
		if (!CNDpresent(getFlag(51))) break p000e0816;
 		ACCwriteln(776);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// REVISA _
	p000e0817:
	{
 		if (skipdoall('p000e0817')) break p000e0817;
 		if (in_response)
		{
			if (!CNDverb(120)) break p000e0817;
 		}
		if (!CNDnoteq(34,255)) break p000e0817;
		if (!CNDnoteq(51,255)) break p000e0817;
		if (!CNDonotzero(getFlag(51),3)) break p000e0817;
		if (!CNDabsent(getFlag(51))) break p000e0817;
 		ACCwriteln(777);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// REVISA _
	p000e0818:
	{
 		if (skipdoall('p000e0818')) break p000e0818;
 		if (in_response)
		{
			if (!CNDverb(120)) break p000e0818;
 		}
		if (!CNDnoteq(34,255)) break p000e0818;
		if (!CNDeq(51,255)) break p000e0818;
 		ACCwriteln(778);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// REVISA _
	p000e0819:
	{
 		if (skipdoall('p000e0819')) break p000e0819;
 		if (in_response)
		{
			if (!CNDverb(120)) break p000e0819;
 		}
		if (!CNDnoteq(51,255)) break p000e0819;
		if (!CNDpresent(getFlag(51))) break p000e0819;
 		ACCwriteln(779);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// REVISA _
	p000e0820:
	{
 		if (skipdoall('p000e0820')) break p000e0820;
 		if (in_response)
		{
			if (!CNDverb(120)) break p000e0820;
 		}
		if (!CNDnoteq(51,255)) break p000e0820;
		if (!CNDabsent(getFlag(51))) break p000e0820;
 		ACCwriteln(780);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ROMPE _
	p000e0821:
	{
 		if (skipdoall('p000e0821')) break p000e0821;
 		if (in_response)
		{
			if (!CNDverb(69)) break p000e0821;
 		}
		if (!CNDeq(34,255)) break p000e0821;
		if (!CNDbnotzero(12,1)) break p000e0821;
 		ACCwriteln(781);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ROMPE _
	p000e0822:
	{
 		if (skipdoall('p000e0822')) break p000e0822;
 		if (in_response)
		{
			if (!CNDverb(69)) break p000e0822;
 		}
		if (!CNDeq(34,255)) break p000e0822;
		if (!CNDbzero(12,1)) break p000e0822;
 		ACCwriteln(782);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ROMPE _
	p000e0823:
	{
 		if (skipdoall('p000e0823')) break p000e0823;
 		if (in_response)
		{
			if (!CNDverb(69)) break p000e0823;
 		}
		if (!CNDnoteq(34,255)) break p000e0823;
		if (!CNDnoteq(51,255)) break p000e0823;
		if (!CNDonotzero(getFlag(51),3)) break p000e0823;
		if (!CNDpresent(getFlag(51))) break p000e0823;
 		ACCwriteln(783);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ROMPE _
	p000e0824:
	{
 		if (skipdoall('p000e0824')) break p000e0824;
 		if (in_response)
		{
			if (!CNDverb(69)) break p000e0824;
 		}
		if (!CNDnoteq(34,255)) break p000e0824;
		if (!CNDnoteq(51,255)) break p000e0824;
		if (!CNDonotzero(getFlag(51),3)) break p000e0824;
		if (!CNDabsent(getFlag(51))) break p000e0824;
 		ACCwriteln(784);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ROMPE _
	p000e0825:
	{
 		if (skipdoall('p000e0825')) break p000e0825;
 		if (in_response)
		{
			if (!CNDverb(69)) break p000e0825;
 		}
		if (!CNDnoteq(34,255)) break p000e0825;
		if (!CNDeq(51,255)) break p000e0825;
 		ACCwriteln(785);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ROMPE _
	p000e0826:
	{
 		if (skipdoall('p000e0826')) break p000e0826;
 		if (in_response)
		{
			if (!CNDverb(69)) break p000e0826;
 		}
		if (!CNDnoteq(51,255)) break p000e0826;
		if (!CNDpresent(getFlag(51))) break p000e0826;
 		ACCwriteln(786);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ROMPE _
	p000e0827:
	{
 		if (skipdoall('p000e0827')) break p000e0827;
 		if (in_response)
		{
			if (!CNDverb(69)) break p000e0827;
 		}
		if (!CNDnoteq(51,255)) break p000e0827;
		if (!CNDabsent(getFlag(51))) break p000e0827;
 		ACCwriteln(787);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0828:
	{
 		if (skipdoall('p000e0828')) break p000e0828;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0828;
 		}
 		ACCwhatox2(15);
		{}

	}

	// EXTRAE _
	p000e0829:
	{
 		if (skipdoall('p000e0829')) break p000e0829;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0829;
 		}
		if (!CNDeq(34,255)) break p000e0829;
		if (!CNDbzero(12,1)) break p000e0829;
 		ACCwriteln(788);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0830:
	{
 		if (skipdoall('p000e0830')) break p000e0830;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0830;
 		}
		if (!CNDeq(34,255)) break p000e0830;
		if (!CNDbnotzero(12,1)) break p000e0830;
 		ACCwriteln(789);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0831:
	{
 		if (skipdoall('p000e0831')) break p000e0831;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0831;
 		}
		if (!CNDnoteq(34,255)) break p000e0831;
		if (!CNDeq(51,255)) break p000e0831;
 		ACCwriteln(790);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0832:
	{
 		if (skipdoall('p000e0832')) break p000e0832;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0832;
 		}
		if (!CNDbzero(12,2)) break p000e0832;
		if (!CNDeq(44,255)) break p000e0832;
		if (!CNDbnotzero(12,1)) break p000e0832;
 		ACCwriteln(791);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0833:
	{
 		if (skipdoall('p000e0833')) break p000e0833;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0833;
 		}
		if (!CNDnoteq(51,255)) break p000e0833;
		if (!CNDworn(getFlag(51))) break p000e0833;
		if (!CNDonotzero(getFlag(51),1)) break p000e0833;
 		ACCwriteln(792);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0834:
	{
 		if (skipdoall('p000e0834')) break p000e0834;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0834;
 		}
		if (!CNDnoteq(51,255)) break p000e0834;
		if (!CNDeq(44,255)) break p000e0834;
		if (!CNDbzero(12,1)) break p000e0834;
 		ACCwriteln(793);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0835:
	{
 		if (skipdoall('p000e0835')) break p000e0835;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0835;
 		}
		if (!CNDnoteq(51,255)) break p000e0835;
		if (!CNDcarried(getFlag(51))) break p000e0835;
		if (!CNDeq(44,255)) break p000e0835;
		if (!CNDbnotzero(12,1)) break p000e0835;
 		ACCwriteln(794);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0836:
	{
 		if (skipdoall('p000e0836')) break p000e0836;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0836;
 		}
		if (!CNDeq(15,255)) break p000e0836;
 		ACCwriteln(795);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0837:
	{
 		if (skipdoall('p000e0837')) break p000e0837;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0837;
 		}
		if (!CNDnoteq(15,255)) break p000e0837;
		if (!CNDonotzero(getFlag(15),2)) break p000e0837;
		if (!CNDsame(51,15)) break p000e0837;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0838:
	{
 		if (skipdoall('p000e0838')) break p000e0838;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0838;
 		}
		if (!CNDnoteq(15,255)) break p000e0838;
		if (!CNDozero(getFlag(15),2)) break p000e0838;
 		ACCwriteln(796);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0839:
	{
 		if (skipdoall('p000e0839')) break p000e0839;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0839;
 		}
		if (!CNDnoteq(15,255)) break p000e0839;
		if (!CNDonotzero(getFlag(15),2)) break p000e0839;
		if (!CNDnotcarr(getFlag(15))) break p000e0839;
 		ACCwriteln(797);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0840:
	{
 		if (skipdoall('p000e0840')) break p000e0840;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0840;
 		}
		if (!CNDnoteq(15,255)) break p000e0840;
		if (!CNDonotzero(getFlag(15),2)) break p000e0840;
		if (!CNDcarried(getFlag(15))) break p000e0840;
 		ACCautot(getFlag(15));
		if (!success) break pro000_restart;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SACUDE _
	p000e0841:
	{
 		if (skipdoall('p000e0841')) break p000e0841;
 		if (in_response)
		{
			if (!CNDverb(129)) break p000e0841;
 		}
		if (!CNDeq(34,255)) break p000e0841;
		if (!CNDbnotzero(12,1)) break p000e0841;
 		ACCwriteln(798);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SACUDE _
	p000e0842:
	{
 		if (skipdoall('p000e0842')) break p000e0842;
 		if (in_response)
		{
			if (!CNDverb(129)) break p000e0842;
 		}
		if (!CNDeq(34,255)) break p000e0842;
		if (!CNDbzero(12,1)) break p000e0842;
 		ACCwriteln(799);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SACUDE _
	p000e0843:
	{
 		if (skipdoall('p000e0843')) break p000e0843;
 		if (in_response)
		{
			if (!CNDverb(129)) break p000e0843;
 		}
		if (!CNDnoteq(34,255)) break p000e0843;
		if (!CNDnoteq(51,255)) break p000e0843;
		if (!CNDonotzero(getFlag(51),3)) break p000e0843;
		if (!CNDpresent(getFlag(51))) break p000e0843;
 		ACCwriteln(800);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SACUDE _
	p000e0844:
	{
 		if (skipdoall('p000e0844')) break p000e0844;
 		if (in_response)
		{
			if (!CNDverb(129)) break p000e0844;
 		}
		if (!CNDnoteq(34,255)) break p000e0844;
		if (!CNDnoteq(51,255)) break p000e0844;
		if (!CNDonotzero(getFlag(51),3)) break p000e0844;
		if (!CNDabsent(getFlag(51))) break p000e0844;
 		ACCwriteln(801);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SACUDE _
	p000e0845:
	{
 		if (skipdoall('p000e0845')) break p000e0845;
 		if (in_response)
		{
			if (!CNDverb(129)) break p000e0845;
 		}
		if (!CNDnoteq(34,255)) break p000e0845;
		if (!CNDeq(51,255)) break p000e0845;
 		ACCwriteln(802);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SACUDE _
	p000e0846:
	{
 		if (skipdoall('p000e0846')) break p000e0846;
 		if (in_response)
		{
			if (!CNDverb(129)) break p000e0846;
 		}
		if (!CNDnoteq(51,255)) break p000e0846;
		if (!CNDpresent(getFlag(51))) break p000e0846;
 		ACCwriteln(803);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SACUDE _
	p000e0847:
	{
 		if (skipdoall('p000e0847')) break p000e0847;
 		if (in_response)
		{
			if (!CNDverb(129)) break p000e0847;
 		}
		if (!CNDnoteq(51,255)) break p000e0847;
		if (!CNDabsent(getFlag(51))) break p000e0847;
 		ACCwriteln(804);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SEPARA _
	p000e0848:
	{
 		if (skipdoall('p000e0848')) break p000e0848;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0848;
 		}
		if (!CNDeq(34,255)) break p000e0848;
		if (!CNDbnotzero(12,1)) break p000e0848;
 		ACCwriteln(805);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SEPARA _
	p000e0849:
	{
 		if (skipdoall('p000e0849')) break p000e0849;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0849;
 		}
		if (!CNDeq(34,255)) break p000e0849;
		if (!CNDbzero(12,1)) break p000e0849;
 		ACCwriteln(806);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SEPARA _
	p000e0850:
	{
 		if (skipdoall('p000e0850')) break p000e0850;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0850;
 		}
		if (!CNDnoteq(34,255)) break p000e0850;
		if (!CNDnoteq(51,255)) break p000e0850;
		if (!CNDonotzero(getFlag(51),3)) break p000e0850;
		if (!CNDpresent(getFlag(51))) break p000e0850;
 		ACCwriteln(807);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SEPARA _
	p000e0851:
	{
 		if (skipdoall('p000e0851')) break p000e0851;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0851;
 		}
		if (!CNDnoteq(34,255)) break p000e0851;
		if (!CNDnoteq(51,255)) break p000e0851;
		if (!CNDonotzero(getFlag(51),3)) break p000e0851;
		if (!CNDabsent(getFlag(51))) break p000e0851;
 		ACCwriteln(808);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SEPARA _
	p000e0852:
	{
 		if (skipdoall('p000e0852')) break p000e0852;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0852;
 		}
		if (!CNDnoteq(34,255)) break p000e0852;
		if (!CNDeq(51,255)) break p000e0852;
 		ACCwriteln(809);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SEPARA _
	p000e0853:
	{
 		if (skipdoall('p000e0853')) break p000e0853;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0853;
 		}
		if (!CNDnoteq(51,255)) break p000e0853;
		if (!CNDpresent(getFlag(51))) break p000e0853;
 		ACCwriteln(810);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SEPARA _
	p000e0854:
	{
 		if (skipdoall('p000e0854')) break p000e0854;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0854;
 		}
		if (!CNDnoteq(51,255)) break p000e0854;
		if (!CNDabsent(getFlag(51))) break p000e0854;
 		ACCwriteln(811);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTINGUE _
	p000e0855:
	{
 		if (skipdoall('p000e0855')) break p000e0855;
 		if (in_response)
		{
			if (!CNDverb(67)) break p000e0855;
 		}
		if (!CNDeq(34,255)) break p000e0855;
		if (!CNDbnotzero(12,1)) break p000e0855;
 		ACCwriteln(812);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTINGUE _
	p000e0856:
	{
 		if (skipdoall('p000e0856')) break p000e0856;
 		if (in_response)
		{
			if (!CNDverb(67)) break p000e0856;
 		}
		if (!CNDeq(34,255)) break p000e0856;
		if (!CNDbzero(12,1)) break p000e0856;
 		ACCwriteln(813);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTINGUE _
	p000e0857:
	{
 		if (skipdoall('p000e0857')) break p000e0857;
 		if (in_response)
		{
			if (!CNDverb(67)) break p000e0857;
 		}
		if (!CNDnoteq(34,255)) break p000e0857;
		if (!CNDnoteq(51,255)) break p000e0857;
		if (!CNDonotzero(getFlag(51),3)) break p000e0857;
		if (!CNDpresent(getFlag(51))) break p000e0857;
 		ACCwriteln(814);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTINGUE _
	p000e0858:
	{
 		if (skipdoall('p000e0858')) break p000e0858;
 		if (in_response)
		{
			if (!CNDverb(67)) break p000e0858;
 		}
		if (!CNDnoteq(34,255)) break p000e0858;
		if (!CNDnoteq(51,255)) break p000e0858;
		if (!CNDonotzero(getFlag(51),3)) break p000e0858;
		if (!CNDabsent(getFlag(51))) break p000e0858;
 		ACCwriteln(815);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTINGUE _
	p000e0859:
	{
 		if (skipdoall('p000e0859')) break p000e0859;
 		if (in_response)
		{
			if (!CNDverb(67)) break p000e0859;
 		}
		if (!CNDnoteq(34,255)) break p000e0859;
		if (!CNDeq(51,255)) break p000e0859;
 		ACCwriteln(816);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTINGUE _
	p000e0860:
	{
 		if (skipdoall('p000e0860')) break p000e0860;
 		if (in_response)
		{
			if (!CNDverb(67)) break p000e0860;
 		}
		if (!CNDnoteq(51,255)) break p000e0860;
		if (!CNDpresent(getFlag(51))) break p000e0860;
 		ACCwriteln(817);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTINGUE _
	p000e0861:
	{
 		if (skipdoall('p000e0861')) break p000e0861;
 		if (in_response)
		{
			if (!CNDverb(67)) break p000e0861;
 		}
		if (!CNDnoteq(51,255)) break p000e0861;
		if (!CNDabsent(getFlag(51))) break p000e0861;
 		ACCwriteln(818);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SOPLA _
	p000e0862:
	{
 		if (skipdoall('p000e0862')) break p000e0862;
 		if (in_response)
		{
			if (!CNDverb(95)) break p000e0862;
 		}
		if (!CNDeq(34,255)) break p000e0862;
		if (!CNDbnotzero(12,1)) break p000e0862;
 		ACCwriteln(819);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SOPLA _
	p000e0863:
	{
 		if (skipdoall('p000e0863')) break p000e0863;
 		if (in_response)
		{
			if (!CNDverb(95)) break p000e0863;
 		}
		if (!CNDeq(34,255)) break p000e0863;
		if (!CNDbzero(12,1)) break p000e0863;
 		ACCwriteln(820);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SOPLA _
	p000e0864:
	{
 		if (skipdoall('p000e0864')) break p000e0864;
 		if (in_response)
		{
			if (!CNDverb(95)) break p000e0864;
 		}
		if (!CNDnoteq(34,255)) break p000e0864;
		if (!CNDnoteq(51,255)) break p000e0864;
		if (!CNDonotzero(getFlag(51),3)) break p000e0864;
		if (!CNDpresent(getFlag(51))) break p000e0864;
 		ACCwriteln(821);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SOPLA _
	p000e0865:
	{
 		if (skipdoall('p000e0865')) break p000e0865;
 		if (in_response)
		{
			if (!CNDverb(95)) break p000e0865;
 		}
		if (!CNDnoteq(34,255)) break p000e0865;
		if (!CNDnoteq(51,255)) break p000e0865;
		if (!CNDonotzero(getFlag(51),3)) break p000e0865;
		if (!CNDabsent(getFlag(51))) break p000e0865;
 		ACCwriteln(822);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SOPLA _
	p000e0866:
	{
 		if (skipdoall('p000e0866')) break p000e0866;
 		if (in_response)
		{
			if (!CNDverb(95)) break p000e0866;
 		}
		if (!CNDnoteq(34,255)) break p000e0866;
		if (!CNDeq(51,255)) break p000e0866;
 		ACCwriteln(823);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SOPLA _
	p000e0867:
	{
 		if (skipdoall('p000e0867')) break p000e0867;
 		if (in_response)
		{
			if (!CNDverb(95)) break p000e0867;
 		}
		if (!CNDnoteq(51,255)) break p000e0867;
		if (!CNDpresent(getFlag(51))) break p000e0867;
 		ACCwriteln(824);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SOPLA _
	p000e0868:
	{
 		if (skipdoall('p000e0868')) break p000e0868;
 		if (in_response)
		{
			if (!CNDverb(95)) break p000e0868;
 		}
		if (!CNDnoteq(51,255)) break p000e0868;
		if (!CNDabsent(getFlag(51))) break p000e0868;
 		ACCwriteln(825);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INGRESA _
	p000e0869:
	{
 		if (skipdoall('p000e0869')) break p000e0869;
 		if (in_response)
		{
			if (!CNDverb(123)) break p000e0869;
 		}
		if (!CNDeq(34,255)) break p000e0869;
		if (!CNDbnotzero(12,1)) break p000e0869;
 		ACCwriteln(826);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INGRESA _
	p000e0870:
	{
 		if (skipdoall('p000e0870')) break p000e0870;
 		if (in_response)
		{
			if (!CNDverb(123)) break p000e0870;
 		}
		if (!CNDeq(34,255)) break p000e0870;
		if (!CNDbzero(12,1)) break p000e0870;
 		ACCwriteln(827);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INGRESA _
	p000e0871:
	{
 		if (skipdoall('p000e0871')) break p000e0871;
 		if (in_response)
		{
			if (!CNDverb(123)) break p000e0871;
 		}
		if (!CNDnoteq(34,255)) break p000e0871;
		if (!CNDnoteq(51,255)) break p000e0871;
		if (!CNDonotzero(getFlag(51),3)) break p000e0871;
		if (!CNDpresent(getFlag(51))) break p000e0871;
 		ACCwriteln(828);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INGRESA _
	p000e0872:
	{
 		if (skipdoall('p000e0872')) break p000e0872;
 		if (in_response)
		{
			if (!CNDverb(123)) break p000e0872;
 		}
		if (!CNDnoteq(34,255)) break p000e0872;
		if (!CNDnoteq(51,255)) break p000e0872;
		if (!CNDonotzero(getFlag(51),3)) break p000e0872;
		if (!CNDabsent(getFlag(51))) break p000e0872;
 		ACCwriteln(829);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INGRESA _
	p000e0873:
	{
 		if (skipdoall('p000e0873')) break p000e0873;
 		if (in_response)
		{
			if (!CNDverb(123)) break p000e0873;
 		}
		if (!CNDnoteq(34,255)) break p000e0873;
		if (!CNDeq(51,255)) break p000e0873;
 		ACCwriteln(830);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INGRESA _
	p000e0874:
	{
 		if (skipdoall('p000e0874')) break p000e0874;
 		if (in_response)
		{
			if (!CNDverb(123)) break p000e0874;
 		}
		if (!CNDnoteq(51,255)) break p000e0874;
		if (!CNDpresent(getFlag(51))) break p000e0874;
 		ACCwriteln(831);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INGRESA _
	p000e0875:
	{
 		if (skipdoall('p000e0875')) break p000e0875;
 		if (in_response)
		{
			if (!CNDverb(123)) break p000e0875;
 		}
		if (!CNDnoteq(51,255)) break p000e0875;
		if (!CNDabsent(getFlag(51))) break p000e0875;
 		ACCwriteln(832);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0876:
	{
 		if (skipdoall('p000e0876')) break p000e0876;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0876;
 		}
		if (!CNDprep(3)) break p000e0876;
		if (!CNDeq(34,255)) break p000e0876;
		if (!CNDbnotzero(12,1)) break p000e0876;
 		ACCwriteln(833);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0877:
	{
 		if (skipdoall('p000e0877')) break p000e0877;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0877;
 		}
		if (!CNDprep(3)) break p000e0877;
		if (!CNDeq(34,255)) break p000e0877;
		if (!CNDbzero(12,1)) break p000e0877;
 		ACCwriteln(834);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0878:
	{
 		if (skipdoall('p000e0878')) break p000e0878;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0878;
 		}
		if (!CNDprep(3)) break p000e0878;
		if (!CNDnoteq(34,255)) break p000e0878;
		if (!CNDnoteq(51,255)) break p000e0878;
		if (!CNDonotzero(getFlag(51),3)) break p000e0878;
		if (!CNDpresent(getFlag(51))) break p000e0878;
 		ACCwriteln(835);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0879:
	{
 		if (skipdoall('p000e0879')) break p000e0879;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0879;
 		}
		if (!CNDprep(3)) break p000e0879;
		if (!CNDnoteq(34,255)) break p000e0879;
		if (!CNDnoteq(51,255)) break p000e0879;
		if (!CNDonotzero(getFlag(51),3)) break p000e0879;
		if (!CNDabsent(getFlag(51))) break p000e0879;
 		ACCwriteln(836);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0880:
	{
 		if (skipdoall('p000e0880')) break p000e0880;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0880;
 		}
		if (!CNDprep(3)) break p000e0880;
		if (!CNDnoteq(34,255)) break p000e0880;
		if (!CNDeq(51,255)) break p000e0880;
 		ACCwriteln(837);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0881:
	{
 		if (skipdoall('p000e0881')) break p000e0881;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0881;
 		}
		if (!CNDprep(3)) break p000e0881;
		if (!CNDnoteq(51,255)) break p000e0881;
		if (!CNDpresent(getFlag(51))) break p000e0881;
 		ACCwriteln(838);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0882:
	{
 		if (skipdoall('p000e0882')) break p000e0882;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0882;
 		}
		if (!CNDprep(3)) break p000e0882;
		if (!CNDnoteq(51,255)) break p000e0882;
		if (!CNDabsent(getFlag(51))) break p000e0882;
 		ACCwriteln(839);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PALPA _
	p000e0883:
	{
 		if (skipdoall('p000e0883')) break p000e0883;
 		if (in_response)
		{
			if (!CNDverb(40)) break p000e0883;
 		}
		if (!CNDeq(34,255)) break p000e0883;
		if (!CNDbnotzero(12,1)) break p000e0883;
 		ACCwriteln(840);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PALPA _
	p000e0884:
	{
 		if (skipdoall('p000e0884')) break p000e0884;
 		if (in_response)
		{
			if (!CNDverb(40)) break p000e0884;
 		}
		if (!CNDeq(34,255)) break p000e0884;
		if (!CNDbzero(12,1)) break p000e0884;
 		ACCwriteln(841);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PALPA _
	p000e0885:
	{
 		if (skipdoall('p000e0885')) break p000e0885;
 		if (in_response)
		{
			if (!CNDverb(40)) break p000e0885;
 		}
		if (!CNDnoteq(34,255)) break p000e0885;
		if (!CNDnoteq(51,255)) break p000e0885;
		if (!CNDonotzero(getFlag(51),3)) break p000e0885;
		if (!CNDpresent(getFlag(51))) break p000e0885;
 		ACCwriteln(842);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PALPA _
	p000e0886:
	{
 		if (skipdoall('p000e0886')) break p000e0886;
 		if (in_response)
		{
			if (!CNDverb(40)) break p000e0886;
 		}
		if (!CNDnoteq(34,255)) break p000e0886;
		if (!CNDnoteq(51,255)) break p000e0886;
		if (!CNDonotzero(getFlag(51),3)) break p000e0886;
		if (!CNDabsent(getFlag(51))) break p000e0886;
 		ACCwriteln(843);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PALPA _
	p000e0887:
	{
 		if (skipdoall('p000e0887')) break p000e0887;
 		if (in_response)
		{
			if (!CNDverb(40)) break p000e0887;
 		}
		if (!CNDnoteq(34,255)) break p000e0887;
		if (!CNDeq(51,255)) break p000e0887;
 		ACCwriteln(844);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PALPA _
	p000e0888:
	{
 		if (skipdoall('p000e0888')) break p000e0888;
 		if (in_response)
		{
			if (!CNDverb(40)) break p000e0888;
 		}
		if (!CNDnoteq(51,255)) break p000e0888;
		if (!CNDpresent(getFlag(51))) break p000e0888;
 		ACCwriteln(845);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PALPA _
	p000e0889:
	{
 		if (skipdoall('p000e0889')) break p000e0889;
 		if (in_response)
		{
			if (!CNDverb(40)) break p000e0889;
 		}
		if (!CNDnoteq(51,255)) break p000e0889;
		if (!CNDabsent(getFlag(51))) break p000e0889;
 		ACCwriteln(846);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// TORTURA _
	p000e0890:
	{
 		if (skipdoall('p000e0890')) break p000e0890;
 		if (in_response)
		{
			if (!CNDverb(149)) break p000e0890;
 		}
		if (!CNDeq(34,255)) break p000e0890;
		if (!CNDbnotzero(12,1)) break p000e0890;
 		ACCwriteln(847);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// TORTURA _
	p000e0891:
	{
 		if (skipdoall('p000e0891')) break p000e0891;
 		if (in_response)
		{
			if (!CNDverb(149)) break p000e0891;
 		}
		if (!CNDeq(34,255)) break p000e0891;
		if (!CNDbzero(12,1)) break p000e0891;
 		ACCwriteln(848);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// TORTURA _
	p000e0892:
	{
 		if (skipdoall('p000e0892')) break p000e0892;
 		if (in_response)
		{
			if (!CNDverb(149)) break p000e0892;
 		}
		if (!CNDnoteq(34,255)) break p000e0892;
		if (!CNDnoteq(51,255)) break p000e0892;
		if (!CNDonotzero(getFlag(51),3)) break p000e0892;
		if (!CNDpresent(getFlag(51))) break p000e0892;
 		ACCwriteln(849);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// TORTURA _
	p000e0893:
	{
 		if (skipdoall('p000e0893')) break p000e0893;
 		if (in_response)
		{
			if (!CNDverb(149)) break p000e0893;
 		}
		if (!CNDnoteq(34,255)) break p000e0893;
		if (!CNDnoteq(51,255)) break p000e0893;
		if (!CNDonotzero(getFlag(51),3)) break p000e0893;
		if (!CNDabsent(getFlag(51))) break p000e0893;
 		ACCwriteln(850);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// TORTURA _
	p000e0894:
	{
 		if (skipdoall('p000e0894')) break p000e0894;
 		if (in_response)
		{
			if (!CNDverb(149)) break p000e0894;
 		}
		if (!CNDnoteq(34,255)) break p000e0894;
		if (!CNDeq(51,255)) break p000e0894;
 		ACCwriteln(851);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// TORTURA _
	p000e0895:
	{
 		if (skipdoall('p000e0895')) break p000e0895;
 		if (in_response)
		{
			if (!CNDverb(149)) break p000e0895;
 		}
		if (!CNDnoteq(51,255)) break p000e0895;
		if (!CNDpresent(getFlag(51))) break p000e0895;
 		ACCwriteln(852);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// TORTURA _
	p000e0896:
	{
 		if (skipdoall('p000e0896')) break p000e0896;
 		if (in_response)
		{
			if (!CNDverb(149)) break p000e0896;
 		}
		if (!CNDnoteq(51,255)) break p000e0896;
		if (!CNDabsent(getFlag(51))) break p000e0896;
 		ACCwriteln(853);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// JUNTA _
	p000e0897:
	{
 		if (skipdoall('p000e0897')) break p000e0897;
 		if (in_response)
		{
			if (!CNDverb(99)) break p000e0897;
 		}
		if (!CNDeq(34,255)) break p000e0897;
		if (!CNDbnotzero(12,1)) break p000e0897;
 		ACCwriteln(854);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// JUNTA _
	p000e0898:
	{
 		if (skipdoall('p000e0898')) break p000e0898;
 		if (in_response)
		{
			if (!CNDverb(99)) break p000e0898;
 		}
		if (!CNDeq(34,255)) break p000e0898;
		if (!CNDbzero(12,1)) break p000e0898;
 		ACCwriteln(855);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// JUNTA _
	p000e0899:
	{
 		if (skipdoall('p000e0899')) break p000e0899;
 		if (in_response)
		{
			if (!CNDverb(99)) break p000e0899;
 		}
		if (!CNDnoteq(34,255)) break p000e0899;
		if (!CNDnoteq(51,255)) break p000e0899;
		if (!CNDonotzero(getFlag(51),3)) break p000e0899;
		if (!CNDpresent(getFlag(51))) break p000e0899;
 		ACCwriteln(856);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// JUNTA _
	p000e0900:
	{
 		if (skipdoall('p000e0900')) break p000e0900;
 		if (in_response)
		{
			if (!CNDverb(99)) break p000e0900;
 		}
		if (!CNDnoteq(34,255)) break p000e0900;
		if (!CNDnoteq(51,255)) break p000e0900;
		if (!CNDonotzero(getFlag(51),3)) break p000e0900;
		if (!CNDabsent(getFlag(51))) break p000e0900;
 		ACCwriteln(857);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// JUNTA _
	p000e0901:
	{
 		if (skipdoall('p000e0901')) break p000e0901;
 		if (in_response)
		{
			if (!CNDverb(99)) break p000e0901;
 		}
		if (!CNDnoteq(34,255)) break p000e0901;
		if (!CNDeq(51,255)) break p000e0901;
 		ACCwriteln(858);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// JUNTA _
	p000e0902:
	{
 		if (skipdoall('p000e0902')) break p000e0902;
 		if (in_response)
		{
			if (!CNDverb(99)) break p000e0902;
 		}
		if (!CNDnoteq(51,255)) break p000e0902;
		if (!CNDpresent(getFlag(51))) break p000e0902;
 		ACCwriteln(859);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// JUNTA _
	p000e0903:
	{
 		if (skipdoall('p000e0903')) break p000e0903;
 		if (in_response)
		{
			if (!CNDverb(99)) break p000e0903;
 		}
		if (!CNDnoteq(51,255)) break p000e0903;
		if (!CNDabsent(getFlag(51))) break p000e0903;
 		ACCwriteln(860);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VACIA _
	p000e0904:
	{
 		if (skipdoall('p000e0904')) break p000e0904;
 		if (in_response)
		{
			if (!CNDverb(86)) break p000e0904;
 		}
		if (!CNDeq(34,255)) break p000e0904;
		if (!CNDbnotzero(12,1)) break p000e0904;
 		ACCwriteln(861);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VACIA _
	p000e0905:
	{
 		if (skipdoall('p000e0905')) break p000e0905;
 		if (in_response)
		{
			if (!CNDverb(86)) break p000e0905;
 		}
		if (!CNDeq(34,255)) break p000e0905;
		if (!CNDbzero(12,1)) break p000e0905;
 		ACCwriteln(862);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VACIA _
	p000e0906:
	{
 		if (skipdoall('p000e0906')) break p000e0906;
 		if (in_response)
		{
			if (!CNDverb(86)) break p000e0906;
 		}
		if (!CNDnoteq(34,255)) break p000e0906;
		if (!CNDnoteq(51,255)) break p000e0906;
		if (!CNDonotzero(getFlag(51),3)) break p000e0906;
		if (!CNDpresent(getFlag(51))) break p000e0906;
 		ACCwriteln(863);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VACIA _
	p000e0907:
	{
 		if (skipdoall('p000e0907')) break p000e0907;
 		if (in_response)
		{
			if (!CNDverb(86)) break p000e0907;
 		}
		if (!CNDnoteq(34,255)) break p000e0907;
		if (!CNDnoteq(51,255)) break p000e0907;
		if (!CNDonotzero(getFlag(51),3)) break p000e0907;
		if (!CNDabsent(getFlag(51))) break p000e0907;
 		ACCwriteln(864);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VACIA _
	p000e0908:
	{
 		if (skipdoall('p000e0908')) break p000e0908;
 		if (in_response)
		{
			if (!CNDverb(86)) break p000e0908;
 		}
		if (!CNDnoteq(34,255)) break p000e0908;
		if (!CNDeq(51,255)) break p000e0908;
 		ACCwriteln(865);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VACIA _
	p000e0909:
	{
 		if (skipdoall('p000e0909')) break p000e0909;
 		if (in_response)
		{
			if (!CNDverb(86)) break p000e0909;
 		}
		if (!CNDnoteq(51,255)) break p000e0909;
		if (!CNDpresent(getFlag(51))) break p000e0909;
 		ACCwriteln(866);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VACIA _
	p000e0910:
	{
 		if (skipdoall('p000e0910')) break p000e0910;
 		if (in_response)
		{
			if (!CNDverb(86)) break p000e0910;
 		}
		if (!CNDnoteq(51,255)) break p000e0910;
		if (!CNDabsent(getFlag(51))) break p000e0910;
 		ACCwriteln(867);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VENDE _
	p000e0911:
	{
 		if (skipdoall('p000e0911')) break p000e0911;
 		if (in_response)
		{
			if (!CNDverb(121)) break p000e0911;
 		}
		if (!CNDeq(34,255)) break p000e0911;
		if (!CNDbnotzero(12,1)) break p000e0911;
 		ACCwriteln(868);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VENDE _
	p000e0912:
	{
 		if (skipdoall('p000e0912')) break p000e0912;
 		if (in_response)
		{
			if (!CNDverb(121)) break p000e0912;
 		}
		if (!CNDeq(34,255)) break p000e0912;
		if (!CNDbzero(12,1)) break p000e0912;
 		ACCwriteln(869);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VENDE _
	p000e0913:
	{
 		if (skipdoall('p000e0913')) break p000e0913;
 		if (in_response)
		{
			if (!CNDverb(121)) break p000e0913;
 		}
		if (!CNDnoteq(34,255)) break p000e0913;
		if (!CNDnoteq(51,255)) break p000e0913;
		if (!CNDonotzero(getFlag(51),3)) break p000e0913;
		if (!CNDpresent(getFlag(51))) break p000e0913;
 		ACCwriteln(870);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VENDE _
	p000e0914:
	{
 		if (skipdoall('p000e0914')) break p000e0914;
 		if (in_response)
		{
			if (!CNDverb(121)) break p000e0914;
 		}
		if (!CNDnoteq(34,255)) break p000e0914;
		if (!CNDnoteq(51,255)) break p000e0914;
		if (!CNDonotzero(getFlag(51),3)) break p000e0914;
		if (!CNDabsent(getFlag(51))) break p000e0914;
 		ACCwriteln(871);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VENDE _
	p000e0915:
	{
 		if (skipdoall('p000e0915')) break p000e0915;
 		if (in_response)
		{
			if (!CNDverb(121)) break p000e0915;
 		}
		if (!CNDnoteq(34,255)) break p000e0915;
		if (!CNDeq(51,255)) break p000e0915;
 		ACCwriteln(872);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VENDE _
	p000e0916:
	{
 		if (skipdoall('p000e0916')) break p000e0916;
 		if (in_response)
		{
			if (!CNDverb(121)) break p000e0916;
 		}
		if (!CNDnoteq(51,255)) break p000e0916;
		if (!CNDpresent(getFlag(51))) break p000e0916;
 		ACCwriteln(873);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VENDE _
	p000e0917:
	{
 		if (skipdoall('p000e0917')) break p000e0917;
 		if (in_response)
		{
			if (!CNDverb(121)) break p000e0917;
 		}
		if (!CNDnoteq(51,255)) break p000e0917;
		if (!CNDabsent(getFlag(51))) break p000e0917;
 		ACCwriteln(874);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX _
	p000e0918:
	{
 		if (skipdoall('p000e0918')) break p000e0918;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0918;
 		}
		if (!CNDprep(4)) break p000e0918;
		if (!CNDeq(34,255)) break p000e0918;
		if (!CNDbnotzero(12,1)) break p000e0918;
 		ACCwriteln(875);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX _
	p000e0919:
	{
 		if (skipdoall('p000e0919')) break p000e0919;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0919;
 		}
		if (!CNDprep(4)) break p000e0919;
		if (!CNDeq(34,255)) break p000e0919;
		if (!CNDbzero(12,1)) break p000e0919;
 		ACCwriteln(876);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX _
	p000e0920:
	{
 		if (skipdoall('p000e0920')) break p000e0920;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0920;
 		}
		if (!CNDeq(34,255)) break p000e0920;
		if (!CNDbnotzero(12,1)) break p000e0920;
 		ACCwriteln(877);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX _
	p000e0921:
	{
 		if (skipdoall('p000e0921')) break p000e0921;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0921;
 		}
		if (!CNDeq(34,255)) break p000e0921;
		if (!CNDbzero(12,1)) break p000e0921;
 		ACCwriteln(878);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX _
	p000e0922:
	{
 		if (skipdoall('p000e0922')) break p000e0922;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0922;
 		}
		if (!CNDprep(4)) break p000e0922;
		if (!CNDnoteq(51,255)) break p000e0922;
		if (!CNDonotzero(getFlag(51),3)) break p000e0922;
		if (!CNDpresent(getFlag(51))) break p000e0922;
 		ACCwriteln(879);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX _
	p000e0923:
	{
 		if (skipdoall('p000e0923')) break p000e0923;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0923;
 		}
		if (!CNDprep(4)) break p000e0923;
		if (!CNDnoteq(51,255)) break p000e0923;
		if (!CNDonotzero(getFlag(51),3)) break p000e0923;
		if (!CNDabsent(getFlag(51))) break p000e0923;
 		ACCwriteln(880);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX _
	p000e0924:
	{
 		if (skipdoall('p000e0924')) break p000e0924;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0924;
 		}
		if (!CNDnoteq(34,255)) break p000e0924;
		if (!CNDnoteq(51,255)) break p000e0924;
		if (!CNDonotzero(getFlag(51),3)) break p000e0924;
		if (!CNDpresent(getFlag(51))) break p000e0924;
 		ACCwriteln(881);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX _
	p000e0925:
	{
 		if (skipdoall('p000e0925')) break p000e0925;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0925;
 		}
		if (!CNDnoteq(34,255)) break p000e0925;
		if (!CNDnoteq(51,255)) break p000e0925;
		if (!CNDonotzero(getFlag(51),3)) break p000e0925;
		if (!CNDabsent(getFlag(51))) break p000e0925;
 		ACCwriteln(882);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX _
	p000e0926:
	{
 		if (skipdoall('p000e0926')) break p000e0926;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0926;
 		}
		if (!CNDprep(4)) break p000e0926;
		if (!CNDnoteq(34,255)) break p000e0926;
		if (!CNDeq(51,255)) break p000e0926;
 		ACCwriteln(883);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX _
	p000e0927:
	{
 		if (skipdoall('p000e0927')) break p000e0927;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0927;
 		}
		if (!CNDnoteq(34,255)) break p000e0927;
		if (!CNDeq(51,255)) break p000e0927;
 		ACCwriteln(884);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX _
	p000e0928:
	{
 		if (skipdoall('p000e0928')) break p000e0928;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0928;
 		}
		if (!CNDnoteq(51,255)) break p000e0928;
		if (!CNDpresent(getFlag(51))) break p000e0928;
		if (!CNDonotzero(getFlag(51),2)) break p000e0928;
 		ACCwriteln(885);
 		ACClistat(getFlag(51));
 		ACCnpcat(getFlag(51),13);
		if (!CNDnotzero(13)) break p000e0928;
 		ACClistnpc(getFlag(51));
		{}

	}

	// EX _
	p000e0929:
	{
 		if (skipdoall('p000e0929')) break p000e0929;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0929;
 		}
		if (!CNDnoteq(51,255)) break p000e0929;
		if (!CNDpresent(getFlag(51))) break p000e0929;
		if (!CNDonotzero(getFlag(51),2)) break p000e0929;
 		ACCnewline();
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX _
	p000e0930:
	{
 		if (skipdoall('p000e0930')) break p000e0930;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0930;
 		}
		if (!CNDnoteq(51,255)) break p000e0930;
		if (!CNDpresent(getFlag(51))) break p000e0930;
 		ACCwriteln(886);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX _
	p000e0931:
	{
 		if (skipdoall('p000e0931')) break p000e0931;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0931;
 		}
		if (!CNDnoteq(51,255)) break p000e0931;
		if (!CNDabsent(getFlag(51))) break p000e0931;
 		ACCwriteln(887);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ _
	p000e0932:
	{
 		if (skipdoall('p000e0932')) break p000e0932;
		if (!CNDlt(33,14)) break p000e0932;
		if (!CNDmove(38)) break p000e0932;
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// _ _
	p000e0933:
	{
 		if (skipdoall('p000e0933')) break p000e0933;
		if (!CNDlt(33,14)) break p000e0933;
 		ACCplus(33,1002);
 		ACCwrite(888);
 		ACCmes(getFlag(33));
 		ACCwrite(889);
 		ACCminus(33,1002);
 		ACCexits(getFlag(38),1000);
 		ACCnewline();
 		ACCdone();
		break pro000_restart;
		{}

	}


}
}

function pro001()
{
process_restart=true;
pro001_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p001e0000:
	{
 		if (skipdoall('p001e0000')) break p001e0000;
		if (!CNDislight()) break p001e0000;
 		ACClistobj();
 		ACClistnpc(getFlag(38));
		{}

	}

	// _ _
	p001e0001:
	{
 		if (skipdoall('p001e0001')) break p001e0001;
		if (!CNDat(0)) break p001e0001;
 		ACClet(103,8);
 		ACCanykey();
 		function anykey00013() 
		{
 		ACCgoto(1);
 		ACCdesc();
		return;
		}
 		waitKey(anykey00013);
		done_flag=true;
		break pro001_restart;
		{}

	}

	// _ GUARDIA
	p001e0002:
	{
 		if (skipdoall('p001e0002')) break p001e0002;
 		if (in_response)
		{
			if (!CNDnoun1(21)) break p001e0002;
 		}
		if (!CNDat(8)) break p001e0002;
		if (!CNDsame(103,38)) break p001e0002;
		if (!CNDzero(104)) break p001e0002;
 		ACCwriteln(890);
 		ACCnotdone();
		break pro001_restart;
		{}

	}

	// _ _
	p001e0003:
	{
 		if (skipdoall('p001e0003')) break p001e0003;
		if (!CNDat(5)) break p001e0003;
 		ACCgetexit(5,100);
		if (!CNDnoteq(100,255)) break p001e0003;
 		ACCwriteln(891);
 		ACCnotdone();
		break pro001_restart;
		{}

	}

	// _ _
	p001e0004:
	{
 		if (skipdoall('p001e0004')) break p001e0004;
		if (!CNDat(6)) break p001e0004;
 		ACCgetexit(13,100);
		if (!CNDnoteq(100,255)) break p001e0004;
 		ACCwriteln(892);
 		ACCnotdone();
		break pro001_restart;
		{}

	}

	// _ _
	p001e0005:
	{
 		if (skipdoall('p001e0005')) break p001e0005;
		if (!CNDat(7)) break p001e0005;
 		ACCwriteln(893);
 		ACCnotdone();
		break pro001_restart;
		{}

	}

	// _ _
	p001e0006:
	{
 		if (skipdoall('p001e0006')) break p001e0006;
		if (!CNDat(9)) break p001e0006;
 		ACCwriteln(894);
 		ACCnotdone();
		break pro001_restart;
		{}

	}


}
}

function pro002()
{
process_restart=true;
pro002_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p002e0000:
	{
 		if (skipdoall('p002e0000')) break p002e0000;
		if (!CNDat(8)) break p002e0000;
		if (!CNDsame(103,38)) break p002e0000;
		if (!CNDzero(106)) break p002e0000;
		if (!CNDzero(107)) break p002e0000;
 		ACCwriteln(895);
 		ACCpause(2);
 		function anykey00014() 
		{
 		ACCbeep(1263,14,1);
 		ACCend();
		return;
		}
 		waitKey(anykey00014);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0001:
	{
 		if (skipdoall('p002e0001')) break p002e0001;
		if (!CNDat(8)) break p002e0001;
		if (!CNDsame(103,38)) break p002e0001;
		if (!CNDzero(106)) break p002e0001;
 		ACCminus(107,1);
 		ACCwriteln(896);
		{}

	}

	// _ _
	p002e0002:
	{
 		if (skipdoall('p002e0002')) break p002e0002;
		if (!CNDat(8)) break p002e0002;
		if (!CNDzero(105)) break p002e0002;
		if (!CNDnotzero(104)) break p002e0002;
 		ACCwriteln(897);
 		ACClet(103,8);
 		ACCclear(104);
		{}

	}

	// _ _
	p002e0003:
	{
 		if (skipdoall('p002e0003')) break p002e0003;
		if (!CNDat(8)) break p002e0003;
		if (!CNDnotzero(104)) break p002e0003;
 		ACCminus(105,1);
		{}

	}

	// _ _
	p002e0004:
	{
 		if (skipdoall('p002e0004')) break p002e0004;
		if (!CNDnotat(3)) break p002e0004;
 		ACCsilence(15);
		{}

	}

	// _ _
	p002e0005:
	{
 		if (skipdoall('p002e0005')) break p002e0005;
		if (!CNDat(5)) break p002e0005;
 		ACCpause(1);
 		function anykey00015() 
		{
 		ACCbeep(1260,15,0);
		}
 		waitKey(anykey00015);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0006:
	{
 		if (skipdoall('p002e0006')) break p002e0006;
		if (!CNDnotat(5)) break p002e0006;
 		ACCsilence(15);
		{}

	}

	// _ _
	p002e0007:
	{
 		if (skipdoall('p002e0007')) break p002e0007;
		if (!CNDat(3)) break p002e0007;
 		ACCpause(1);
 		function anykey00016() 
		{
 		ACCbeep(1262,15,0);
		}
 		waitKey(anykey00016);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0008:
	{
 		if (skipdoall('p002e0008')) break p002e0008;
		if (!CNDzone(7,9)) break p002e0008;
 		ACCbeep(1262,15,0);
		{}

	}

	// _ _
	p002e0009:
	{
 		if (skipdoall('p002e0009')) break p002e0009;
		if (!CNDat(8)) break p002e0009;
		if (!CNDsame(103,38)) break p002e0009;
		if (!CNDchance(50)) break p002e0009;
 		ACCrndwriteln(898,899,900);
		{}

	}


}
}

function pro003()
{
process_restart=true;
pro003_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p003e0000:
	{
 		if (skipdoall('p003e0000')) break p003e0000;
		if (!CNDzone(1,6)) break p003e0000;
		if (!CNDisnotsound(16)) break p003e0000;
 		ACCbeep(1259,16,0);
		{}

	}

	// _ _
	p003e0001:
	{
 		if (skipdoall('p003e0001')) break p003e0001;
		if (!CNDat(7)) break p003e0001;
		if (!CNDisnotsound(16)) break p003e0001;
 		ACCbeep(1256,16,0);
		{}

	}

	// _ _
	p003e0002:
	{
 		if (skipdoall('p003e0002')) break p003e0002;
		if (!CNDat(8)) break p003e0002;
		if (!CNDisnotsound(16)) break p003e0002;
 		ACCbeep(1256,16,0);
		{}

	}

	// _ _
	p003e0003:
	{
 		if (skipdoall('p003e0003')) break p003e0003;
		if (!CNDat(9)) break p003e0003;
		if (!CNDisnotsound(16)) break p003e0003;
 		ACCbeep(1258,16,0);
		{}

	}


}
}

interrupt_proc = 3;
last_process = 3;
// This file is (C) Carlos Sanchez 2014, released under the MIT license

// This function is called first by the start() function that runs when the game starts for the first time
var h_init = function()
{
}


// This function is called last by the start() function that runs when the game starts for the first time
var h_post =  function()
{
}

// This function is called when the engine tries to write any text
var h_writeText =  function (text)
{
	return text;
}

//This function is called every time the user types any order
var h_playerOrder = function(player_order)
{
	return player_order;
}

// This function is called every time a location is described, just after the location text is written
var h_description_init =  function ()
{
}

// This function is called every time a location is described, just after the process 1 is executed
var h_description_post = function()
{
}


// this function is called when the savegame object has been created, in order to be able to add more custom properties
var h_saveGame = function(savegame_object)
{
	return savegame_object;
}


// this function is called after the restore game function has restored the standard information in savegame, in order to restore any additional data included in a patched (by h_saveGame) savegame.
var h_restoreGame = function(savegame_object)
{
}

// this funcion is called before writing a message about player order beeing impossible to understand
var h_invalidOrder = function(player_order)
{
}

// this function is called when a sequence tag is found but does not exist in ngPAWS, giving a last chance for any hook library to provide a response or raise error message
// tagparams receives the params inside the tag as an array  {XXXX|nn|mm|yy} => ['XXXX', 'nn', 'mm', 'yy']
var h_sequencetag = function (tagparams)
{
	return '[[[' + STR_INVALID_TAG_SEQUENCE_BADTAG + ': ' + tagparams[0] + ']]]';
}

// this function is called from certain points in the response or process tables via the HOOK condact. Depending on the string received it can do something or not.
// it's designed to allow direct javascript code to take control in the start database just installing a plugin library (avoiding the wirter need to enter code to activate the library)
var h_code = function(str)
{
	return false;
}


// this function is called from the keydown evente handler used by block and other functions to emulate a pause or waiting for a keypress. It is designed to allow plugin condacts or
// libraries to attend those key presses and react accordingly. In case a hook function decides that the standard keydown functions should not be processed, the hook function should return false.
// Also, any h_keydown replacement should probably do the same.
var h_keydown = function (event)
{
	return true;
}


// this function is called every time a process is called,  either by the internall loop of by the PROCESS condact, just before running it.
var h_preProcess = function(procno)
{

}

// this function is called every time a process is called just after the process exits (no matter which DONE status it has), either by the internall loop of by the PROCESS condact
var h_postProcess= function (procno)
{

}// This file is (C) Carlos Sanchez 2014, and is relaased under the MIT license
 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////// CONDACTS ///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function ACCdesc()
{
	describe_location_flag = true;
	ACCbreak(); // Cancel doall loop
}


function ACCdone()
{
	done_flag = true;
}

function CNDat(locno)
{
  return (loc_here()==locno);
}

function CNDnotat(locno)
{
	 return (loc_here()!=locno);
}


function CNDatgt(locno)
{
	 return (loc_here()>locno);
}


function CNDatlt(locno)
{
	 return (loc_here()<locno);
}

function CNDpresent(objno)
{
	var loc = getObjectLocation(objno);
	if (loc == loc_here()) return true;
	if (loc == LOCATION_WORN) return true;
	if (loc == LOCATION_CARRIED) return true;
	if ( (!bittest(getFlag(FLAG_PARSER_SETTINGS),7)) && (objectIsContainer(loc) || objectIsSupporter(loc))  &&  (loc<=last_object_number)  && (CNDpresent(loc)) )  // Extended context and object in another object that is present
	{
		if (objectIsSupporter(loc)) return true;  // On supporter
		if ( objectIsContainer(loc) && objectIsAttr(loc, ATTR_OPENABLE) && objectIsAttr(loc, ATTR_OPEN)) return true; // In a openable & open container
		if ( objectIsContainer(loc) && (!objectIsAttr(loc, ATTR_OPENABLE)) ) return true; // In a not openable container
	}
	return false;
}

function CNDabsent(objno)
{
	return !CNDpresent(objno);
}

function CNDworn(objno)
{
	return (getObjectLocation(objno) == LOCATION_WORN);
}

function CNDnotworn(objno)
{
	return !CNDworn(objno);
}

function CNDcarried(objno)
{
	return (getObjectLocation(objno) == LOCATION_CARRIED);	
}

function CNDnotcarr(objno)
{
	return !CNDcarried(objno);
}


function CNDchance(percent)
{
	 var val = Math.floor((Math.random()*101));
	 return (val<=percent);
}

function CNDzero(flagno)
{
	return (getFlag(flagno) == 0);
}

function CNDnotzero(flagno)
{
	 return !CNDzero(flagno)
}


function CNDeq(flagno, value)
{
	return (getFlag(flagno) == value);
}

function CNDnoteq(flagno,value)
{
	return !CNDeq(flagno, value);
}

function CNDgt(flagno, value)
{
	return (getFlag(flagno) > value);
}

function CNDlt(flagno, value)
{
	return (getFlag(flagno) < value);
}


function CNDadject1(wordno)
{
	return (getFlag(FLAG_ADJECT1) == wordno);
}

function CNDadverb(wordno)
{
	return (getFlag(FLAG_ADVERB) == wordno);
}


function CNDtimeout()
{
	 return bittest(getFlag(FLAG_TIMEOUT_SETTINGS),7);
}


function CNDisat(objno, locno)
{
	return (getObjectLocation(objno) == locno);

}


function CNDisnotat(objno, locno)
{
	return !CNDisat(objno, locno);
}



function CNDprep(wordno)
{
	return (getFlag(FLAG_PREP) == wordno);
}




function CNDnoun2(wordno)
{
	return (getFlag(FLAG_NOUN2) == wordno);
}

function CNDadject2(wordno)
{
	return (getFlag(FLAG_ADJECT2) == wordno);
}

function CNDsame(flagno1,flagno2)
{
	return (getFlag(flagno1) == getFlag(flagno2));
}


function CNDnotsame(flagno1,flagno2)
{
	return (getFlag(flagno1) != getFlag(flagno2));
}

function ACCinven()
{
	var count = 0;
	writeSysMessage(SYSMESS_YOUARECARRYING);
	ACCnewline();
	var listnpcs_with_objects = !bittest(getFlag(FLAG_PARSER_SETTINGS),3);
	var i;
	for (i=0;i<num_objects;i++)
	{
		if ((getObjectLocation(i)) == LOCATION_CARRIED)
		{
			
			if ((listnpcs_with_objects) || (!objectIsNPC(i)))
			{
				writeObject(i);
				if ((objectIsAttr(i,ATTR_SUPPORTER))  || (  (objectIsAttr(i,ATTR_TRANSPARENT))  && (objectIsAttr(i,ATTR_CONTAINER))))  ACClistat(i, i);
				ACCnewline();
				count++;
			}
		}
		if (getObjectLocation(i) == LOCATION_WORN)
		{
			if (listnpcs_with_objects || (!objectIsNPC(i)))
			{
				writeObject(i);
				writeSysMessage(SYSMESS_WORN);
				count++;
				ACCnewline();
			}
		}
	}
	if (!count) 
	{
		 writeSysMessage(SYSMESS_CARRYING_NOTHING);
		 ACCnewline();
	}

	if (!listnpcs_with_objects)
	{
		var numNPC = getNPCCountAt(LOCATION_CARRIED);
		if (numNPC)	ACClistnpc(LOCATION_CARRIED);
	}
	done_flag = true;
}

function desc()
{
	describe_location_flag = true;
}


function ACCquit()
{
	inQUIT = true;
	writeSysMessage(SYSMESS_AREYOUSURE);
}


function ACCend()
{
	$('.input').hide();
	inEND = true;
	writeSysMessage(SYSMESS_PLAYAGAIN);
	done_flag = true;
}


function done()
{
	done_flag = true;
}

function ACCok()
{
	writeSysMessage(SYSMESS_OK);
	done_flag = true;
}



function ACCramsave()
{
	ramsave_value = getSaveGameObject();
	var savegame_object = getSaveGameObject();	
	savegame =   JSON.stringify(savegame_object);
	localStorage.setItem('ngpaws_savegame_' + STR_RAMSAVE_FILENAME, savegame);
}

function ACCramload()
{
	if (ramsave_value==null) 
	{
		var json_str = localStorage.getItem('ngpaws_savegame_' + STR_RAMSAVE_FILENAME);
		if (json_str)
		{
			savegame_object = JSON.parse(json_str.trim());
			restoreSaveGameObject(savegame_object);
			ACCdesc();
			focusInput();
			return;
		}
		else
		{
			writeText (STR_RAMLOAD_ERROR); 
			done_flag = true; 
			return;
		}
	}
	restoreSaveGameObject(ramsave_value);
	ACCdesc();
}

function ACCsave()
{
	var savegame_object = getSaveGameObject();	
	savegame =   JSON.stringify(savegame_object);
	filename = prompt(getSysMessageText(SYSMESS_SAVEFILE),'').toUpperCase();; 
	localStorage.setItem('ngpaws_savegame_' + filename.toUpperCase(), savegame);
	ACCok();
}

 
function ACCload() 	
{
	var json_str;
	filename = prompt(getSysMessageText(SYSMESS_LOADFILE),'').toUpperCase();;
	json_str = localStorage.getItem('ngpaws_savegame_' + filename.toUpperCase());
	if (json_str)
	{
		savegame_object = JSON.parse(json_str.trim());
		restoreSaveGameObject(savegame_object);
	}
	else
	{
		writeSysMessage(SYSMESS_FILENOTFOUND);
		done_flag = true; return;
	}
	ACCdesc();
	focusInput();
}



function ACCturns()
{
	var turns = getFlag(FLAG_TURNS_HIGH) * 256 +  getFlag(FLAG_TURNS_LOW);
	writeSysMessage(SYSMESS_TURNS_START);
	writeText(turns + '');
	writeSysMessage(SYSMESS_TURNS_CONTINUE);
	if (turns > 1) writeSysMessage(SYSMESS_TURNS_PLURAL);
	writeSysMessage(SYSMESS_TURNS_END);
}

function ACCscore()
{
	var score = getFlag(FLAG_SCORE);
	writeSysMessage(SYSMESS_SCORE_START);
	writeTex(score + '');
	writeSysMessage(SYSMESS_SCORE_END);
}


function ACCcls()
{
	clearScreen();
}

function dropall()
{
	// Done in two different loops cause PAW did it like that, just a question of retro compatibility
	var i;
	for (i=0;i<num_objects;i++)	if (getObjectLocation(i) == LOCATION_CARRIED)setObjectLocation(i, getFlag(FLAG_LOCATION));
	for (i=0;i<num_objects;i++)	if (getObjectLocation(i) == LOCATION_WORN)setObjectLocation(i, getFlag(FLAG_LOCATION));
}


function ACCautog()
{
	objno = findMatchingObject(loc_here());
	if (objno != EMPTY_OBJECT) { ACCget(objno); return; };
	objno =findMatchingObject(LOCATION_CARRIED);
	if (objno != EMPTY_OBJECT) { ACCget(objno); return; };
	objno =findMatchingObject(LOCATION_WORN);
	if (objno != EMPTY_OBJECT) { ACCget(objno); return; };
	if (!bittest(getFlag(FLAG_PARSER_SETTINGS),7))  // Extended context for objects
	for (var i=0; i<num_objects;i++) // Try to find it in present containers/supporters
	{
		if (CNDpresent(i) && (isAccesibleContainer(i) || objectIsAttr(i, ATTR_SUPPORTER)) )  // If there is another object present that is an accesible container or a supporter
		{
			objno =findMatchingObject(i);
			if (objno != EMPTY_OBJECT) { ACCget(objno); return; };
		}
	}
	writeSysMessage(SYSMESS_CANTSEETHAT);
	ACCnewtext();
	ACCdone();
}


function ACCautod()
{
	var objno =findMatchingObject(LOCATION_CARRIED);
	if (objno != EMPTY_OBJECT) { ACCdrop(objno); return; };
	objno =findMatchingObject(LOCATION_WORN);
	if (objno != EMPTY_OBJECT) { ACCdrop(objno); return; };  
	objno =findMatchingObject(loc_here());
	if (objno != EMPTY_OBJECT) { ACCdrop(objno); return; };
	writeSysMessage(SYSMESS_YOUDONTHAVETHAT);
	ACCnewtext();
	ACCdone();
}


function ACCautow()
{
	var objno =findMatchingObject(LOCATION_CARRIED);
	if (objno != EMPTY_OBJECT) { ACCwear(objno); return; };
	objno =findMatchingObject(LOCATION_WORN);
	if (objno != EMPTY_OBJECT) { ACCwear(objno); return; };
	objno =findMatchingObject(loc_here());
	if (objno != EMPTY_OBJECT) { ACCwear(objno); return; };
	writeSysMessage(SYSMESS_YOUDONTHAVETHAT);
	ACCnewtext();
	ACCdone();
}


function ACCautor()
{
	var objno =findMatchingObject(LOCATION_WORN);
	if (objno != EMPTY_OBJECT) { ACCremove(objno); return; };
	objno =findMatchingObject(LOCATION_CARRIED);
	if (objno != EMPTY_OBJECT) { ACCremove(objno); return; };
	objno =findMatchingObject(loc_here());
	if (objno != EMPTY_OBJECT) { ACCremove(objno); return; };
	writeSysMessage(SYSMESS_YOURENOTWEARINGTHAT);
	ACCnewtext();
	ACCdone();
}



function ACCpause(value)
{
 if (value == 0) value = 256;
 pauseRemainingTime = Math.floor(value /50 * 1000);	
 inPause = true;
 showAnykeyLayer();
} 

function ACCgoto(locno)
{
 	setFlag(FLAG_LOCATION,locno);
}

function ACCmessage(mesno)
{
	writeMessage(mesno);
	ACCnewline();
}


function ACCremove(objno)
{
	success = false; 
	setFlag(FLAG_REFERRED_OBJECT, objno);
	setReferredObject(objno);
	var locno = getObjectLocation(objno);
	switch (locno)
	{
		case LOCATION_CARRIED:  
		case loc_here():
			writeSysMessage(SYSMESS_YOUARENOTWEARINGOBJECT);
			ACCnewtext();
			ACCdone();
			return;
			break;

		case LOCATION_WORN:
			if (getFlag(FLAG_OBJECTS_CARRIED_COUNT) >= getFlag(FLAG_MAXOBJECTS_CARRIED))
			{
				writeSysMessage(SYSMESS_CANTREMOVE_TOOMANYOBJECTS);
				ACCnewtext();
				ACCdone();
				return;
			}
			setObjectLocation(objno, LOCATION_CARRIED);
			writeSysMessage(SYSMESS_YOUREMOVEOBJECT);
			success = true;
			break;

		default: 
			writeSysMessage(SYSMESS_YOUARENOTWEARINGTHAT);
			ACCnewtext();
			ACCdone();
			return;
			break;
	}
}


function trytoGet(objno)  // auxiliaty function for ACCget
{
	if (getFlag(FLAG_OBJECTS_CARRIED_COUNT) >= getFlag(FLAG_MAXOBJECTS_CARRIED))
	{
		writeSysMessage(SYSMESS_CANTCARRYANYMORE);
		ACCnewtext();
		ACCdone();
		doall_flag = false;
		return;
	}
	var weight = getLocationObjectsWeight(objno);
	weight += getObjectWeight(objno);
	weight +=  getLocationObjectsWeight(LOCATION_CARRIED);
	weight +=  getLocationObjectsWeight(LOCATION_WORN);
	if (weight > getFlag(FLAG_MAXWEIGHT_CARRIED))
	{
		writeSysMessage(SYSMESS_WEIGHSTOOMUCH);
		ACCnewtext();
		ACCdone();
		return;
	}
	setObjectLocation(objno, LOCATION_CARRIED);
	writeSysMessage(SYSMESS_YOUTAKEOBJECT);
	success = true;
}


 function ACCget(objno)
 {
 	success = false; 
	setFlag(FLAG_REFERRED_OBJECT, objno);
	setReferredObject(objno);
	var locno = getObjectLocation(objno);
	switch (locno)
	{
		case LOCATION_CARRIED:  
		case LOCATION_WORN:  
			writeSysMessage(SYSMESS_YOUALREADYHAVEOBJECT);
			ACCnewtext();
			ACCdone();
			return;
			break;

		case loc_here():
			trytoGet(objno);
			break;

		default: 
			if  ((locno<=last_object_number) && (CNDpresent(locno)))    // If it's not here, carried or worn but it present, that means that bit 7 of flag 12 is cleared, thus you can get objects from present containers/supporters
			{
				trytoGet(objno);
			}
			else
			{
				writeSysMessage(SYSMESS_CANTSEETHAT);
				ACCnewtext();
				ACCdone();
				return;
				break;
		    }
	}
 }

function ACCdrop(objno)
{
	success = false; 
	setFlag(FLAG_REFERRED_OBJECT, objno);
	setReferredObject(objno);
	var locno = getObjectLocation(objno);
	switch (locno)
	{
		case LOCATION_WORN:  
			writeSysMessage(SYSMESS_YOUAREALREADYWEARINGTHAT);
			ACCnewtext();
			ACCdone();
			return;
			break;

		case loc_here():  
			writeSysMessage(SYSMESS_YOUDONTHAVEOBJECT);
			ACCnewtext();
			ACCdone();
			return;
			break;


		case LOCATION_CARRIED:  
			setObjectLocation(objno, loc_here());
			writeSysMessage(SYSMESS_YOUDROPOBJECT);
			success = true;
			break;

		default: 
			writeSysMessage(SYSMESS_YOUDONTHAVETHAT);
			ACCnewtext();
			ACCdone();
			return;
			break;
	}
}

function ACCwear(objno)
{
	success = false; 
	setFlag(FLAG_REFERRED_OBJECT, objno);
	setReferredObject(objno);
	var locno = getObjectLocation(objno);
	switch (locno)
	{
		case LOCATION_WORN:  
			writeSysMessage(SYSMESS_YOUAREALREADYWAERINGOBJECT);
			ACCnewtext();
			ACCdone();
			return;
			break;

		case loc_here():  
			writeSysMessage(SYSMESS_YOUDONTHAVEOBJECT);
			ACCnewtext();
			ACCdone();
			return;
			break;


		case LOCATION_CARRIED:  
			if (!objectIsWearable(objno))
			{
				writeSysMessage(SYSMESS_YOUCANTWEAROBJECT);
				ACCnewtext();
				ACCdone();
				return;
			}
			setObjectLocation(objno, LOCATION_WORN);
			writeSysMessage(SYSMESS_YOUWEAROBJECT);
			success = true;
			break;

		default: 
			writeSysMessage(SYSMESS_YOUDONTHAVETHAT);
			ACCnewtext();
			ACCdone();
			return;
			break;
	}
}



function ACCdestroy(objno)
{
	setObjectLocation(objno, LOCATION_NONCREATED);
}


function ACCcreate(objno)
{
	setObjectLocation(objno, loc_here());
}


function ACCswap(objno1,objno2)
{
	var locno1 = getObjectLocation (objno1);
	var locno2 = getObjectLocation (objno2);
	ACCplace (objno1,locno2);
	ACCplace (objno2,locno1);
	setReferredObject(objno2);
}


function ACCplace(objno, locno)
{
	setObjectLocation(objno, locno);
}

function ACCset(flagno)
{
	setFlag(flagno, SET_VALUE);
}

function ACCclear(flagno)
{
	setFlag(flagno,0);
}

function ACCplus(flagno,value)
{
	var newval = getFlag(flagno) + value;
	setFlag(flagno, newval);
}

function ACCminus(flagno,value)
{
    var newval = getFlag(flagno) - value;
    if (newval < 0) newval = 0;
	setFlag(flagno, newval);
}

function ACClet(flagno,value)
{
	setFlag(flagno,value);
}

function ACCnewline()
{
	writeText(STR_NEWLINE);
}

function ACCprint(flagno)
{
	writeText(getFlag(flagno) +'');
}

function ACCsysmess(sysno)
{
	writeSysMessage(sysno);
}

function ACCcopyof(objno,flagno)
{
	setFlag(flagno, getObjectLocation(objno))
}

function ACCcopyoo(objno1, objno2)
{
	setObjectLocation(objno2,getObjectLocation(objno1));
	setReferredObject(objno2);
}

function ACCcopyfo(flagno,objno)
{
	setObjectLocation(objno, getFlag(flagno));
}

function ACCcopyff(flagno1, flagno2)
{
	setFlag(flagno2, getFlag(flagno1));
}

function ACCadd(flagno1, flagno2)
{
	var newval = getFlag(flagno1) + getFlag(flagno2);
	setFlag(flagno2, newval);
}

function ACCsub(flagno1,flagno2)
{
	var newval = getFlag(flagno2) - getFlag(flagno1);
	if (newval < 0) newval = 0;
	setFlag(flagno2, newval);
}


function CNDparse()
{
	return (!getLogicSentence());
}


function ACClistat(locno, container_objno)   // objno is a container/suppoter number, used to list contents of objects
{
  var listingContainer = false;
  if (arguments.length > 1) listingContainer = true;
  var objscount =  getObjectCountAt(locno);
  var concealed_objcount = getObjectCountAtWithAttr(locno, ATTR_CONCEALED);
  var scenery_objcount = getObjectCountAtWithAttr(locno, ATTR_SCENERY);
  objscount = objscount - concealed_objcount - scenery_objcount;
  if (!listingContainer) setFlag(FLAG_OBJECT_LIST_FORMAT, bitclear(getFlag(FLAG_OBJECT_LIST_FORMAT),7)); 
  if (!objscount) return;
  var continouslisting = bittest(getFlag(FLAG_OBJECT_LIST_FORMAT),6);
  if (listingContainer) 
  	{
  		writeText(' (');
  		if (objectIsAttr(container_objno, ATTR_SUPPORTER)) writeSysMessage(SYSMESS_OVER_YOUCANSEE); else if (objectIsAttr(container_objno, ATTR_CONTAINER)) writeSysMessage(SYSMESS_INSIDE_YOUCANSEE);
  		continouslisting = true;  // listing contents of container always continuous
  	}
  
  if (!listingContainer)
  {
    setFlag(FLAG_OBJECT_LIST_FORMAT, bitset(getFlag(FLAG_OBJECT_LIST_FORMAT),7)); 
    if (!continouslisting) ACCnewline();
  }
  var progresscount = 0;
  for (var i=0;i<num_objects;i++)
  {
  	if (getObjectLocation(i) == locno)
  		if  ( ((!objectIsNPC(i)) || (!bittest(getFlag(FLAG_PARSER_SETTINGS),3)))  && (!objectIsAttr(i,ATTR_CONCEALED)) && (!objectIsAttr(i,ATTR_SCENERY))   ) // if not an NPC or parser setting say NPCs are considered objects, and object is not concealed nor scenery
  		  { 
  		     writeText(getObjectText(i)); 
  		     if ((objectIsAttr(i,ATTR_SUPPORTER))  || (  (objectIsAttr(i,ATTR_TRANSPARENT))  && (objectIsAttr(i,ATTR_CONTAINER))))  ACClistat(i, i);
  		     progresscount++
  		     if (continouslisting)
  		     {
		  			if (progresscount <= objscount - 2) writeSysMessage(SYSMESS_LISTSEPARATOR);
  					if (progresscount == objscount - 1) writeSysMessage(SYSMESS_LISTLASTSEPARATOR);
  					if (!listingContainer) if (progresscount == objscount ) writeSysMessage(SYSMESS_LISTEND);
  			 } else ACCnewline();
  		  }; 
  }
  if (arguments.length > 1) writeText(')');
}


function ACClistnpc(locno)
{
  var npccount =  getNPCCountAt(locno);
  setFlag(FLAG_OBJECT_LIST_FORMAT, bitclear(getFlag(FLAG_OBJECT_LIST_FORMAT),5)); 
  if (!npccount) return;
  setFlag(FLAG_OBJECT_LIST_FORMAT, bitset(getFlag(FLAG_OBJECT_LIST_FORMAT),5)); 
  continouslisting = bittest(getFlag(FLAG_OBJECT_LIST_FORMAT),6);
  writeSysMessage(SYSMESS_NPCLISTSTART);
  if (!continouslisting) ACCnewline();
  if (npccount==1)  writeSysMessage(SYSMESS_NPCLISTCONTINUE); else writeSysMessage(SYSMESS_NPCLISTCONTINUE_PLURAL);
  var progresscount = 0;
  var i;
  for (i=0;i<num_objects;i++)
  {
  	if (getObjectLocation(i) == locno)
  		if ( (objectIsNPC(i)) && (!objectIsAttr(i,ATTR_CONCEALED)) ) // only NPCs not concealed
  		  { 
  		     writeText(getObjectText(i)); 
  		     progresscount++
  		     if (continouslisting)
  		     {
		  	 	if (progresscount <= npccount - 2) writeSysMessage(SYSMESS_LISTSEPARATOR);
  			 	if (progresscount == npccount - 1) writeSysMessage(SYSMESS_LISTLASTSEPARATOR);
  			 	if (progresscount == npccount ) writeSysMessage(SYSMESS_LISTEND);
  			 } else ACCnewline();
  		  }; 
  }
}


function ACClistobj()
{
  var locno = loc_here();
  var objscount =  getObjectCountAt(locno);
  var concealed_objcount = getObjectCountAtWithAttr(locno, ATTR_CONCEALED);
  var scenery_objcount = getObjectCountAtWithAttr(locno, ATTR_SCENERY);
  objscount = objscount - concealed_objcount - scenery_objcount;
  if (objscount)
  {
	  writeSysMessage(SYSMESS_YOUCANSEE);
      ACClistat(loc_here());
  }
}

function ACCprocess(procno)
{
	if (procno > last_process) 
	{
		writeText(STR_WRONG_PROCESS);
		ACCnewtext();
		ACCdone();
	}
	callProcess(procno);
}

function ACCmes(mesno)
{
	writeMessage(mesno);
}

function ACCmode(mode)
{
	setFlag(FLAG_MODE, mode);
}

function ACCtime(length, settings)
{
	setFlag(FLAG_TIMEOUT_LENGTH, length);
	setFlag(FLAG_TIMEOUT_SETTINGS, settings);
}

function ACCdoall(locno)
{
	doall_flag = true;
	if (locno == LOCATION_HERE) locno = loc_here();
	// Each object will be considered for doall loop if is at locno and it's not the object specified by the NOUN2/ADJECT2 pair and it's not a NPC (or setting to consider NPCs as objects is set)
	setFlag(FLAG_DOALL_LOC, locno);
	var doall_obj;
	doall_loop:
	for (doall_obj=0;(doall_obj<num_objects) && (doall_flag);doall_obj++)  
	{
		if (getObjectLocation(doall_obj) == locno)
			if ((!objectIsNPC(doall_obj)) || (!bittest(getFlag(FLAG_PARSER_SETTINGS),3))) 
 			 if (!objectIsAttr(doall_obj, ATTR_CONCEALED)) 
 			  if (!objectIsAttr(doall_obj, ATTR_SCENERY)) 
				if (!( (objectsNoun[doall_obj]==getFlag(FLAG_NOUN2))  &&    ((objectsAdjective[doall_obj]==getFlag(FLAG_ADJECT2)) || (objectsAdjective[doall_obj]==EMPTY_WORD)) ) ) // implements "TAKE ALL EXCEPT BIG SWORD"
				{
					setFlag(FLAG_NOUN1, objectsNoun[doall_obj]);
					setFlag(FLAG_ADJECT1, objectsAdjective[doall_obj]);
					setReferredObject(doall_obj);
					callProcess(process_in_doall);
					if (describe_location_flag) 
						{
							doall_flag = false;
							entry_for_doall = '';
							break doall_loop;
						}
				}
	}
	doall_flag = false;
	entry_for_doall = '';
	if (describe_location_flag) descriptionLoop();
}

function ACCprompt(value)  // deprecated
{
	setFlag(FLAG_PROMPT, value);
}


function ACCweigh(objno, flagno)
{
	var weight = getObjectWeight(objno);
	setFlag(flagno, weight);
}

function ACCputin(objno, locno)
{
	success = false;
	setReferredObject(objno);
	if (getObjectLocation(objno) == LOCATION_WORN)
	{
		writeSysMessage(SYSMESS_YOUAREALREADYWEARINGTHAT);
		ACCnewtext();
		ACCdone();
		return;
	}

	if (getObjectLocation(objno) == loc_here())
	{
		writeSysMessage(SYSMESS_YOUDONTHAVEOBJECT);
		ACCnewtext();
		ACCdone();
		return;
	}

	if (getObjectLocation(objno) == LOCATION_CARRIED)
	{
		setObjectLocation(objno, locno);
		if (objectIsAttr(locno, ATTR_SUPPORTER)) writeSysMessage(SYSMESS_YOUPUTOBJECTON); else writeSysMessage(SYSMESS_YOUPUTOBJECTIN);
		writeText(getObjectFixArticles(locno));
		writeSysMessage(SYSMESS_PUTINTAKEOUTTERMINATION);
		success = true;
		return;
	}

	writeSysMessage(SYSMESS_YOUDONTHAVEOBJECT);
	ACCnewtext();
	ACCdone();
}


function ACCtakeout(objno, locno)
{
	success = false;
	setReferredObject(objno);
	if ((getObjectLocation(objno) == LOCATION_WORN) || (getObjectLocation(objno) == LOCATION_CARRIED))
	{
		writeSysMessage(SYSMESS_YOUALREADYHAVEOBJECT);
		ACCnewtext();
		ACCdone();
		return;
	}

	if (getObjectLocation(objno) == loc_here())
	{
		if (objectIsAttr(locno, ATTR_SUPPORTER)) writeSysMessage(SYSMESS_YOUCANTTAKEOBJECTFROM); else writeSysMessage(SYSMESS_YOUCANTTAKEOBJECTOUTOF);
		writeText(getObjectFixArticles(locno));
		writeSysMessage(SYSMESS_PUTINTAKEOUTTERMINATION);
		ACCnewtext();
		ACCdone();
		return;
	}

	if (getObjectWeight(objno) + getLocationObjectsWeight(LOCATION_WORN) + getLocationObjectsWeight(LOCATION_CARRIED) >  getFlag(FLAG_MAXWEIGHT_CARRIED))
	{
		writeSysMessage(SYSMESS_WEIGHSTOOMUCH);
		ACCnewtext();
		ACCdone();
		return;
	}

	if (getFlag(FLAG_OBJECTS_CARRIED_COUNT) >= getFlag(FLAG_MAXOBJECTS_CARRIED))
	{		
		writeSysMessage(SYSMESS_CANTCARRYANYMORE);
		ACCnewtext();
		ACCdone();
		return;
	}

	setObjectLocation(objno, LOCATION_CARRIED);
	writeSysMessage(SYSMESS_YOUTAKEOBJECT);
	success = true;


}
function ACCnewtext()
{
	parser_order_buffer = '';
}

function ACCability(maxObjectsCarried, maxWeightCarried)
{
	setFlag(FLAG_MAXOBJECTS_CARRIED, maxObjectsCarried);
	setFlag(FLAG_MAXWEIGHT_CARRIED, maxWeightCarried);
}

function ACCweight(flagno)
{
	var weight_carried = getLocationObjectsWeight(LOCATION_CARRIED);
	var weight_worn = getLocationObjectsWeight(LOCATION_WORN);
	var total_weight = weight_worn + weight_carried;
	setFlag(flagno, total_weight);
}


function ACCrandom(flagno)
{
	 setFlag(flagno, 1 + Math.floor((Math.random()*100)));
}

function ACCwhato()
{
	var whatofound = getReferredObject();
	if (whatofound != EMPTY_OBJECT) setReferredObject(whatofound);
}

function ACCputo(locno)
{
	setObjectLocation(getFlag(FLAG_REFERRED_OBJECT), locno);
}

function ACCnotdone()
{
	done_flag = true;
}

function ACCautop(locno)
{
	var objno =findMatchingObject(LOCATION_CARRIED);
	if (objno != EMPTY_OBJECT) { ACCputin(objno, locno); return; };
	objno =findMatchingObject(LOCATION_WORN);
	if (objno != EMPTY_OBJECT) { ACCputin(objno, locno); return; };
	objno = findMatchingObject(loc_here());
	if (objno != EMPTY_OBJECT) { ACCputin(objno, locno); return; };
	objno = findMatchingObject(null); // anywhere
	if (objno != EMPTY_OBJECT) 
		{ 
			writeSysMessage(SYSMESS_YOUDONTHAVETHAT);
			ACCnewtext();
			ACCdone();
			return; 
		};

	writeSysMessage(SYSMESS_CANTDOTHAT);
	ACCnewtext();
	ACCdone();
}


function ACCautot(locno)
{

	var objno =findMatchingObject(locno);
	if (objno != EMPTY_OBJECT) { ACCtakeout(objno, locno); return; };
	objno =findMatchingObject(LOCATION_CARRIED);
	if (objno != EMPTY_OBJECT) { ACCtakeout(objno, locno); return; };
	objno =findMatchingObject(LOCATION_WORN);
	if (objno != EMPTY_OBJECT) { ACCtakeout(objno, locno); return; };
	objno = findMatchingObject(loc_here());
	if (objno != EMPTY_OBJECT) { ACCtakeout(objno, locno); return; };

	objno = findMatchingObject(null); // anywhere
	if (objno != EMPTY_OBJECT) 
		{ 
			if (objectIsAttr(locno, ATTR_SUPPORTER)) writeSysMessage(SYSMESS_YOUCANTTAKEOBJECTFROM); else writeSysMessage(SYSMESS_YOUCANTTAKEOBJECTOUTOF);
			writeText(getObjectFixArticles(locno));
			writeSysMessage(SYSMESS_PUTINTAKEOUTTERMINATION)
			ACCnewtext();
			ACCdone();
			return; 
		};

	writeSysMessage(SYSMESS_CANTDOTHAT);
	ACCnewtext();
	ACCdone();
	
}


function CNDmove(flagno)
{
	var locno = getFlag(flagno);
	var dirno = getFlag(FLAG_VERB);
	var destination = getConnection( locno,  dirno);
	if (destination != -1) 
		{
			 setFlag(flagno, destination);
			 return true;
		}
	return false;
}


function ACCextern(writeno)
{
	eval(writemessages[writeno]);
}


function ACCpicture(picno)
{
	drawPicture(picno);
}



function ACCgraphic(option)
{
	graphicsON = (option==1);  
	if (!graphicsON) hideGraphicsWindow();	
}

function ACCbeep(sfxno, channelno, times)
{
	if ((channelno <1) || (channelno >MAX_CHANNELS)) return;  //SFX channels from 1 to MAX_CHANNELS, channel 0 is for location music and can't be used here
	sfxplay(sfxno, channelno, times, 'play');
}

function ACCsound(value)
{
	soundsON = (value==1);  
	if (!soundsON) sfxstopall();
}

function CNDozero(objno, attrno)
{
	if (attrno > 63) return false;
	return !objectIsAttr(objno, attrno);

}

function CNDonotzero(objno, attrno)
{
	return objectIsAttr(objno, attrno);
}

function ACCoset(objno, attrno)
{
	if (attrno > 63) return;
	if (attrno <= 31)
	{
		attrs = getObjectLowAttributes(objno);
		var attrs = bitset(attrs, attrno);
		setObjectLowAttributes(objno, attrs);
		return;
	}
	var attrs = getObjectHighAttributes(objno);
	attrno = attrno - 32;
	attrs = bitset(attrs, attrno);
	setObjectHighAttributes(objno, attrs);

}

function ACCoclear(objno, attrno)
{
	if (attrno > 63) return;
	if (attrno <= 31)
	{
		var attrs = getObjectLowAttributes(objno);
		attrs = bitclear(attrs, attrno);
		setObjectLowAttributes(objno, attrs);
		return;
	}
	var attrs = getObjectHighAttributes(objno);
	attrno = attrno - 32;
	attrs = bitclear(attrs, attrno);
	setObjectHighAttributes(objno, attrs);

}


function CNDislight()
{
	if (!isDarkHere()) return true;
	return lightObjectsPresent();
}



function CNDisnotlight()
{
	return ! CNDislight();
}

function ACCversion()
{
	writeText(STR_RUNTIME_VERSION);
}


function ACCwrite(writeno)
{
	writeWriteMessage(writeno);
}

function ACCwriteln(writeno)
{
	writeWriteMessage(writeno);
	ACCnewline();
}

function ACCrestart()
{
  process_restart = true;
}


function ACCtranscript()
{
	$('#transcript_area').html(transcript);
	$('.transcript_layer').show();
	inTranscript = true;
}

function ACCanykey()
{
	writeSysMessage(SYSMESS_PRESSANYKEY);
	inAnykey = true;
}

function ACCgetkey(flagno)
{
	getkey_return_flag = flagno;
	inGetkey = true;
}


//////////////////
//   LEGACY     //
//////////////////

// From PAW PC
function ACCbell()
{
 	// Empty, PAW PC legacy, just does nothing 
}


// From PAW Spectrum
function ACCreset()
{
	// Legacy condact, does nothing now
}


function ACCpaper(color)
{
	// Legacy condact, does nothing now, use CSS styles
}

function ACCink(color)
{
	// Legacy condact, does nothing now, use CSS styles
}

function ACCborder(color)
{
	// Legacy condact, does nothing now, use CSS styles
}

function ACCcharset(value)
{
	// Legacy condact, does nothing now, use CSS styles
}

function ACCline(lineno)
{
	// Legacy condact, does nothing now, use CSS styles
}

function ACCinput()
{
	// Legacy condact, does nothing now
}

function ACCsaveat()
{
	// Legacy condact, does nothing now
}

function ACCbackat()
{
	// Legacy condact, does nothing now
}

function ACCprintat()
{
	// Legacy condact, does nothing now
}

function ACCprotect()
{
	// Legacy condact, does nothing now
}

// From Superglus


function ACCdebug()
{
	// Legacy condact, does nothing now		
}




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////// CONDACTS FOR COMPILER //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function CNDverb(wordno)
{
	return (getFlag(FLAG_VERB) == wordno);
}


function CNDnoun1(wordno)
{
	return (getFlag(FLAG_NOUN1) == wordno);
}

//   PLUGINS    ;

//CND ASK W 14 14 1 0

// Global vars for ASK


var inAsk = false;
var ask_responses = null;
var ask_flagno = null;



function ACCask(writeno, writenoOptions, flagno)
{
	inAsk = true;
	writeWriteMessage(writeno);
	ask_responses = getWriteMessageText(writenoOptions);
	ask_flagno = flagno;
}



// hook replacement
var old_ask_h_keydown  = h_keydown;
h_keydown  = function (event)
{
	if (inAsk)
	{
		var keyCodeAsChar = String.fromCharCode(event.keyCode).toLowerCase();
		if (ask_responses.indexOf(keyCodeAsChar)!= -1)
		{
			setFlag(ask_flagno, ask_responses.indexOf(keyCodeAsChar));
			inAsk = false;
			event.preventDefault();
            $('.input').show();
		    $('.input').focus();
		    hideBlock();
			waitKeyCallback();
		};
		return false; // if we are in ASK condact, no keypress should be considered other than ASK response
	} else return old_ask_h_keydown(event);
}

//CND ATGE C 8 0 0 0

function CNDatge(locno)
{
	return (getFlag(FLAG_LOCATION) >= locno);
}

//CND ATLE C 8 0 0 0

function CNDatle(locno)
{
	return (getFlag(FLAG_LOCATION) <= locno);
}

//CND BCLEAR A 1 2 0 0

function ACCbclear(flagno, bitno)
{
	if (bitno>=32) return;
	setFlag(flagno, bitclear(getFlag(flagno), bitno));
}
//CND BLOCK A 14 2 2 0

function ACCblock(writeno, picno, procno)
{
   inBlock = true;
   disableInterrupt();
   $('.block_layer').hide();
   var text = getWriteMessageText(writeno);
   $('.block_text').html(text);
   
	var filename = getResourceById(RESOURCE_TYPE_IMG, picno);
	if (filename)
	{
		var imgsrc = '<img class="block_picture" src="' + filename + '" />';
		$('.block_graphics').html(imgsrc);
	}
    if (procno == 0 ) unblock_process ==null; else unblock_process = procno;
    $('.block_layer').show();

}
//CND BNEG A 1 2 0 0

function ACCbneg(flagno, bitno)
{
	if (bitno>=32) return;
	setFlag(flagno, bitneg(getFlag(flagno),bitno));
}
//CND BNOTZERO C 1 2 0 0

function CNDbnotzero(flagno, bitno)
{
	if (bitno>=32) return false;
	return (bittest(getFlag(flagno), bitno));
}

//CND BREAK A 0 0 0 0

function ACCbreak()
{
	doall_flag = false; 
	entry_for_doall = '';
}
//CND BSET A 1 2 0 0

function ACCbset(flagno, bitno)
{
	if (bitno>=32) return;
	setFlag(flagno, bitset(getFlag(flagno),bitno));
}
//CND BZERO C 1 2 0 0

function CNDbzero(flagno, bitno)
{
	if (bitno>=32) return false;
	return (!bittest(getFlag(flagno), bitno));
}
//CND CLEAREXIT A 2 0 0 0

function ACCclearexit(wordno)
{
	if ((wordno >= NUM_CONNECTION_VERBS) || (wordno< 0 )) return;
	setConnection(loc_here(),wordno, -1);
}
//CND COMMAND A 2 0 0 0

function ACCcommand(value)
{
	if (value) {$('.input').show();$('.input').focus();} else $('.input').hide();
}
//CND DIV A 1 2 0 0

function ACCdiv(flagno, valor)
{
	if (valor == 0) return;
	setFlag(flagno, Math.floor(getFlag(flagno) / valor));
}
//CND EXITS A 8 5 0 0

function ACCexits(locno,mesno)
{
  if ((getFlag(FLAG_LIGHT) == 0) || ((getFlag(FLAG_LIGHT) != 0) && lightObjectsPresent()))
  {
  		var exitcount = 0;
  		for (i=0;i<NUM_CONNECTION_VERBS;i++) if (getConnection(locno, i) != -1) exitcount++;
      if (exitcount)
      {
    		writeMessage(mesno);
    		var exitcountprogress = 0;
    		for (i=0;i<NUM_CONNECTION_VERBS;i++) if (getConnection(locno, i) != -1)
    		{ 
    			exitcountprogress++;
    			writeMessage(mesno + 2 + i);
    			if (exitcountprogress == exitcount) writeSysMessage(SYSMESS_LISTEND);
    			if (exitcountprogress == exitcount-1) writeSysMessage(SYSMESS_LISTLASTSEPARATOR);
    			if (exitcountprogress <= exitcount-2) writeSysMessage(SYSMESS_LISTSEPARATOR);
  		  }
      } else writeMessage(mesno + 1);
  } else writeMessage(mesno + 1);
}

//CND FADEIN A 2 2 2 0

function ACCfadein(sfxno, channelno, times)
{
	if ((channelno <1) || (channelno >MAX_CHANNELS)) return;  //SFX channels from 1 to MAX_CHANNELS, channel 0 is for location music and can't be used here
	sfxplay(sfxno, channelno, times, 'fadein');
}
//CND FADEOUT A 2 2 0 0

function ACCfadeout(channelno, value)
{
	if ((channelno <1) || (channelno >MAX_CHANNELS)) return;  //SFX channels from 1 to MAX_CHANNELS, channel 0 is for location music and can't be used here
	sfxfadeout(channelno, value);
}
//CND GE C 1 2 0 0

function CNDge(flagno, valor)
{
	return (getFlag(flagno)>=valor);
}
//CND GETEXIT A 2 2 0 0

function ACCgetexit(value,flagno)
{
	if (value >= NUM_CONNECTION_VERBS) 
		{
			setFlag(flagno, NO_EXIT);
			return;
		}
	var locno = getConnection(loc_here(),value);
	if (locno == -1)
		{
			setFlag(flagno, NO_EXIT);
			return;
		}
	setFlag(flagno,locno);
}
//CND HELP A 0 0 0 0

function ACChelp()
{
	if (getLang()=='EN') EnglishHelp(); else SpanishHelp();
}	

function EnglishHelp()
{
	writeText('HOW DO I SEND COMMANDS TO THE PC?');
	writeText(STR_NEWLINE);
	writeText('Use simple orders: OPEN DOOR, TAKE KEY, GO UP, etc.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I MOVE IN THE MAP?');
	writeText(STR_NEWLINE);
	writeText('Usually you will have to use compass directions as north (shortcut: "N"), south (S), east (E), west (W) or other directions (up, down, enter, leave, etc.). Some games allow complex order like "go to well". Usually you would be able to know avaliable exits by location description, some games also provide the "EXITS" command.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I CHECK MY INVENTORY?');
	writeText(STR_NEWLINE);
	writeText('type INVENTORY (shortcut "I")');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I USE THE OBJECTS?');
	writeText(STR_NEWLINE);
	writeText('Use the proper verb, that is, instead of USE KEY type OPEN.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I CHECK SOMETHING CLOSELY?');
	writeText(STR_NEWLINE);
	writeText('Use "examine" verb: EXAMINE DISH. (shortcut: EX)');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I SEE AGAIN THE CURRENT LOCATION DSCRIPTION?');
	writeText(STR_NEWLINE);
	writeText('Type LOOK (shortcut "M").');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I TALK TO OTHER CHARACTERS?');
	writeText(STR_NEWLINE);
	writeText('Most common methods are [CHARACTER, SENTENCE] or [SAY CHARACTER "SENTENCE"]. For instance: [JOHN, HELLO] o [SAY JOHN "HELLO"]. Some games also allow just [TALK TO JOHN]. ');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I PUT SOMETHING IN A CONTAINER, HOW CAN I TAKE SOMETHING OUT?');
	writeText(STR_NEWLINE);
	writeText('PUT KEY IN BOX. TAKE KEY OUT OF BOX. INSERT KEY IN BOX. EXTRACT KEY FROM BOX.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I PUT SOMETHING ON SOMETHING ELSE?');
	writeText(STR_NEWLINE);
	writeText('PUT KEY ON TABLE. TAKE KEY FROM TABLE');
	writeText(STR_NEWLINE + STR_NEWLINE);
}

function SpanishHelp()
{
	writeText('Â¿CÃ“MO DOY ORDENES AL PERSONAJE?');
	writeText(STR_NEWLINE);
	writeText('Utiliza Ã³rdenes en imperativo o infinitivo: ABRE PUERTA, COGER LLAVE, SUBIR, etc.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('Â¿CÃ“MO ME MUEVO POR EL JUEGO?');
	writeText(STR_NEWLINE);
	writeText('Por regla general, mediante los puntos cardinales como norte (abreviado "N"), sur (S), este (E), oeste (O) o direcciones espaciales (arriba, abajo, bajar, subir, entrar, salir, etc.). Algunas aventuras permiten tambiÃ©n cosas como "ir a pozo". Normalmente podrÃ¡s saber en que direcciÃ³n puedes ir por la descripciÃ³n del sitio, aunque algunos juegos facilitan el comando "SALIDAS" que te dirÃ¡ exactamente cuales hay.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('Â¿CÃ“MO PUEDO SABER QUE OBJETOS LLEVO?');
	writeText(STR_NEWLINE);
	writeText('Teclea INVENTARIO (abreviado "I")');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('Â¿CÃ“MO USO LOS OBJETOS?');
	writeText(STR_NEWLINE);
	writeText('Utiliza el verbo correcto, en lugar de USAR ESCOBA escribe BARRER.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('Â¿CÃ“MO PUEDO MIRAR DE CERCA UN OBJETO U OBSERVARLO MÃS DETALLADAMENTE?');
	writeText(STR_NEWLINE);
	writeText('Con el verbo examinar: EXAMINAR PLATO. Generalmente se puede usar la abreviatura "EX" : EX PLATO.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('Â¿CÃ“MO PUEDO VER DE NUEVO LA DESCRIPCIÃ“N DEL SITIO DONDE ESTOY?');
	writeText(STR_NEWLINE);
	writeText('Escribe MIRAR (abreviado "M").');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('Â¿CÃ“MO HABLO CON LOS PERSONAJES?');
	writeText(STR_NEWLINE);
	writeText('Los modos mÃ¡s comunes son [PERSONAJE, FRASE] o [DECIR A PERSONAJE "FRASE"]. Por ejemplo: [LUIS, HOLA] o [DECIR A LUIS "HOLA"]. En algunas aventuras tambiÃ©n se puede utilizar el formato [HABLAR A LUIS]. ');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('Â¿CÃ“MO METO ALGO EN UN CONTENEDOR? Â¿COMO SACO ALGO?');
	writeText(STR_NEWLINE);
	writeText('METER LLAVE  EN CAJA. SACAR LLAVE DE CAJA');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('Â¿CÃ“MO PONGO ALGO SOBRE ALGO? Â¿COMO LO QUITO?');
	writeText(STR_NEWLINE);
	writeText('PONER LLAVE EN MESA. COGER LLAVE DE MESA');
	writeText(STR_NEWLINE + STR_NEWLINE);
}
//CND HOOK A 14 0 0 5

function ACChook(writeno)
{
	h_code(writemessages[writeno]);
}
//CND ISDOALL C 0 0 0 0

function CNDisdoall()
{
	return doall_flag;	
}

//CND ISDONE C 0 0 0 0

function CNDisdone()
{
	return done_flag;	
}

//CND ISMOV C 0 0 0 0

function CNDismov()
{
	if ((getFlag(FLAG_VERB)<NUM_CONNECTION_VERBS) && (getFlag(FLAG_NOUN1)==EMPTY_WORD)) return true;

	if ((getFlag(FLAG_NOUN1)<NUM_CONNECTION_VERBS) && (getFlag(FLAG_VERB)==EMPTY_WORD)) return true;

    if ((getFlag(FLAG_VERB)<NUM_CONNECTION_VERBS) && (getFlag(FLAG_NOUN1)<NUM_CONNECTION_VERBS)) return true;
    
    return false;
}

//CND ISMUSIC C 0 0 0 0

function CNDismusic()
{
	return (CNDissound(0));	
}

//CND ISNOTDOALL C 0 0 0 0

function CNDisnotdoall()
{
	return !CNDisdoall();
}

//CND ISNOTDONE C 0 0 0 0

function CNDisnotdone()
{
	return !CNDisdone();
}

//CND ISNOTMOV C 0 0 0 0

function CNDisnotmov()
{
	return !CNDismov();	
}

//CND ISNOTMUSIC C 0 0 0 0

function CNDisnotmusic()
{
  return !CNDismusic();
}

//CND ISNOTRESP C 0 0 0 0

function CNDisnotresp()
{
	return !in_response;	
}

//CND ISNOTSOUND C 1 0 0 0

function CNDisnotsound(channelno)
{
  if ((channelno <1) || (channelno >MAX_CHANNELS)) return false;
  return !(CNDissound(channelno));
}
//CND ISRESP C 0 0 0 0

function CNDisresp()
{
	return in_response;	
}

//CND ISSOUND C 1 0 0 0

function CNDissound(channelno)
{
	if ((channelno <1 ) || (channelno > MAX_CHANNELS)) return false;
    return channelActive(channelno);
}
//CND ISVIDEO C 0 0 0 0

function CNDisvideo()
{
	if (typeof videoElement == 'undefined') return false;
	if (!videoLoopCount) return false;
	if (videoElement.paused) return false;
	return true;
}

//CND LE C 1 2 0 0

function CNDle(flagno, valor)
{
	return (getFlag(flagno) <= valor);
}
//CND LISTCONTENTS A 9 0 0 0

function ACClistcontents(locno)
{
   ACClistat(locno, locno)
}
//CND LOG A 14 0 0 0

function ACClog(writeno)
{
  console_log(writemessages[writeno]);
}
//CND MOD A 1 2 0 0

function ACCmod(flagno, valor)
{
	if (valor == 0) return;
	setFlag(flagno, Math.floor(getFlag(flagno) % valor));
}
//CND MUL A 1 2 0 0

function ACCmul(flagno, valor)
{
	if (valor == 0) return;
	setFlag(flagno, Math.floor(getFlag(flagno) * valor));
}
//CND NORESP A 0 0 0 0

function ACCnoresp()
{
	in_response = false;
}	

//CND NPCAT A 9 1 0 0

function ACCnpcat(locno, flagno)
{
	setFlag(flagno,getNPCCountAt(locno));
}

//CND OBJAT A 9 1 0 0

function ACCobjat(locno, flagno)
{
	setFlag(flagno, getObjectCountAt(locno));
}
//CND OBJFOUND C 2 9 0 0

function CNDobjfound(attrno, locno)
{

	for (var i=0;i<num_objects;i++) 
		if ((getObjectLocation(i) == locno) && (CNDonotzero(i,attrno))) {setFlag(FLAG_ESCAPE, i); return true; }
	setFlag(FLAG_ESCAPE, EMPTY_OBJECT);
	return false;
}

//CND OBJNOTFOUND C 2 9 0 0

function CNDobjnotfound(attrno, locno)
{
	for (var i=0;i<num_objects;i++) 
		if ((getObjectLocation(i) == locno) && (CNDonotzero(i,attrno))) {setFlag(FLAG_ESCAPE, i); return false; }

	setFlag(FLAG_ESCAPE, EMPTY_OBJECT);
	return true;
}
//CND ONEG A 4 2 0 0

function ACConeg(objno, attrno)
{
	if (attrno > 63) return;
	if (attrno <= 31)
	{
		var attrs = getObjectLowAttributes(objno);
		attrs = bitneg(attrs, attrno);
		setObjectLowAttributes(objno, attrs);
		return;
	}
	var attrs = getObjectHighAttributes(objno);
	attrno = attrno - 32;
	attrs = bitneg(attrs, attrno);
	setObjectHighAttributes(objno, attrs);
}

//CND PAUSEVIDEO A 0 0 0 0


function ACCpausevideo()
{
	if (typeof videoElement != 'undefined') 
		if (!videoElement.ended) 
		if (!videoElement.paused)
		   videoElement.pause();
}

//CND PICTUREAT A 2 2 2 0

function ACCpictureat(x,y,picno)
{
	var filename = getResourceById(RESOURCE_TYPE_IMG, picno);
	if (!filename) return;

	var screenImage = $('.location_picture');
	if (!screenImage) return;

	// Create a new image with the contents of current image, to be able to calculate original height of image
	var theImage = new Image();

	// Get curent height 
		theImage.onload = function()
		{
			var screenImageHeight = screenImage.height();
			var screenImageX = Math.floor((parseInt($('.graphics').width()) - screenImage.width())/2);;
	    	var imageHeight    = theImage.height; 
			// Calculate scale and x, Y position
			var scale =  screenImageHeight / imageHeight;
			x = Math.floor(x * scale);
			y = Math.floor(y * scale);


			// now load new image
			id = 'pictureat_' + picno;
			// add new image
			$('.graphics').append('<img  alt="" id="'+id+'" style="display:none" />');

			var newImage = new Image();
			newImage.onload = function ()
			{
				newimageHeight = Math.floor(newImage.height * scale);
				$('#' + id).css('position','absolute');
				$('#' + id).css('left', x + screenImageX + 'px');
				$('#' + id).css('top',y + 'px');
				$('#' + id).css('z-index','100');
				$('#' + id).attr('src', filename);
				$('#' + id).css('height',newimageHeight + 'px');
				$('#' + id).show();
			}
			newImage.src = filename;
			};
	theImage.src = screenImage.attr("src");

}

//CND PLAYVIDEO A 14 2 2 0

var videoLoopCount;
var videoEscapable;
var videoElement;

function ACCplayvideo(strno, loopCount, settings)
{
	videoEscapable = settings & 1; // if bit 0 of settings is 1, video can be interrupted with ESC key
	if (loopCount == 0) loopCount = -1;
	videoLoopCount = loopCount;

	str = '<video id="videoframe" height="100%">';
	str = str + '<source src="dat/' + writemessages[strno] + '.mp4" type="video/mp4" codecs="avc1.4D401E, mp4a.40.2">';
	str = str + '<source src="dat/' + writemessages[strno] + '.webm" type="video/webm" codecs="vp8.0, vorbis">';
	str = str + '<source src="dat/' + writemessages[strno] + '.ogg" type="video/ogg" codecs="theora, vorbis">';
	str = str + '</video>';
	$('.graphics').removeClass('hidden');
	$('.graphics').addClass('half_graphics');
	$('.text').removeClass('all_text');
	$('.text').addClass('half_text');
	$('.graphics').html(str);
	$('#videoframe').css('height','100%');
	$('#videoframe').css('display','block');
	$('#videoframe').css('margin-left','auto');
	$('#videoframe').css('margin-right','auto');
	$('#graphics').show();
	videoElement = document.getElementById('videoframe');
	videoElement.onended = function() 
	{
    	if (videoLoopCount == -1) videoElement.play();
    	else
    	{
    		videoLoopCount--;
    		if (videoLoopCount) videoElement.play();
    	}
	};
	videoElement.play();

}

// Hook into location description to avoid video playing to continue playing while hidden after changing location
var old_video_h_description_init = h_description_init ;
var h_description_init =  function  ()
{
	if ($("#videoframe").length > 0) $("#videoframe").remove();	
	old_video_h_description_init();
}

// Hook into keypress to cancel video playing if ESC is pressed and video is skippable

var old_video_h_keydown =  h_keydown;
h_keydown = function (event)
{
 	if ((event.keyCode == 27) && (typeof videoElement != 'undefined') && (!videoElement.ended) && (videoEscapable)) 
 	{
 		videoElement.pause(); 
 		return false;  // we've finished attending ESC press
 	}
 	else return old_video_h_keydown(event);
}




//CND RANDOMX A 1 2 0 0

function ACCrandomx(flagno, value)
{
	 setFlag(flagno, 1 + Math.floor((Math.random()*value)));
}
//CND RESP A 0 0 0 0

function ACCresp()
{
	in_response = true;
}	

//CND RESUMEVIDEO A 0 0 0 0


function ACCresumevideo()
{
	if (typeof videoElement != 'undefined') 
		if (videoElement.paused)
		  videoElement.play();
}

//CND RNDWRITE A 14 14 14 0

function ACCrndwrite(writeno1,writeno2,writeno3)
{
	var val = Math.floor((Math.random()*3));
	switch (val)
	{
		case 0 : writeWriteMessage(writeno1);break;
		case 1 : writeWriteMessage(writeno2);break;
		case 2 : writeWriteMessage(writeno3);break;
	}
}
//CND RNDWRITELN A 14 14 14 0

function ACCrndwriteln(writeno1,writeno2,writeno3)
{
	ACCrndwrite(writeno1,writeno2,writeno3);
	ACCnewline();
}
//CND SETEXIT A 2 2 0 0

function ACCsetexit(value, locno)
{
	if (value < NUM_CONNECTION_VERBS) setConnection(loc_here(), value, locno);
}
//CND SETWEIGHT A 4 2 0 0

function ACCsetweight(objno, value)
{
   objectsWeight[objno] = value;
}

//CND SILENCE A 2 0 0 0

function ACCsilence(channelno)
{
	if ((channelno <1) || (channelno >MAX_CHANNELS)) return;
	sfxstop(channelno);
}
//CND SOFTBLOCK A 2 0 0 0

function ACCsoftblock(procno)
{
   inBlock = true;
   disableInterrupt();

   $('.block_layer').css('display','none');
   $('.block_text').html('');
   $('.block_graphics').html('');
   $('.block_layer').css('background','transparent');
   if (procno == 0 ) unblock_process ==null; else unblock_process = procno;
   $('.block_layer').css('display','block');
}
//CND SPACE A 0 0 0 0

function ACCspace()
{
	writeText(' ');
}
//CND SYNONYM A 15 13 0 0

function ACCsynonym(wordno1, wordno2)
{
   if (wordno1!=EMPTY_WORD) setFlag(FLAG_VERB, wordno1);
   if (wordno2!=EMPTY_WORD)	setFlag(FLAG_NOUN1, wordno2);
}
//CND TEXTPIC A 2 2 0 0

function ACCtextpic(picno, align)
{
	var style = '';
	var post = '';
	var pre = '';
	switch(align)
	{
		case 0: post='<br style="clear:left">';break;
		case 1: style = 'float:left'; break;
		case 2: style = 'float:right'; break;
		case 3: pre='<center>';post='</center><br style="clear:left">';break;
	}
	filename = getResourceById(RESOURCE_TYPE_IMG, picno);
	if (filename)
	{
		var texto = pre + "<img alt='' class='textpic' style='"+style+"' src='"+filename+"' />" + post;
		writeText(texto);
		$(".text").scrollTop($(".text")[0].scrollHeight);
	}
}
//CND TITLE A 14 0 0 0

function ACCtitle(writeno)
{
	document.title = writemessages[writeno];
}
//CND VOLUME A 2 2 0 0

function ACCvolume(channelno, value)
{
	if ((channelno <1) || (channelno >MAX_CHANNELS)) return;
	sfxvolume(channelno, value);
}

//CND VOLUMEVIDEO A 2 0 0 0


function ACCvolumevideo(value)
{
	if (typeof videoElement != 'undefined') 
		videoElement.volume = value  / 65535;
}

//CND WARNINGS A 2 0 0 0

function ACCwarnings(value)
{
	if (value) showWarnings = true; else showWarnings = false;
}
//CND WHATOX A 1 0 0 0

function ACCwhatox(flagno)
{
	var whatoxfound = getReferredObject();
	setFlag(flagno,whatoxfound);
}

//CND WHATOX2 A 1 0 0 0

function ACCwhatox2(flagno)
{	
	var auxNoun = getFlag(FLAG_NOUN1);
	var auxAdj = getFlag(FLAG_ADJECT1);
	setFlag(FLAG_NOUN1, getFlag(FLAG_NOUN2));
	setFlag(FLAG_ADJECT1, getFlag(FLAG_ADJECT2));
	var whatox2found = getReferredObject();
	setFlag(flagno,whatox2found);
	setFlag(FLAG_NOUN1, auxNoun);
	setFlag(FLAG_ADJECT1, auxAdj);
}
//CND YOUTUBE A 14 0 0 0

function ACCyoutube(strno)
{

	var str = '<iframe id="youtube" width="560" height="315" src="http://www.youtube.com/embed/' + writemessages[strno] + '?autoplay=1&controls=0&modestbranding=1&showinfo=0" frameborder="0" allowfullscreen></iframe>'
	$('.graphics').removeClass('hidden');
	$('.graphics').addClass('half_graphics');
	$('.text').removeClass('all_text');
	$('.text').addClass('half_text');
	$('.graphics').html(str);
	$('#youtube').css('height','100%');
	$('#youtube').css('display','block');
	$('#youtube').css('margin-left','auto');
	$('#youtube').css('margin-right','auto');
	$('.graphics').show();
}


// Hook into location description to avoid video playing to continue playing while hidden after changing location
var old_youtube_h_description_init = h_description_init ;
var h_description_init =  function  ()
{
	if ($("#youtube").length > 0) $("#youtube").remove();	
	old_youtube_h_description_init();
}
//CND ZONE C 8 8 0 0

function CNDzone(locno1, locno2)
{

	if (loc_here()<locno1) return false;
	if (loc_here()>locno2) return false;
	return true;
}
// This file is (C) Carlos Sanchez 2014, released under the MIT license


// IMPORTANT: Please notice this file must be encoded with the same encoding the index.html file is, so the "normalize" function works properly.
//            As currently the ngpwas compiler generates utf-8, and the index.html is using utf-8 also, this file must be using that encoding.


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                         Auxiliary functions                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// General functions
String.prototype.rights= function(n){
    if (n <= 0)
       return "";
    else if (n > String(this).length)
       return this;
    else {
       var iLen = String(this).length;
       return String(this).substring(iLen, iLen - n);
    }
}


String.prototype.firstToLower= function()
{
	return  this.charAt(0).toLowerCase() + this.slice(1);	
	return a;
}


// Returns true if using Internet Explorer 9 or below, where some features are not supported
function isBadIE () {
  var myNav = navigator.userAgent.toLowerCase();
  if (myNav.indexOf('msie') == -1) return false;
  ieversion =  parseInt(myNav.split('msie')[1]);
  return (ieversion<10);
}


function runningLocal()
{
	return (window.location.protocol == 'file:');
}


// Levenshtein function

function getLevenshteinDistance (a, b)
{
  if(a.length == 0) return b.length; 
  if(b.length == 0) return a.length; 
 
  var matrix = [];
 
  // increment along the first column of each row
  var i;
  for(i = 0; i <= b.length; i++){
    matrix[i] = [i];
  }
 
  // increment each column in the first row
  var j;
  for(j = 0; j <= a.length; j++){
    matrix[0][j] = j;
  }
 
  // Fill in the rest of the matrix
  for(i = 1; i <= b.length; i++){
    for(j = 1; j <= a.length; j++){
      if(b.charAt(i-1) == a.charAt(j-1)){
        matrix[i][j] = matrix[i-1][j-1];
      } else {
        matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                                Math.min(matrix[i][j-1] + 1, // insertion
                                         matrix[i-1][j] + 1)); // deletion
      }
    }
  }
 
  return matrix[b.length][a.length];
};

// waitKey helper for all key-wait condacts

function waitKey(callbackFunction)
{
	waitkey_callback_function.push(callbackFunction);
	showAnykeyLayer();
}

function waitKeyCallback()
{
 	var callback = waitkey_callback_function.pop();
	callback();
	if (describe_location_flag) descriptionLoop();  		
}


// Check DOALL entry

function skipdoall(entry)
{
	return  ((doall_flag==true) && (entry_for_doall!='') && (current_process==process_in_doall) && (entry_for_doall > entry));
}

// Dynamic attribute use functions
function getNextFreeAttribute()
{
	var value = nextFreeAttr;
	nextFreeAttr++;
	return value;
}


// Gender functions

function getSimpleGender(objno)  // Simple, for english
{
 	isPlural = objectIsAttr(objno, ATTR_PLURALNAME);
 	if (isPlural) return "P";
 	isFemale = objectIsAttr(objno, ATTR_FEMALE);
 	if (isFemale) return "F";
 	isMale = objectIsAttr(objno, ATTR_MALE);
 	if (isMale) return "M";
    return "N"; // Neuter
}

function getAdvancedGender(objno)  // Complex, for spanish
{
 	var isPlural = objectIsAttr(objno, ATTR_PLURALNAME);
 	var isFemale = objectIsAttr(objno, ATTR_FEMALE);
 	var isMale = objectIsAttr(objno, ATTR_MALE);

 	if (!isPlural) 
 	{
	 	if (isFemale) return "F";
	 	if (isMale) return "M";
	    return "N"; // Neuter
 	}
 	else
 	{
	 	if (isFemale) return "PF";
	 	if (isMale) return "PM";
	 	return "PN"; // Neuter plural
 	}

}

function getLang()
{
	var value = bittest(getFlag(FLAG_PARSER_SETTINGS),5);
	if (value) return "ES"; else return "EN";
}

function getObjectFixArticles(objno)
{
	var object_text = getObjectText(objno);
	var object_words = object_text.split(' ');
	if (object_words.length == 1) return object_text;
	var candidate = object_words[0];
	object_words.splice(0, 1);
	if (getLang()=='EN')
	{
		if ((candidate!='an') && (candidate!='a') && (candidate!='some')) return object_text;
		return 'the ' + object_words.join(' ');
	}
	else
	{
		if ( (candidate!='un') && (candidate!='una') && (candidate!='unas') && (candidate!='unas') && (candidate!='alguna') && (candidate!='algunos') && (candidate!='algunas') && (candidate!='alguno')) return object_text;
		var gender = getAdvancedGender(objno);
		if (gender == 'F') return 'la ' + object_words.join(' ');
		if (gender == 'M') return 'el ' + object_words.join(' ');
		if (gender == 'N') return 'el ' + object_words.join(' ');
		if (gender == 'PF') return 'las ' + object_words.join(' ');
		if (gender == 'PM') return 'los ' + object_words.join(' ');
		if (gender == 'PN') return 'los ' + object_words.join(' ');
	}	


}



// JS level log functions
function console_log(string)
{
	if (typeof console != "undefined") console.log(string);
}


// Resources functions
function getResourceById(resource_type, id)
{
	for (var i=0;i<resources.length;i++)
	 if ((resources[i][0] == resource_type) && (resources[i][1]==id)) return resources[i][2];
	return false; 
}

// Flag read/write functions
function getFlag(flagno)
{
	 return flags[flagno];
}

function setFlag(flagno, value)
{
	 flags[flagno] = value;
}

// Locations functions
function loc_here()  // Returns current location, avoid direct use of flags
{
	 return getFlag(FLAG_LOCATION);
}


// Connections functions

function setConnection(locno1, dirno, locno2)
{
	connections[locno1][dirno] = locno2;
}

function getConnection(locno, dirno)
{
	return connections[locno][dirno];
}

// Objects text functions

function getObjectText(objno)
{
	return filterText(objects[objno]);
}


// Message text functions
function getMessageText(mesno)
{
	return filterText(messages[mesno]);
}

function getSysMessageText(sysno)
{
	return filterText(sysmessages[sysno]);
}

function getWriteMessageText(writeno)
{
	return filterText(writemessages[writeno]);
}

// Location text functions
function getLocationText(locno)
{
	return  filterText(locations[locno]);
}



// Output processing functions
function implementTag(tag)
{
	tagparams = tag.split('|');
	for (var tagindex=0;tagindex<tagparams.length-1;tagindex++) tagparams[tagindex] = tagparams[tagindex].trim();
	if (tagparams.length == 0) {writeWarning(STR_INVALID_TAG_SEQUENCE_EMPTY); return ''}

	switch(tagparams[0].toUpperCase())
	{
		case 'URL': if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					return '<a target="newWindow" href="' + tagparams[1]+ '">' + tagparams[2] + '</a>'; // Note: _blank would get the underscore character replaced by current selected object so I prefer to use a different target name as most browsers will open a new window
					break;
		case 'CLASS': if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					  return '<span class="' + tagparams[1]+ '">' + tagparams[2] + '</span>';
					  break;
		case 'STYLE': if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					  return '<span style="' + tagparams[1]+ '">' + tagparams[2] + '</span>';
					  break;
		case 'INK': if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					  return '<span style="color:' + tagparams[1]+ '">' + tagparams[2] + '</span>';
					  break;
		case 'PAPER': if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					  return '<span style="background-color:' + tagparams[1]+ '">' + tagparams[2] + '</span>';
					  break;
		case 'OBJECT': if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					   if(objects[getFlag(tagparams[1])]) return getObjectFixArticles(getFlag(tagparams[1])); else return '';
					   break;
		case 'WEIGHT': if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					   if(objectsWeight[getFlag(tagparams[1])]) return objectsWeight[getFlag(tagparams[1])]; else return '';
					   break;
		case 'OLOCATION': if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					      if(objectsLocation[getFlag(tagparams[1])]) return objectsLocation[getFlag(tagparams[1])]; else return '';
					      break;
		case 'MESSAGE':if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					   if(messages[getFlag(tagparams[1])]) return getMessageText(getFlag(tagparams[1])); else return '';
					   break;
		case 'SYSMESS':if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					   if(sysmessages[getFlag(tagparams[1])]) return getSysMessageText(getFlag(tagparams[1])); else return '';
					   break;
		case 'LOCATION':if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					   if(locations[getFlag(tagparams[1])]) return getLocationText(getFlag(tagparams[1])); else return '';
					   break;
		case 'PROCESS':if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					   callProcess(tagparams[1]);
					   return "";
					   break;
		case 'ACTION': if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					   return '<a href="javascript: void(0)" onclick="orderEnteredLoop(\'' + tagparams[1]+ '\')">' + tagparams[2] + '</a>';
					   break;
		case 'RESTART': if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					    return '<a href="javascript: void(0)" onclick="restart()">' + tagparams[1] + '</a>';
					    break;
		case 'EXTERN': if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					    return '<a href="javascript: void(0)" onclick="' + tagparams[1] + ' ">' + tagparams[2] + '</a>';
					    break;
		case 'TEXTPIC': if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
						var style = '';
						var post = '';
						var pre = '';
						align = tagparams[2];
						switch(align)
						{
							case 1: style = 'float:left'; break;
							case 2: style = 'float:right'; break;
							case 3: post = '<br />';
							case 4: pre='<center>';post='</center>';break;
						}
						return pre + "<img class='textpic' style='"+style+"' src='"+ RESOURCES_DIR + tagparams[1]+"' />" + post;
					    break;
		case 'HTML': if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
						return tagparams[1];
					    break;
		case 'FLAG': if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
						return getFlag(tagparams[1]);
					    break;
		case 'OREF': if (tagparams.length != 1) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
   			        if(objects[getFlag(FLAG_REFERRED_OBJECT)]) return getObjectFixArticles(getFlag(FLAG_REFERRED_OBJECT)); else return '';
					break;
		case 'TT':  
		case 'TOOLTIP':
					if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					var title = tagparams[1];
					var text = tagparams[2];
					return "<span title='"+title+"'>"+text+"</span>";
					break;
		case 'OPRO': if (tagparams.length != 1) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};  // returns the pronoun for a given object, used for english start database
					 switch (getSimpleGender(getFlag(FLAG_REFERRED_OBJECT)))
					 {
					 	case 'M' : return "him";
					 	case "F" : return "her";
					 	case "N" : return "it";
					 	case "P" : return "them";  // plural returns them
					 }
					break;

			default : return h_sequencetag(tagparams);
	}
}

function processTags(text)
{
	//Apply the {} tags filtering
	var pre, post, innerTag;
	tagfilter:
	while (text.indexOf('{') != -1)
	{
		if (( text.indexOf('}') == -1 ) || ((text.indexOf('}') < text.indexOf('{'))))
		{
			writeWarning(STR_INVALID_TAG_SEQUENCE + text);
			break tagfilter;
		}
		pre = text.substring(0,text.indexOf('{'));
		var openbracketcont = 1;
		pointer = text.indexOf('{') + 1;
		innerTag = ''
		while (openbracketcont>0)
		{
			if (text.charAt(pointer) == '{') openbracketcont++;
			if (text.charAt(pointer) == '}') openbracketcont--;
			innerTag = innerTag + text.charAt(pointer);
			pointer++;
		}
		innerTag = innerTag.substring(0,innerTag.length - 1);
		post = text.substring(pointer);
		if (innerTag.indexOf('{') != -1 ) innerTag = processTags(innerTag); 
		innerTag = implementTag(innerTag);
		text = pre + innerTag + post;
	}
	return text;
}

function filterText(text)
{
	// ngPAWS sequences
	text = processTags(text);


	// Superglus sequences (only \n remains)
    text = text.replace(/\n/g, STR_NEWLINE);

	// PAWS sequences (only underscore)
	objno = getFlag(FLAG_REFERRED_OBJECT);
	if ((objno != EMPTY_OBJECT) && (objects[objno]))	text = text.replace(/_/g,objects[objno].firstToLower()); else text = text.replace(/_/g,'');
	text = text.replace(/Â¬/g,' ');

	return text;
}


// Text Output functions
function writeText(text, skipAutoComplete)
{
	if (typeof skipAutoComplete === 'undefined') skipAutoComplete = false;
	text = h_writeText(text); // hook
	$('.text').append(text);
	$('.text').scrollTop($('.text')[0].scrollHeight);
	addToTranscript(text);
	if (!skipAutoComplete) addToAutoComplete(text);
	focusInput();
}

function writeWarning(text)
{
	if (showWarnings) writeText(text)
}

function addToTranscript(text)
{
	transcript = transcript + text;		
}

function writelnText(text, skipAutoComplete)
{
	if (typeof skipAutoComplete === 'undefined') skipAutoComplete = false;
	writeText(text + STR_NEWLINE, skipAutoComplete);
}

function writeMessage(mesno)
{
	if (messages[mesno]!=null) writeText(getMessageText(mesno)); else writeWarning(STR_NEWLINE + STR_WRONG_MESSAGE + ' [' + mesno + ']');
}

function writeSysMessage(sysno)
{
		if (sysmessages[sysno]!=null) writeText(getSysMessageText(sysno)); else writeWarning(STR_NEWLINE + STR_WRONG_SYSMESS + ' [' + sysno + ']');
		$(".text").scrollTop($(".text")[0].scrollHeight);
}

function writeWriteMessage(writeno)
{
		writeText(getWriteMessageText(writeno)); 
}

function writeObject(objno)
{
	writeText(getObjectText(objno));
}

function clearTextWindow()
{
	$('.text').empty();
}


function clearInputWindow()
{
	$('.prompt').val('');
}


function writeLocation(locno)
{
	if (locations[locno]!=null) writeText(getLocationText(locno) + STR_NEWLINE); else writeWarning(STR_NEWLINE + STR_WRONG_LOCATION + ' [' + locno + ']');
}

// Screen control functions

function clearGraphicsWindow()
{
	$('.graphics').empty();	
}


function clearScreen()
{
	clearInputWindow();
	clearTextWindow();
	clearGraphicsWindow();
}

function copyOrderToTextWindow(player_order)
{

	last_player_orders.push(player_order);
	last_player_orders_pointer = 0;
	clearInputWindow();
	writelnText(STR_PROMPT_START + player_order + STR_PROMPT_END, false);
}

function get_prev_player_order()
{
	if (!last_player_orders.length) return '';
	var last = last_player_orders[last_player_orders.length - 1 - last_player_orders_pointer];
	if (last_player_orders_pointer < last_player_orders.length - 1) last_player_orders_pointer++;
	return last;
}

function get_next_player_order()
{
	if (!last_player_orders.length) return '';
	if (last_player_orders_pointer > 0) last_player_orders_pointer--;
	return last_player_orders[last_player_orders.length - 1 - last_player_orders_pointer];

}



// Graphics functions


function hideGraphicsWindow()
{
		$('.text').removeClass('half_text');
		$('.text').addClass('all_text');
		$('.graphics').removeClass('half_graphics');
		$('.graphics').addClass('hidden');
		if ($('.location_picture')) $('.location_picture').remove();
}



function drawPicture(picno)  
{
	var pictureDraw = false;
	if (graphicsON) 
	{
		if ((isDarkHere()) && (!lightObjectsPresent())) picno = 0;
		var filename = getResourceById(RESOURCE_TYPE_IMG, picno);
		if (filename)
		{
			$('.graphics').removeClass('hidden');
			$('.graphics').addClass('half_graphics');
			$('.text').removeClass('all_text');
			$('.text').addClass('half_text');
			$('.graphics').html('<img alt="" class="location_picture" src="' +  filename + '" />');
			$('.location_picture').css('height','100%');
			pictureDraw = true;
		}
	}

	if (!pictureDraw) hideGraphicsWindow();
}




function clearPictureAt() // deletes all pictures drawn by "pictureAT" condact
{
	$.each($('.graphics img'), function () {
		if ($(this)[0].className!= 'location_picture') $(this).remove();
	});

}

// Turns functions

function incTurns()
{
	turns = getFlag(FLAG_TURNS_LOW) + 256 * getFlag(FLAG_TURNS_HIGH)  + 1;
	setFlag(FLAG_TURNS_LOW, turns % 256);
	setFlag(FLAG_TURNS_HIGH, Math.floor(turns / 256));
}

// input box functions

function disableInput()
{
	$(".input").prop('disabled', true); 
}

function enableInput()
{
	$(".input").prop('disabled', false); 
}

function focusInput()
{
	$(".prompt").focus();
	timeout_progress = 0;
}

// Object default attributes functions

function objectIsNPC(objno)
{
	if (objno > last_object_number) return false;
	return bittest(getObjectLowAttributes(objno), ATTR_NPC);
}

function objectIsLight(objno)
{
	if (objno > last_object_number) return false;
	return bittest(getObjectLowAttributes(objno), ATTR_LIGHT);
}

function objectIsWearable(objno)
{
	if (objno > last_object_number) return false;
	return bittest(getObjectLowAttributes(objno), ATTR_WEARABLE);
}

function objectIsContainer(objno)
{
	if (objno > last_object_number) return false;
	return bittest(getObjectLowAttributes(objno), ATTR_CONTAINER);
}

function objectIsSupporter(objno)
{
	if (objno > last_object_number) return false;
	return bittest(getObjectLowAttributes(objno), ATTR_SUPPORTER);
}


function objectIsAttr(objno, attrno)
{
	if (attrno > 63) return false;
	var attrs = getObjectLowAttributes(objno);
	if (attrno > 31)
	{
		attrs = getObjectHighAttributes(objno);
		attrno = attrno - 32;
	}
	return bittest(attrs, attrno);
}

function isAccesibleContainer(objno)
{
	if (objectIsSupporter(objno)) return true;   // supporter
	if ( objectIsContainer(objno) && !objectIsAttr(objno, ATTR_OPENABLE) ) return true;  // No openable container
	if ( objectIsContainer(objno) && objectIsAttr(objno, ATTR_OPENABLE) && objectIsAttr(objno, ATTR_OPEN)  )  return true;  // No openable & open container
	return false;
}

//Objects and NPC functions

function findMatchingObject(locno)
{
	for (var i=0;i<num_objects;i++)
		if ((locno==-1) || (getObjectLocation(i) == locno))
		 if (((objectsNoun[i]) == getFlag(FLAG_NOUN1)) && (((objectsAdjective[i]) == EMPTY_WORD) || ((objectsAdjective[i]) == getFlag(FLAG_ADJECT1))))  return i;
	return EMPTY_OBJECT;
}

function getReferredObject()
{
	var objectfound = EMPTY_OBJECT; 
	refobject_search: 
	{
		object_id = findMatchingObject(LOCATION_CARRIED);
		if (object_id != EMPTY_OBJECT)	{objectfound = object_id; break refobject_search;}	

		object_id = findMatchingObject(LOCATION_WORN);
		if (object_id != EMPTY_OBJECT)	{objectfound = object_id; break refobject_search;}	

		object_id = findMatchingObject(loc_here());
		if (object_id != EMPTY_OBJECT)	{objectfound = object_id; break refobject_search;}	

		object_id = findMatchingObject(-1);
		if (object_id != EMPTY_OBJECT)	{objectfound = object_id; break refobject_search;}	
	}
	return objectfound;
}


function getObjectLowAttributes(objno)
{
	return objectsAttrLO[objno];
}

function getObjectHighAttributes(objno)
{
	return objectsAttrHI[objno]
}


function setObjectLowAttributes(objno, attrs)
{
	objectsAttrLO[objno] = attrs;
}

function setObjectHighAttributes(objno, attrs)
{
	objectsAttrHI[objno] = attrs;
}


function getObjectLocation(objno)
{
	if (objno > last_object_number) 
		writeWarning(STR_INVALID_OBJECT + ' [' + objno + ']');
	return objectsLocation[objno];
}

function setObjectLocation(objno, locno)
{
	if (objectsLocation[objno] == LOCATION_CARRIED) setFlag(FLAG_OBJECTS_CARRIED_COUNT, getFlag(FLAG_OBJECTS_CARRIED_COUNT) - 1);
	objectsLocation[objno] = locno;
	if (objectsLocation[objno] == LOCATION_CARRIED) setFlag(FLAG_OBJECTS_CARRIED_COUNT, getFlag(FLAG_OBJECTS_CARRIED_COUNT) + 1);
}



// Sets all flags associated to  referred object by current LS  
function setReferredObject(objno) 
{
	if (objno == EMPTY_OBJECT)
	{
		setFlag(FLAG_REFERRED_OBJECT, EMPTY_OBJECT);
		setFlag(FLAG_REFERRED_OBJECT_LOCATION, LOCATION_NONCREATED);
		setFlag(FLAG_REFERRED_OBJECT_WEIGHT, 0);
		setFlag(FLAG_REFERRED_OBJECT_LOW_ATTRIBUTES, 0);
		setFlag(FLAG_REFERRED_OBJECT_HIGH_ATTRIBUTES, 0);
		return;
	}
	setFlag(FLAG_REFERRED_OBJECT, objno);
	setFlag(FLAG_REFERRED_OBJECT_LOCATION, getObjectLocation(objno));
	setFlag(FLAG_REFERRED_OBJECT_WEIGHT, getObjectWeight(objno));
	setFlag(FLAG_REFERRED_OBJECT_LOW_ATTRIBUTES, getObjectLowAttributes(objno));
	setFlag(FLAG_REFERRED_OBJECT_HIGH_ATTRIBUTES, getObjectHighAttributes(objno));

}


function getObjectWeight(objno) 
{
	var weight = objectsWeight[objno];
	if ( ((objectIsContainer(objno)) || (objectIsSupporter(objno))) && (weight!=0)) // Container with zero weigth are magic boxes, anything you put inside weigths zero
  		weight = weight + getLocationObjectsWeight(objno);
	return weight;
}


function getLocationObjectsWeight(locno) 
{
	var weight = 0;
	for (var i=0;i<num_objects;i++)
	{
		if (getObjectLocation(i) == locno) 
		{
			objweight = objectsWeight[i];
			weight += objweight;
			if (objweight > 0)
			{
				if (  (objectIsContainer(i)) || (objectIsSupporter(i)) )
				{	
					weight += getLocationObjectsWeight(i);
				}
			}
		}
	}
	return weight;
}

function getObjectCountAt(locno) 
{
	var count = 0;
	for (i=0;i<num_objects;i++)
	{
		if (getObjectLocation(i) == locno) 
		{
			attr = getObjectLowAttributes(i);
			if (!bittest(getFlag(FLAG_PARSER_SETTINGS),3)) count ++;  // Parser settings say we should include NPCs as objects
			 else if (!objectIsNPC(i)) count++;     // or object is not an NPC
		}
	}
	return count;
}


function getObjectCountAtWithAttr(locno, attrno) 
{
	var count = 0;
	for (i=0;i<num_objects;i++)
		if (   (getObjectLocation(i) == locno)  && (objectIsAttr(i, attrno))) count++;
	return count;
}


function getNPCCountAt(locno) 
{
	var count = 0;
	for (i=0;i<num_objects;i++)
		if ((getObjectLocation(i) == locno) &&  (objectIsNPC(i))) count++;
	return count;
}


// Location light function

function lightObjectsAt(locno) 
{
	return getObjectCountAtWithAttr(locno, ATTR_LIGHT) > 0;
}


function lightObjectsPresent() 
{
  if (lightObjectsAt(LOCATION_CARRIED)) return true;
  if (lightObjectsAt(LOCATION_WORN)) return true;
  if (lightObjectsAt(loc_here())) return true;
  return false;
}


function isDarkHere()
{
	return (getFlag(FLAG_LIGHT) != 0);
}

// Sound functions


function preloadsfx()
{
	for (var i=0;i<resources.length;i++)
	 	if (resources[i][0] == 'RESOURCE_TYPE_SND') 
	 	{
	 		var fileparts = resources[i][2].split('.');
			var basename = fileparts[0];
			var mySound = new buzz.sound( basename, {  formats: [ "ogg", "mp3" ] , preload: true} );
	 	}
}

function sfxplay(sfxno, channelno, times, method)
{

	if (!soundsON) return;
	if ((channelno <0) || (channelno >MAX_CHANNELS)) return;
	if (times == 0) times = -1; // more than 4000 million times
	var filename = getResourceById(RESOURCE_TYPE_SND, sfxno);
	if (filename)
	{
		var fileparts = filename.split('.');
		var basename = fileparts[0];
		var mySound = new buzz.sound( basename, {  formats: [ "ogg", "mp3" ] });
		if (soundChannels[channelno]) soundChannels[channelno].stop();
		soundLoopCount[channelno] = times;
		mySound.bind("ended", function(e) {
			for (sndloop=0;sndloop<MAX_CHANNELS;sndloop++)
				if (soundChannels[sndloop] == this)
				{
					if (soundLoopCount[sndloop]==-1) {this.play(); return }
					soundLoopCount[sndloop]--;
					if (soundLoopCount[sndloop] > 0) {this.play(); return }
					sfxstop(sndloop);
					return;
				}
		});
		soundChannels[channelno] = mySound;
		if (method=='play')	mySound.play(); else mySound.fadeIn(2000);
	}
}

function playLocationMusic(locno)
{
	if (soundsON) 
		{
			sfxstop(0);
			sfxplay(locno, 0, 0, 'play');
		}
}

function musicplay(musicno, times)  
{
	sfxplay(musicno, 0, times);
}

function channelActive(channelno)
{
	if (soundChannels[channelno]) return true; else return false;
}


function sfxstopall() 
{
	for (channelno=0;channelno<MAX_CHANNELS;channelno++) sfxstop(channelno);

}


function sfxstop(channelno)
{
	if (soundChannels[channelno]) 
		{
			soundChannels[channelno].unbind('ended');
			soundChannels[channelno].stop();
			soundChannels[channelno] = null;
		}
}

function sfxvolume(channelno, value)
{
	if (soundChannels[channelno]) soundChannels[channelno].setVolume(Math.floor( value * 100 / 65535)); // Inherited volume condact uses a number among 0 and 65535, buzz library uses 0-100.
}

function isSFXPlaying(channelno)
{
	if (!soundChannels[channelno]) return false;
	return true;
}


function sfxfadeout(channelno, value)
{
	if (!soundChannels[channelno]) return;
	soundChannels[channelno].fadeOut(value, function() { sfxstop(channelno) });
}

// *** Process functions ***

function callProcess(procno)
{
	if (inEND) return;
	current_process = procno;
	var prostr = procno.toString(); 
	while (prostr.length < 3) prostr = "0" + prostr;
	if (procno==0) in_response = true;
	if (doall_flag && in_response) done_flag = false;
	if (!in_response) done_flag = false;
	h_preProcess(procno);
    eval("pro" + prostr + "()");
	h_postProcess(procno);
	if (procno==0) in_response = false;
}

// Bitwise functions

function bittest(value, bitno)
{
	mask = 1 << bitno;
	return ((value & mask) != 0);
}

function bitset(value, bitno)
{

	mask = 1 << bitno;
	return value | mask;
}

function bitclear(value, bitno)
{
	mask = 1 << bitno;
	return value & (~mask);
}


function bitneg(value, bitno) 
{
	mask = 1 << bitno;
	return value ^ mask;

}

// Savegame functions
function getSaveGameObject()
{
	var savegame_object = new Object();
	// Notice that slice() is used to make sure a copy of each array is assigned to the object, no the arrays themselves
	savegame_object.flags = flags.slice();
	savegame_object.objectsLocation = objectsLocation.slice();
	savegame_object.objectsWeight = objectsWeight.slice();
	savegame_object.objectsAttrLO = objectsAttrLO.slice();
	savegame_object.objectsAttrHI = objectsAttrHI.slice();
	savegame_object.connections = connections.slice();
	savegame_object = h_saveGame(savegame_object);
	return savegame_object;
}

function restoreSaveGameObject(savegame_object)
{
	flags = savegame_object.flags;
	// Notice that slice() is used to make sure a copy of each array is assigned to the object, no the arrays themselves
	objectsLocation = savegame_object.objectsLocation.slice();
	objectsWeight = savegame_object.objectsWeight.slice();
	objectsAttrLO = savegame_object.objectsAttrLO.slice();
	objectsAttrHI = savegame_object.objectsAttrHI.slice();
	connections = savegame_object.connections.slice();
	h_restoreGame(savegame_object);
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                        The parser                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function loadPronounSufixes()
{

    var swapped;

	for (var j=0;j<vocabulary.length;j++) if (vocabulary[j][VOCABULARY_TYPE] == WORDTYPE_PRONOUN)
			 pronoun_suffixes.push(vocabulary[j][VOCABULARY_WORD]);
	// Now sort them so the longest are first, so you rather replace SELOS in (COGESELOS=>COGE SELOS == >TAKE THEM) than LOS (COGESELOS==> COGESE LOS ==> TAKExx THEM) that woul not be understood (COGESE is not a verb, COGE is)
    do {
        swapped = false;
        for (var i=0; i < pronoun_suffixes.length-1; i++) 
        {
            if (pronoun_suffixes[i].length < pronoun_suffixes[i+1].length) 
            {
                var temp = pronoun_suffixes[i];
                pronoun_suffixes[i] = pronoun_suffixes[i+1];
                pronoun_suffixes[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}


function findVocabulary(word)  
{
	// Pending: in general this function is not very efficient. A solution where the vocabulary array is sorted by word so the first search can be binary search
	//          and possible typos are precalculated, so the distance is a lookup table instead of a function, would be much more efficient. On the other hand,
	//          the current solution is fast enough with a 1000+ words game that I don't consider improving this function to have high priority now.

	// Search word in vocabulary
	for (var j=0;j<vocabulary.length;j++)
		if (vocabulary[j][VOCABULARY_WORD] == word)
			 return vocabulary[j];

	if (word.length <=4) return null; // Don't try to fix typo for words with less than 5 length

	if (bittest(getFlag(FLAG_PARSER_SETTINGS), 8)) return null; // If matching is disabled, we won't try to use levhenstein distance

	// Search words in vocabulary with a Levenshtein distance of 1
	var distance2_match = null;
	for (var k=0;k<vocabulary.length;k++)
	{
		if ([WORDTYPE_VERB,WORDTYPE_NOUN,WORDTYPE_ADJECT,WORDTYPE_ADVERB].indexOf(vocabulary[k][VOCABULARY_TYPE])  != -1 )
		{
			var distance = getLevenshteinDistance(vocabulary[k][VOCABULARY_WORD], word);
			if ((!distance2_match) && (distance==2)) distance2_match = vocabulary[k]; // Save first word with distance=2, in case we don't find any word with distance 1
			if (distance <= 1) return vocabulary[k];
		}
	} 

	// If we found any word with distance 2, return it, only if word was at least 7 characters long
	if ((distance2_match) &&  (word.length >6)) return distance2_match;

	// Word not found
	return null;
}

function normalize(player_order)   
// Removes accented characters and makes sure every sentence separator (colon, semicolon, quotes, etc.) has one space before and after. Also, all separators are converted to comma
{
	var originalchars = 'Ã¡Ã©Ã­Ã³ÃºÃ¤Ã«Ã¯Ã¶Ã¼Ã¢ÃªÃ®Ã´Ã»Ã Ã¨Ã¬Ã²Ã¹ÃÃ‰ÃÃ“ÃšÃ„Ã‹ÃÃ–ÃœÃ‚ÃŠÃŽÃ”Ã›Ã€ÃˆÃŒÃ’Ã™';
	var i;
	var output = '';
	var pos;

	for (i=0;i<player_order.length;i++) 
	{
		pos = originalchars.indexOf(player_order.charAt(i));
		if (pos!=-1) output = output + "aeiou".charAt(pos % 5); else 
		{
			ch = player_order.charAt(i);
			if ((ch=='.') || (ch==',') || (ch==';') || (ch=='"') || (ch=='\'')) output = output + ' , '; else output = output + player_order.charAt(i); 
		}

	}
	return output;
}

function toParserBuffer(player_order)  // Converts a player order in a list of sentences separated by dot.
{
     player_order = normalize(player_order);
     player_order = player_order.toUpperCase();
    
	 var words = player_order.split(' ');
	 for (var q=0;q<words.length;q++)
	 {
	 	words[q] = words[q].trim();
	 	if  (words[q]!=',')
	 	{
	 		words[q] = words[q].trim();
	 		foundWord = findVocabulary(words[q]);
	 		if (foundWord)
	 		{
	 			if (foundWord[VOCABULARY_TYPE]==WORDTYPE_CONJUNCTION)
	 			{
	 			words[q] = ','; // Replace conjunctions with commas
		 		} 
	 		}
	 	}
	 }

	 var output = '';
	 for (q=0;q<words.length;q++)
	 {
	 	if (words[q] == ',') output = output + ','; else output = output + words[q] + ' ';
	 }
	 output = output.replace(/ ,/g,',');
	 output = output.trim();
	 player_order_buffer = output;
}

function getSentencefromBuffer()
{
	var sentences = player_order_buffer.split(',');
	var result = sentences[0];
	sentences.splice(0,1);
	player_order_buffer = sentences.join();
	return result;
}

function processPronounSufixes(words)  
{
	// This procedure will split pronominal sufixes into separated words, so COGELA will become COGE LA at the end, and work exactly as TAKE IT does.
	// it's only for spanish so if lang is english then it makes no changes
	if (getLang() == 'EN') return words;
	verbFound = false;
	if (!bittest(getFlag(FLAG_PARSER_SETTINGS),0)) return words;  // If pronoun sufixes inactive, just do nothing
	// First, we clear the word list from any match with pronouns, cause if we already have something that matches pronouns, probably is just concidence, like in COGE LA LLAVE
	var filtered_words = [];
	for (var q=0;q < words.length;q++)
	{
		foundWord = findVocabulary(words[q]);
		if (foundWord) 
			{
				if (foundWord[VOCABULARY_TYPE] != WORDTYPE_PRONOUN) filtered_words[filtered_words.length] = words[q];
			}
			else filtered_words[filtered_words.length] = words[q];
	}
	words = filtered_words;

	// Now let's start trying to get sufixes
	new_words = [];
	for (var k=0;k < words.length;k++)
	{
		words[k] = words[k].trim();
		foundWord = findVocabulary(words[k]);
		if (foundWord) if (foundWord[VOCABULARY_TYPE] == WORDTYPE_VERB) verbFound = true;  // If we found a verb, we don't look for pronoun sufixes, as they have to come together with verb
		suffixFound = false;
		pronunsufix_search:
		for (var l=0;(l<pronoun_suffixes.length) && (!suffixFound) && (!verbFound);l++)
			if (pronoun_suffixes[l] == words[k].rights(pronoun_suffixes[l].length))
			{
				var verb_part = words[k].substring(0,words[k].length - pronoun_suffixes[l].length);
				var checkWord = findVocabulary(verb_part);
				if ((!checkWord)  || (checkWord[VOCABULARY_TYPE] != WORDTYPE_VERB))  // If the part before the supposed-to-be pronoun sufix is not a verb, then is not a pronoun sufix
				{
					new_words.push(words[k]);	
					continue pronunsufix_search;
				}
				new_words.push(verb_part);  // split the word in two parts: verb + pronoun. Since that very moment it works like in english (COGERLO ==> COGER LO as of TAKE IT)
				new_words.push(pronoun_suffixes[l]);
				suffixFound = true;
				verbFound = true;
			}
		if (!suffixFound) new_words.push(words[k]);
	}
	return new_words;
}

function getLogicSentence()
{
	parser_word_found = false; ;
	aux_verb = -1;
	aux_noun1 = -1;
	aux_adject1 = -1;
	aux_adverb = -1;
	aux_pronoun = -1
	aux_pronoun_adject = -1
	aux_preposition = -1;
	aux_noun2 = -1;
	aux_adject2 = -1;
	initializeLSWords();
	SL_found = false;

	order = getSentencefromBuffer();
	setFlag(FLAG_PARSER_SETTINGS, bitclear(getFlag(FLAG_PARSER_SETTINGS),1)); // Initialize flag that says an unknown word was found in the sentence


	words = order.split(" ");
	words = processPronounSufixes(words);
	wordsearch_loop:
	for (var i=0;i<words.length;i++)
	{
		original_word = currentword = words[i];
		if (currentword.length>10) currentword = currentword.substring(0,MAX_WORD_LENGHT);
		foundWord = findVocabulary(currentword);
		if (foundWord)
		{
			wordtype = foundWord[VOCABULARY_TYPE];
			word_id = foundWord[VOCABULARY_ID];

			switch (wordtype)
			{
				case WORDTYPE_VERB: if (aux_verb == -1)  aux_verb = word_id; 
				        			break;

				case WORDTYPE_NOUN: if (aux_noun1 == -1) aux_noun1 = word_id; else if (aux_noun2 == -1) aux_noun2 = word_id;
									break;

				case WORDTYPE_ADJECT: if (aux_adject1 == -1) aux_adject1 = word_id; else if (aux_adject2 == -1) aux_adject2 = word_id;
									  break;

				case WORDTYPE_ADVERB: if (aux_adverb == -1) aux_adverb = word_id;
				        			  break;

				case WORDTYPE_PRONOUN: if (aux_pronoun == -1) 
											{
												aux_pronoun = word_id;
												if ((previous_noun != EMPTY_WORD) && (aux_noun1 == -1))
												{
													aux_noun1 = previous_noun;
													if (previous_adject != EMPTY_WORD) aux_adject1 = previous_adject;
												}
											}

				        			   break;

				case WORDTYPE_CONJUNCTION: break wordsearch_loop; // conjunction or nexus. Should not appear in this function, just added for security
				
				case WORDTYPE_PREPOSITION: if (aux_preposition == -1) aux_preposition = word_id;
										   if (aux_noun1!=-1) setFlag(FLAG_PARSER_SETTINGS, bitset(getFlag(FLAG_PARSER_SETTINGS),2));  // Set bit that determines that a preposition word was found after first noun
										   break;
			}

			// Nouns that can be converted to verbs
			if ((aux_noun1!=-1) && (aux_verb==-1) && (aux_noun1 < NUM_CONVERTIBLE_NOUNS))
			{
				aux_verb = aux_noun1;
				aux_noun1 = -1;
			}

			if ((aux_verb==-1) && (aux_noun1!=-1) && (previous_verb!=EMPTY_WORD)) aux_verb = previous_verb;  // Support "TAKE SWORD AND SHIELD" --> "TAKE WORD AND TAKE SHIELD"

			if ((aux_verb!=-1) || (aux_noun1!=-1) || (aux_adject1!=-1 || (aux_preposition!=-1) || (aux_adverb!=-1))) SL_found = true;



		} else if (aux_verb!=-1) setFlag(FLAG_PARSER_SETTINGS, bitset(getFlag(FLAG_PARSER_SETTINGS),1));  // Set bit that determines that an unknown word was found after the verb
	}

	if (SL_found)
	{
		if (aux_verb != -1) setFlag(FLAG_VERB, aux_verb);
		if (aux_noun1 != -1) setFlag(FLAG_NOUN1, aux_noun1);
		if (aux_adject1 != -1) setFlag(FLAG_ADJECT1, aux_adject1);
		if (aux_adverb != -1) setFlag(FLAG_ADVERB, aux_adverb);
		if (aux_pronoun != -1) 
			{
				setFlag(FLAG_PRONOUN, aux_noun1);
				setFlag(FLAG_PRONOUN_ADJECT, aux_adject1);
			}
			else
			{
				setFlag(FLAG_PRONOUN, EMPTY_WORD);
				setFlag(FLAG_PRONOUN_ADJECT, EMPTY_WORD);
			}
		if (aux_preposition != -1) setFlag(FLAG_PREP, aux_preposition);
		if (aux_noun2 != -1) setFlag(FLAG_NOUN2, aux_noun2);
		if (aux_adject2 != -1) setFlag(FLAG_ADJECT2, aux_adject2);
		setReferredObject(getReferredObject());
		previous_verb = aux_verb;
		if ((aux_noun1!=-1) && (aux_noun1>=NUM_PROPER_NOUNS))
		{
			previous_noun = aux_noun1;
			if (aux_adject1!=-1) previous_adject = aux_adject1;
		}
		
	}
	if ((aux_verb + aux_noun1+ aux_adject1 + aux_adverb + aux_pronoun + aux_preposition + aux_noun2 + aux_adject2) != -8) parser_word_found = true;

	return SL_found;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                        Main functions and main loop                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Interrupt functions

function enableInterrupt()
{
	interruptDisabled = false;
}

function disableInterrupt()
{
	interruptDisabled = true;
}

function timer()
{
	// Timeout control
	timeout_progress=  timeout_progress + 1/32;  //timer happens every 40 milliseconds, but timeout counter should only increase every 1.28 seconds (according to PAWS documentation)
	timeout_length = getFlag(FLAG_TIMEOUT_LENGTH);
	if ((timeout_length) && (timeout_progress> timeout_length))  // time for timeout
	{
		timeout_progress = 0;
		if (($('.prompt').val() == '')  || (($('.prompt').val()!='') && (!bittest(getFlag(FLAG_TIMEOUT_SETTINGS),0))) )  // but first check there is no text type, or is allowed to timeout when text typed already
		{
			setFlag(FLAG_TIMEOUT_SETTINGS, bitset(getFlag(FLAG_TIMEOUT_SETTINGS),7)); // Clears timeout bit
			writeSysMessage(SYSMESS_TIMEOUT);	
			callProcess(PROCESS_TURN);
		}
	}	

	// PAUSE condact control
	if (inPause)
	{
		pauseRemainingTime = pauseRemainingTime - 40; // every tick = 40 milliseconds
		if (pauseRemainingTime<=0)
		{
			inPause = false;
			hideAnykeyLayer();
			waitKeyCallback()
		}
	}

	// Interrupt process control
	if (!interruptDisabled)
	if (interruptProcessExists)
	{
		callProcess(interrupt_proc);
		setFlag(FLAG_PARSER_SETTINGS, bitclear(getFlag(FLAG_PARSER_SETTINGS), 4));  // Set bit at flag that marks that a window resize happened 
	}

	// Set timer again
	setTimeout(function (){
	     	timer();
     },TIMER_MILLISECONDS);
}

// Initialize and finalize functions

function farewell()
{
	writeSysMessage(SYSMESS_FAREWELL);
	ACCnewline();
}


function initializeConnections()
{
  connections = [].concat(connections_start);
}

function initializeObjects()
{
  for (i=0;i<objects.length;i++)
  {
  	objectsAttrLO = [].concat(objectsAttrLO_start);
  	objectsAttrHI = [].concat(objectsAttrHI_start);
  	objectsLocation = [].concat(objectsLocation_start);
  	objectsWeight = [].concat(objectsWeight_start);
  }
}

function  initializeLSWords()
{
  setFlag(FLAG_PREP,EMPTY_WORD);
  setFlag(FLAG_NOUN2,EMPTY_WORD);
  setFlag(FLAG_ADJECT2,EMPTY_WORD);
  setFlag(FLAG_PRONOUN,EMPTY_WORD);
  setFlag(FLAG_ADJECT1,EMPTY_WORD);
  setFlag(FLAG_VERB,EMPTY_WORD);
  setFlag(FLAG_NOUN1,EMPTY_WORD);
  setFlag(FLAG_ADJECT1,EMPTY_WORD);
  setFlag(FLAG_ADVERB,EMPTY_WORD);
}


function initializeFlags()
{
  flags = [];
  for (var  i=0;i<FLAG_COUNT;i++) flags.push(0);
  setFlag(FLAG_MAXOBJECTS_CARRIED,4);
  setFlag(FLAG_PARSER_SETTINGS,9); // Pronoun sufixes active, DOALL and others ignore NPCs, etc. 00001001
  setFlag(FLAG_MAXWEIGHT_CARRIED,10);
  initializeLSWords();
  setFlag(FLAG_OBJECT_LIST_FORMAT,64); // List objects in a single sentence (comma separated)
  setFlag(FLAG_OBJECTS_CARRIED_COUNT,carried_objects);  // FALTA: el compilador genera esta variable, hay que cambiarlo en el compilador, ERA numero_inicial_de_objetos_llevados
}

function initializeInternalVars()
{
	num_objects = last_object_number + 1;
	transcript = '';
	timeout_progress = 0;
	previous_noun = EMPTY_WORD;
	previous_verb = EMPTY_WORD;
	previous_adject = EMPTY_WORD;
	player_order_buffer = '';
	last_player_orders = [];
	last_player_orders_pointer = 0;
	graphicsON = true; 
	soundsON = true; 
	interruptDisabled = false;
	unblock_process = null;
	done_flag = false;
	describe_location_flag =false;
	in_response = false;
	success = false;
	doall_flag = false;
	entry_for_doall	= '';
}

function initializeSound()
{
	sfxstopall();
}




function initialize()
{
	preloadsfx();
	initializeInternalVars();
	initializeSound();
	initializeFlags();
	initializeObjects();
	initializeConnections();
}



// Main loops

function descriptionLoop()
{
	describe_location_flag = false;
	clearTextWindow();
	if ((isDarkHere()) && (!lightObjectsPresent())) writeSysMessage(SYSMESS_ISDARK); else writeLocation(loc_here()); 
	h_description_init();
	playLocationMusic(loc_here());
	if (loc_here()) drawPicture(loc_here()); else hideGraphicsWindow(); // Don't show picture at location 0
	ACCminus(FLAG_AUTODEC2,1);
	if (isDarkHere()) ACCminus(FLAG_AUTODEC3,1);
	if ((isDarkHere()) && (lightObjectsAt(loc_here())==0)) ACCminus(FLAG_AUTODEC4,1);
	callProcess(PROCESS_DESCRIPTION);
	h_description_post();
	if (describe_location_flag) descriptionLoop();
	describe_location_flag = false;
	callProcess(PROCESS_TURN);
	if (describe_location_flag) descriptionLoop();
	describe_location_flag = false;
	focusInput();

}

function orderEnteredLoop(player_order)
{
	previous_verb = EMPTY_WORD;
	setFlag(FLAG_TIMEOUT_SETTINGS, bitclear(getFlag(FLAG_TIMEOUT_SETTINGS),7)); // Clears timeout bit
	if (player_order == '') {writeSysMessage(SYSMESS_SORRY); ACCnewline(); return; };	
	player_order = h_playerOrder(player_order); //hook
	copyOrderToTextWindow(player_order);
	toParserBuffer(player_order);
	do 
	{
		describe_location_flag = false;
		ACCminus(FLAG_AUTODEC5,1);
		ACCminus(FLAG_AUTODEC6,1);
		ACCminus(FLAG_AUTODEC7,1);
		ACCminus(FLAG_AUTODEC8,1);
		if (isDarkHere()) ACCminus(FLAG_AUTODEC9,1);
		if ((isDarkHere()) && (lightObjectsAt(loc_here())==0)) ACCminus(FLAG_AUTODEC10,1);
		
		if (describe_location_flag) 
		{
			descriptionLoop();
			return;
		};

		if (getLogicSentence())
		{
			incTurns();
			done_flag = false;
			callProcess(PROCESS_RESPONSE); // Response table
			if (describe_location_flag) 
			{
				descriptionLoop();
				return;
			};
			if (!done_flag) 
			{
				if ((getFlag(FLAG_VERB)<NUM_CONNECTION_VERBS) && (CNDmove(FLAG_LOCATION)))
				{
					descriptionLoop();
					return;
				} else if (getFlag(FLAG_VERB)<NUM_CONNECTION_VERBS) {writeSysMessage(SYSMESS_WRONGDIRECTION);ACCnewline();}	else {writeSysMessage(SYSMESS_CANTDOTHAT);ACCnewline();};

			}
		} else
		{
			h_invalidOrder(player_order);
			if (parser_word_found) {writeSysMessage(SYSMESS_IDONTUNDERSTAND);   ACCnewline() }
			    		      else {writeSysMessage(SYSMESS_NONSENSE_SENTENCE); ACCnewline() };	
		}  
		callProcess(PROCESS_TURN);
	} while (player_order_buffer !='');
	previous_verb = ''; // Can't use previous verb if a new order is typed (we keep previous noun though, it can be used)
	focusInput();
}


function restart()
{
	location.reload();	
}


function hideBlock()
{
	clearInputWindow();
    $('.block_layer').hide('slow');
    enableInterrupt();   	
    $('.input').show();  
    focusInput();
}

function hideAnykeyLayer()
{
	$('.anykey_layer').hide();
    $('.input').show();  
    focusInput();   
}

function showAnykeyLayer()
{
	$('.anykey_layer').show();
    $('.input').hide();  
}

//called when the block layer is closed
function closeBlock()
{
	if (!inBlock) return;
	inBlock = false;
	hideBlock();
    var proToCall = unblock_process;
	unblock_process = null;
	callProcess(proToCall);
	if (describe_location_flag) descriptionLoop();
}

function setInputPlaceHolder()
{
	var prompt_msg = getFlag(FLAG_PROMPT);
	if (!prompt_msg)
	{
		var random = Math.floor((Math.random()*100));
		if (random<30) prompt_msg = SYSMESS_PROMPT0; else
		if ((random>=30) && (random<60)) prompt_msg = SYSMESS_PROMPT1; else
		if ((random>=60) && (random<90)) prompt_msg = SYSMESS_PROMPT2; else
		if (random>=90) prompt_msg = SYSMESS_PROMPT3;
	}
	$('.prompt').attr('placeholder', getSysMessageText(prompt_msg));
}


function divTextScrollUp()
{
   	var currentPos = $('.text').scrollTop();
	if (currentPos>=DIV_TEXT_SCROLL_STEP) $('.text').scrollTop(currentPos - DIV_TEXT_SCROLL_STEP);
}

function divTextScrollDown()
{
   	var currentPos = $('.text').scrollTop();
   	if (currentPos <= ($('.text')[0].scrollHeight - DIV_TEXT_SCROLL_STEP)) $('.text').scrollTop(currentPos + DIV_TEXT_SCROLL_STEP);
}

// Autocomplete functions

function predictiveText(currentText)
{
	if (currentText == '') return currentText;
	var wordToComplete;
	var words = currentText.split(' ');
	if (autocompleteStep!=0) wordToComplete = autocompleteBaseWord; else wordToComplete = words[words.length-1];
	words[words.length-1] = completedWord(wordToComplete);
	return words.join(' ');
}


function initAutoComplete()
{
	for (var j=0;j<vocabulary.length;j++)
		if (vocabulary[j][VOCABULARY_TYPE] == WORDTYPE_VERB)
			if (vocabulary[j][VOCABULARY_WORD].length >= 3)
				autocomplete.push(vocabulary[j][VOCABULARY_WORD].toLowerCase());
}

function addToAutoComplete(sentence)
{
	var words = sentence.split(' ');
	for (var i=0;i<words.length;i++)
	{
		var finalWord = '';
		for (var j=0;j<words[i].length;j++)
		{
			var c = words[i][j].toLowerCase();
			if ("abcdefghijklmnopqrstuvwxyzÃ¡Ã©Ã­Ã³ÃºÃ Ã¨Ã¬Ã²Ã¹Ã§Ã¤Ã«Ã¯Ã–Ã¼Ã¢ÃªÃ®Ã´Ã»".indexOf(c) != -1) finalWord = finalWord + c;
			else break;
		}
	
		if (finalWord.length>=3) 
		{
			var index = autocomplete.indexOf(finalWord);
			if (index!=-1) autocomplete.splice(index,1);
			autocomplete.push(finalWord);
		}
	}
}

function completedWord(word)
{
	if (word=='') return '';
   autocompleteBaseWord  =word;
   var foundCount = 0;
   for (var i = autocomplete.length-1;i>=0; i--)
   {
   	  if (autocomplete[i].length > word.length) 
   	  	 if (autocomplete[i].indexOf(word)==0) 
   	  	 	{
   	  	 		foundCount++;
   	  	 		if (foundCount>autocompleteStep)
   	  	 		{
   	  	 			autocompleteStep++;
   	  	 			return autocomplete[i];
   	  	 		}
   	  	 	}
   }
   return word;
}


// Exacution starts here, called by the html file on document.ready()
function start()
{
	h_init(); //hook
	$('.graphics').addClass('half_graphics');
	$('.text').addClass('half_text');
	if (isBadIE()) alert(STR_BADIE)
	loadPronounSufixes();	
    setInputPlaceHolder();
    initAutoComplete();

	// Assign keypress action for input box (detect enter key press)
	$('.prompt').keypress(function(e) {  
    	if (e.which == 13) 
    	{ 
    		setInputPlaceHolder();
    		player_order = $('.prompt').val();
    		if (player_order.charAt(0) == '#')
    		{
    			addToTranscript(player_order + STR_NEWLINE);
    			clearInputWindow();
    		} 
    		else
    		if (player_order!='') 
    				orderEnteredLoop(player_order);
    	}
    });

	// Assign arrow up key press to recover last order
    $('.prompt').keyup( function(e) {
    	if (e.which  == 38) $('.prompt').val(get_prev_player_order());
    	if (e.which  == 40) $('.prompt').val(get_next_player_order());
    });


    // Assign tab keydown to complete word
    $('.prompt').keydown( function(e) {
    	if (e.which == 9) 
    		{
    			$('.prompt').val(predictiveText($('.prompt').val()));
    			e.preventDefault();
    		} else 
    		{
		    	autocompleteStep = 0;
    			autocompleteBaseWord = ''; // Any keypress other than tab resets the autocomplete feature
    		}
    });

    //Detect resize to change flag 12
     $(window).resize(function () {
     	setFlag(FLAG_PARSER_SETTINGS, bitset(getFlag(FLAG_PARSER_SETTINGS), 4));  // Set bit at flag that marks that a window resize happened 
     	clearPictureAt();
     	return;
     });


     // assign any click on block layer --> close it
     $(document).click( function(e) {
     	if (inBlock)
     	{
     		closeBlock();
     		e.preventDefault();
     		return;
     	}

     	if (inAnykey)  // return for ANYKEY, accepts mouse click
     	{
     		inAnykey = false;
     		hideAnykeyLayer();
     		waitKeyCallback();
     		e.preventDefault();
     		return;
    	}

     });

     //Make tap act as click
    document.addEventListener('touchstart', function(e) {$(document).click(); }, false);   
     
     
	$(document).keydown(function(e) {

		if (!h_keydown(e)) return; // hook

		// if waiting for END response
		if (inEND)
		{
			var endYESresponse = getSysMessageText(SYSMESS_YES);
			var endNOresponse = getSysMessageText(SYSMESS_NO);
			if (!endYESresponse.length) endYESresponse = 'Y'; // Prevent problems with empy message
			if (!endNOresponse.length) endNOresponse = 'N'; 
			var endYESresponseCode = endYESresponse.charCodeAt(0);
			var endNOresponseCode = endNOresponse.charCodeAt(0);

			if (endYESresponseCode == e.keyCode) location.reload(); 
			if (endNOresponseCode == e.keyCode)  
			{
				inEND = false;
				sfxstopall();
				$('body').hide('slow');
			}
			return;
		}


		// if waiting for QUIT response
		if (inQUIT)
		{
			var endYESresponse = getSysMessageText(SYSMESS_YES);
			var endNOresponse = getSysMessageText(SYSMESS_NO);
			if (!endYESresponse.length) endYESresponse = 'Y'; // Prevent problems with empy message
			if (!endNOresponse.length) endNOresponse = 'N'; 
			var endYESresponseCode = endYESresponse.charCodeAt(0);
			var endNOresponseCode = endNOresponse.charCodeAt(0);

			if (endNOresponseCode == e.keyCode) 
			{
	           inQUIT=false;
			   waitkey_callback_function.pop();
			   hideAnykeyLayer();
			   e.preventDefault();
			}

			if (endYESresponseCode == e.keyCode) 
			{
				inQUIT=false;
     			e.preventDefault();
				waitKeyCallback();
     			return;				
			}
		}


		if (inGetkey)  // return for getkey
     	{
     		setFlag(getkey_return_flag, e.keyCode);
     		getkey_return_flag = null;
     		inGetkey = false;
     		hideAnykeyLayer();
     		e.preventDefault();
     		waitKeyCallback();
     		return;
      	}


     	if (inAnykey)  // return for anykey
     	{
     		inAnykey = false;
     		hideAnykeyLayer();
     		e.preventDefault();
     		waitKeyCallback();
     		return;
     	}

		// if keypress and block displayed, close it
     	if (inBlock)
     		{
     			closeBlock();
     			e.preventDefault();
     			return;
     		}


     	// if ESC pressed and transcript layer visible, close it
     	if ((inTranscript) &&  (e.keyCode == 27)) 
     		{
     			$('.transcript_layer').hide();
     			inTranscript = false;
     			e.preventDefault();
     			return;
     		}

     	// Scroll text window using PgUp/PgDown
        if (e.keyCode==33)  // PgUp
        {
        	divTextScrollUp();
        	e.preventDefault();
        	return;
        }
        if (e.keyCode==34)  // PgDown
        {
        	divTextScrollDown();
        }


	});


    $(document).bind('mousewheel',function(e)
    {
  		if(e.originalEvent.wheelDelta /120 > 0) divTextScrollUp(); else divTextScrollDown();
    });


	initialize();
	descriptionLoop();
	focusInput();
	
	h_post();  //hook

    // Start interrupt process
    setTimeout(function (){
    	timer();
    },TIMER_MILLISECONDS);

}

$('document').ready(
	function ()
	{
		start();
	}
	);

// VOCABULARY

vocabulary = [];
vocabulary.push([2, "A", 6]);
vocabulary.push([11, "ABAJO", 1]);
vocabulary.push([105, "ABRAZA", 0]);
vocabulary.push([105, "ABRAZAR", 0]);
vocabulary.push([64, "ABRE", 0]);
vocabulary.push([64, "ABRIR", 0]);
vocabulary.push([145, "ACARICIA", 0]);
vocabulary.push([145, "ACARICIAR", 0]);
vocabulary.push([25, "ACAVA", 0]);
vocabulary.push([25, "ACAVAR", 0]);
vocabulary.push([140, "ACERCA", 0]);
vocabulary.push([140, "ACERCAR", 0]);
vocabulary.push([94, "ACORDARSE", 0]);
vocabulary.push([94, "ACORDARTE", 0]);
vocabulary.push([137, "ACTIVA", 0]);
vocabulary.push([137, "ACTIVAR", 0]);
vocabulary.push([94, "ACUERDATE", 0]);
vocabulary.push([4, "ADENTRO", 6]);
vocabulary.push([106, "ADQUIERE", 0]);
vocabulary.push([106, "ADQUIERESE", 0]);
vocabulary.push([106, "ADQUIRIR", 0]);
vocabulary.push([13, "AFUERA", 6]);
vocabulary.push([20, "AGARRA", 0]);
vocabulary.push([20, "AGARRAR", 0]);
vocabulary.push([49, "AGITA", 0]);
vocabulary.push([49, "AGITAR", 0]);
vocabulary.push([46, "AGREDE", 0]);
vocabulary.push([46, "AGREDIR", 0]);
vocabulary.push([84, "AGUA", 1]);
vocabulary.push([2, "AL", 6]);
vocabulary.push([160, "ALEGRE", 0]);
vocabulary.push([160, "ALEGRIA", 0]);
vocabulary.push([20, "ALL", 1]);
vocabulary.push([118, "ALZA", 0]);
vocabulary.push([118, "ALZAR", 0]);
vocabulary.push([90, "ANDA", 0]);
vocabulary.push([90, "ANDAR", 0]);
vocabulary.push([50, "ANTORCHA", 1]);
vocabulary.push([54, "ANUDA", 0]);
vocabulary.push([54, "ANUDAR", 0]);
vocabulary.push([138, "APAGA", 0]);
vocabulary.push([138, "APAGAR", 0]);
vocabulary.push([161, "APLAUDE", 0]);
vocabulary.push([161, "APLAUDIR", 0]);
vocabulary.push([111, "APRETAR", 0]);
vocabulary.push([111, "APRIETA", 0]);
vocabulary.push([140, "APROXIMA", 0]);
vocabulary.push([140, "APROXIMAR", 0]);
vocabulary.push([72, "ARBUSTO", 1]);
vocabulary.push([72, "ARBUSTOS", 1]);
vocabulary.push([81, "ARENA", 1]);
vocabulary.push([65, "ARMADURA", 1]);
vocabulary.push([79, "ARRANCA", 0]);
vocabulary.push([79, "ARRANCAR", 0]);
vocabulary.push([83, "ARRASTRA", 0]);
vocabulary.push([83, "ARRASTRAR", 0]);
vocabulary.push([10, "ARRIBA", 1]);
vocabulary.push([140, "ARRIMA", 0]);
vocabulary.push([140, "ARRIMAR", 0]);
vocabulary.push([32, "ARROJA", 0]);
vocabulary.push([32, "ARROJAR", 0]);
vocabulary.push([32, "ARROJARSE", 0]);
vocabulary.push([32, "ARROJASE", 0]);
vocabulary.push([10, "ASCENDER", 0]);
vocabulary.push([10, "ASCIENDE", 0]);
vocabulary.push([162, "ASENTIR", 0]);
vocabulary.push([125, "ASESINA", 0]);
vocabulary.push([125, "ASESINAR", 0]);
vocabulary.push([162, "ASIENTE", 0]);
vocabulary.push([54, "ATA", 0]);
vocabulary.push([46, "ATACA", 0]);
vocabulary.push([46, "ATACAR", 0]);
vocabulary.push([54, "ATAR", 0]);
vocabulary.push([34, "AYUDA", 0]);
vocabulary.push([112, "BAILA", 0]);
vocabulary.push([112, "BAILAR", 0]);
vocabulary.push([11, "BAJA", 0]);
vocabulary.push([11, "BAJAR", 0]);
vocabulary.push([11, "BAJARSE", 0]);
vocabulary.push([11, "BAJARTE", 0]);
vocabulary.push([11, "BAJATE", 0]);
vocabulary.push([8, "BAJO", 6]);
vocabulary.push([131, "BALANCEA", 0]);
vocabulary.push([131, "BALANCEAR", 0]);
vocabulary.push([50, "BALANCEARS", 0]);
vocabulary.push([50, "BALANCEART", 0]);
vocabulary.push([50, "BALANCEATE", 0]);
vocabulary.push([63, "BARCA", 1]);
vocabulary.push([51, "BARRA", 1]);
vocabulary.push([51, "BARRAS", 1]);
vocabulary.push([51, "BARROTE", 1]);
vocabulary.push([51, "BARROTES", 1]);
vocabulary.push([39, "BEBE", 0]);
vocabulary.push([39, "BEBER", 0]);
vocabulary.push([39, "BEBERSE", 0]);
vocabulary.push([39, "BEBERTE", 0]);
vocabulary.push([39, "BEBETE", 0]);
vocabulary.push([62, "BESA", 0]);
vocabulary.push([62, "BESAR", 0]);
vocabulary.push([65, "BLINDAJE", 1]);
vocabulary.push([78, "BLOQUE", 1]);
vocabulary.push([78, "BLOQUES", 1]);
vocabulary.push([133, "BOSTEZA", 0]);
vocabulary.push([133, "BOSTEZAR", 0]);
vocabulary.push([63, "BOTE", 1]);
vocabulary.push([45, "BRINCA", 0]);
vocabulary.push([45, "BRINCAR", 0]);
vocabulary.push([45, "BRINCARSE", 0]);
vocabulary.push([45, "BRINCARTE", 0]);
vocabulary.push([45, "BRINCATE", 0]);
vocabulary.push([78, "BUSCA", 0]);
vocabulary.push([78, "BUSCAR", 0]);
vocabulary.push([69, "CADENA", 1]);
vocabulary.push([69, "CADENAS", 1]);
vocabulary.push([47, "CAGA", 0]);
vocabulary.push([47, "CAGAR", 0]);
vocabulary.push([47, "CAGARSE", 0]);
vocabulary.push([47, "CAGARTE", 0]);
vocabulary.push([47, "CAGATE", 0]);
vocabulary.push([57, "CALAVERA", 1]);
vocabulary.push([58, "CAMA", 1]);
vocabulary.push([67, "CAMASTRO", 1]);
vocabulary.push([67, "CAMASTROS", 1]);
vocabulary.push([90, "CAMINA", 0]);
vocabulary.push([90, "CAMINAR", 0]);
vocabulary.push([63, "CANOA", 1]);
vocabulary.push([44, "CANTA", 0]);
vocabulary.push([44, "CANTAR", 0]);
vocabulary.push([52, "CARBON", 1]);
vocabulary.push([27, "CARGAR", 0]);
vocabulary.push([29, "CARGARAM", 0]);
vocabulary.push([67, "CATRE", 1]);
vocabulary.push([67, "CATRES", 1]);
vocabulary.push([51, "CAVA", 0]);
vocabulary.push([51, "CAVAR", 0]);
vocabulary.push([65, "CERRAR", 0]);
vocabulary.push([77, "CHILLA", 0]);
vocabulary.push([77, "CHILLAR", 0]);
vocabulary.push([56, "CHIMENEA", 1]);
vocabulary.push([63, "CHUPA", 0]);
vocabulary.push([63, "CHUPAR", 0]);
vocabulary.push([77, "CIELO", 1]);
vocabulary.push([77, "CIELOS", 1]);
vocabulary.push([65, "CIERRA", 0]);
vocabulary.push([65, "CLOSE", 0]);
vocabulary.push([20, "COGE", 0]);
vocabulary.push([20, "COGER", 0]);
vocabulary.push([50, "COLUMPIARS", 0]);
vocabulary.push([50, "COLUMPIART", 0]);
vocabulary.push([50, "COLUMPIATE", 0]);
vocabulary.push([38, "COME", 0]);
vocabulary.push([38, "COMER", 0]);
vocabulary.push([38, "COMERSE", 0]);
vocabulary.push([38, "COMERTE", 0]);
vocabulary.push([38, "COMETE", 0]);
vocabulary.push([106, "COMPRA", 0]);
vocabulary.push([106, "COMPRAR", 0]);
vocabulary.push([106, "COMPRARSE", 0]);
vocabulary.push([106, "COMPRARTE", 0]);
vocabulary.push([106, "COMPRASE", 0]);
vocabulary.push([106, "COMPRATE", 0]);
vocabulary.push([9, "CON", 6]);
vocabulary.push([103, "CONECTA", 0]);
vocabulary.push([103, "CONECTAR", 0]);
vocabulary.push([107, "CONSULTA", 0]);
vocabulary.push([107, "CONSULTAR", 0]);
vocabulary.push([38, "CONSUME", 0]);
vocabulary.push([38, "CONSUMIR", 0]);
vocabulary.push([85, "CORAZA", 1]);
vocabulary.push([90, "CORRE", 0]);
vocabulary.push([90, "CORRER", 0]);
vocabulary.push([52, "CORTA", 0]);
vocabulary.push([52, "CORTAR", 0]);
vocabulary.push([85, "COTA", 1]);
vocabulary.push([57, "CRANEO", 1]);
vocabulary.push([54, "CUCHILLO", 1]);
vocabulary.push([6, "CUIDADOSAM", 3]);
vocabulary.push([11, "D", 1]);
vocabulary.push([73, "DA", 0]);
vocabulary.push([112, "DANZA", 0]);
vocabulary.push([112, "DANZAR", 0]);
vocabulary.push([73, "DAR", 0]);
vocabulary.push([73, "DARSE", 0]);
vocabulary.push([73, "DARTE", 0]);
vocabulary.push([73, "DASE", 0]);
vocabulary.push([3, "DE", 6]);
vocabulary.push([8, "DEBAJO", 6]);
vocabulary.push([31, "DECIR", 0]);
vocabulary.push([47, "DEFECA", 0]);
vocabulary.push([47, "DEFECAR", 0]);
vocabulary.push([47, "DEFECARSE", 0]);
vocabulary.push([47, "DEFECARTE", 0]);
vocabulary.push([47, "DEFECATE", 0]);
vocabulary.push([21, "DEJA", 0]);
vocabulary.push([21, "DEJAR", 0]);
vocabulary.push([3, "DEL", 6]);
vocabulary.push([14, "DELANTE", 6]);
vocabulary.push([4, "DENTRO", 6]);
vocabulary.push([138, "DESACTIVA", 0]);
vocabulary.push([138, "DESACTIVAR", 0]);
vocabulary.push([98, "DESATA", 0]);
vocabulary.push([98, "DESATAR", 0]);
vocabulary.push([136, "DESCANSA", 0]);
vocabulary.push([136, "DESCANSAR", 0]);
vocabulary.push([11, "DESCENDER", 0]);
vocabulary.push([11, "DESCIENDE", 0]);
vocabulary.push([104, "DESCONECTA", 0]);
vocabulary.push([5, "DESDE", 6]);
vocabulary.push([97, "DESDOBLA", 0]);
vocabulary.push([97, "DESDOBLAR", 0]);
vocabulary.push([155, "DESEMPUÃ‘A", 0]);
vocabulary.push([104, "DESENCHUFA", 0]);
vocabulary.push([156, "DESENFUNDA", 0]);
vocabulary.push([51, "DESENTERRA", 0]);
vocabulary.push([51, "DESENTIERR", 0]);
vocabulary.push([87, "DESPERTAR", 0]);
vocabulary.push([87, "DESPERTARS", 0]);
vocabulary.push([87, "DESPERTART", 0]);
vocabulary.push([87, "DESPIERTA", 0]);
vocabulary.push([87, "DESPIERTAT", 0]);
vocabulary.push([110, "DESPLAZA", 0]);
vocabulary.push([110, "DESPLAZAR", 0]);
vocabulary.push([154, "DESTRUIR", 0]);
vocabulary.push([154, "DESTRUYE", 0]);
vocabulary.push([22, "DESVESTIR", 0]);
vocabulary.push([22, "DESVESTIRS", 0]);
vocabulary.push([22, "DESVESTIRT", 0]);
vocabulary.push([22, "DESVISTE", 0]);
vocabulary.push([7, "DETRAS", 6]);
vocabulary.push([31, "DI", 0]);
vocabulary.push([90, "DIRIGETE", 0]);
vocabulary.push([90, "DIRIGIRSE", 0]);
vocabulary.push([90, "DIRIGIRTE", 0]);
vocabulary.push([157, "DISPARA", 0]);
vocabulary.push([157, "DISPARALE", 0]);
vocabulary.push([157, "DISPARAR", 0]);
vocabulary.push([157, "DISPARARLE", 0]);
vocabulary.push([96, "DOBLA", 0]);
vocabulary.push([96, "DOBLAR", 0]);
vocabulary.push([151, "DOPAR", 0]);
vocabulary.push([151, "DOPARSE", 0]);
vocabulary.push([61, "DORMIR", 0]);
vocabulary.push([61, "DORMIRSE", 0]);
vocabulary.push([61, "DORMIRTE", 0]);
vocabulary.push([11, "DOWN", 1]);
vocabulary.push([151, "DROGAR", 0]);
vocabulary.push([151, "DROGARSE", 0]);
vocabulary.push([21, "DROP", 0]);
vocabulary.push([61, "DUERME", 0]);
vocabulary.push([6, "DURA", 2]);
vocabulary.push([6, "DURO", 2]);
vocabulary.push([4, "E", 1]);
vocabulary.push([74, "ECHA", 0]);
vocabulary.push([74, "ECHAR", 0]);
vocabulary.push([61, "ECHARSE", 0]);
vocabulary.push([61, "ECHARTE", 0]);
vocabulary.push([61, "ECHATE", 0]);
vocabulary.push([73, "EDIFICACIO", 1]);
vocabulary.push([165, "EMBARCAR", 0]);
vocabulary.push([33, "EMPUJA", 0]);
vocabulary.push([33, "EMPUJAR", 0]);
vocabulary.push([156, "EMPUÃ‘A", 0]);
vocabulary.push([156, "EMPUÃ‘AR", 0]);
vocabulary.push([4, "EN", 6]);
vocabulary.push([137, "ENCENDER", 0]);
vocabulary.push([103, "ENCHUFA", 0]);
vocabulary.push([103, "ENCHUFAR", 0]);
vocabulary.push([137, "ENCIENDE", 0]);
vocabulary.push([16, "ENCIMA", 6]);
vocabulary.push([155, "ENFUNDA", 0]);
vocabulary.push([155, "ENFUNDAR", 0]);
vocabulary.push([54, "ENLAZA", 0]);
vocabulary.push([54, "ENLAZAR", 0]);
vocabulary.push([68, "ENO", 1]);
vocabulary.push([36, "ENSEÃ‘A", 0]);
vocabulary.push([36, "ENSEÃ‘AR", 0]);
vocabulary.push([36, "ENSEÃ‘ARSE", 0]);
vocabulary.push([36, "ENSEÃ‘ASE", 0]);
vocabulary.push([12, "ENTER", 0]);
vocabulary.push([132, "ENTERRAR", 0]);
vocabulary.push([132, "ENTIERRA", 0]);
vocabulary.push([2, "ENTONCES", 5]);
vocabulary.push([12, "ENTRA", 0]);
vocabulary.push([12, "ENTRAR", 0]);
vocabulary.push([15, "ENTRE", 6]);
vocabulary.push([126, "ERUCTA", 0]);
vocabulary.push([126, "ERUCTAR", 0]);
vocabulary.push([126, "ERUCTARSE", 0]);
vocabulary.push([126, "ERUCTARTE", 0]);
vocabulary.push([126, "ERUCTATE", 0]);
vocabulary.push([57, "ESCALA", 0]);
vocabulary.push([57, "ESCALAR", 0]);
vocabulary.push([66, "ESCALAS", 1]);
vocabulary.push([66, "ESCALERA", 1]);
vocabulary.push([66, "ESCALERAS", 1]);
vocabulary.push([66, "ESCALINATA", 1]);
vocabulary.push([91, "ESCONDE", 0]);
vocabulary.push([91, "ESCONDER", 0]);
vocabulary.push([92, "ESCONDERSE", 0]);
vocabulary.push([92, "ESCONDERTE", 0]);
vocabulary.push([92, "ESCONDETE", 0]);
vocabulary.push([64, "ESCRITORIO", 1]);
vocabulary.push([37, "ESCUCHA", 0]);
vocabulary.push([37, "ESCUCHAR", 0]);
vocabulary.push([48, "ESCUPE", 0]);
vocabulary.push([48, "ESCUPIR", 0]);
vocabulary.push([87, "ESPABILAR", 0]);
vocabulary.push([87, "ESPABILARS", 0]);
vocabulary.push([87, "ESPABILART", 0]);
vocabulary.push([87, "ESPABILATE", 0]);
vocabulary.push([43, "ESPERA", 0]);
vocabulary.push([43, "ESPERAR", 0]);
vocabulary.push([57, "ESQUELETO", 1]);
vocabulary.push([4, "ESTE", 1]);
vocabulary.push([139, "ESTIRA", 0]);
vocabulary.push([139, "ESTIRAR", 0]);
vocabulary.push([147, "ESTRANGULA", 0]);
vocabulary.push([73, "ESTRUCTURA", 1]);
vocabulary.push([111, "ESTRUJA", 0]);
vocabulary.push([111, "ESTRUJAR", 0]);
vocabulary.push([30, "EX", 0]);
vocabulary.push([30, "EXAMINA", 0]);
vocabulary.push([30, "EXAMINAR", 0]);
vocabulary.push([85, "EXAMINARSE", 0]);
vocabulary.push([85, "EXAMINARTE", 0]);
vocabulary.push([85, "EXAMINATE", 0]);
vocabulary.push([51, "EXCAVA", 0]);
vocabulary.push([51, "EXCAVAR", 0]);
vocabulary.push([12, "EXCEPTO", 6]);
vocabulary.push([13, "EXIT", 0]);
vocabulary.push([41, "EXITS", 0]);
vocabulary.push([85, "EXME", 0]);
vocabulary.push([67, "EXTINGUE", 0]);
vocabulary.push([67, "EXTINGUIR", 0]);
vocabulary.push([75, "EXTRAE", 0]);
vocabulary.push([75, "EXTRAER", 0]);
vocabulary.push([160, "FELICIDAD", 0]);
vocabulary.push([160, "FELIZ", 0]);
vocabulary.push([25, "FIN", 0]);
vocabulary.push([159, "FLATULENCI", 0]);
vocabulary.push([117, "FLOTA", 0]);
vocabulary.push([117, "FLOTAR", 0]);
vocabulary.push([101, "FREGAR", 0]);
vocabulary.push([101, "FRIEGA", 0]);
vocabulary.push([101, "FROTA", 0]);
vocabulary.push([101, "FROTAR", 0]);
vocabulary.push([13, "FUERA", 6]);
vocabulary.push([151, "FUMAR", 0]);
vocabulary.push([151, "FUMARSE", 0]);
vocabulary.push([55, "FUNDA", 1]);
vocabulary.push([55, "FUNDAS", 1]);
vocabulary.push([86, "GARROTE", 1]);
vocabulary.push([35, "GIRA", 0]);
vocabulary.push([35, "GIRAR", 0]);
vocabulary.push([72, "GOLPEA", 0]);
vocabulary.push([72, "GOLPEAR", 0]);
vocabulary.push([26, "GRABA", 0]);
vocabulary.push([26, "GRABAR", 0]);
vocabulary.push([28, "GRABARAM", 0]);
vocabulary.push([3, "GRANDE", 2]);
vocabulary.push([81, "GRANO", 1]);
vocabulary.push([81, "GRANOS", 1]);
vocabulary.push([69, "GRILLETE", 1]);
vocabulary.push([69, "GRILLETES", 1]);
vocabulary.push([77, "GRITA", 0]);
vocabulary.push([77, "GRITAR", 0]);
vocabulary.push([26, "GUARDA", 0]);
vocabulary.push([26, "GUARDAR", 0]);
vocabulary.push([21, "GUARDIA", 1]);
vocabulary.push([21, "GUARDIAN", 1]);
vocabulary.push([122, "HABLA", 0]);
vocabulary.push([122, "HABLAR", 0]);
vocabulary.push([6, "HACIA", 6]);
vocabulary.push([34, "HELP", 0]);
vocabulary.push([71, "HIERBA", 1]);
vocabulary.push([10, "HIERRO", 2]);
vocabulary.push([56, "HOGAR", 1]);
vocabulary.push([42, "HUELE", 0]);
vocabulary.push([57, "HUESO", 1]);
vocabulary.push([57, "HUESOS", 1]);
vocabulary.push([90, "HUIR", 0]);
vocabulary.push([42, "HUSMEA", 0]);
vocabulary.push([42, "HUSMEAR", 0]);
vocabulary.push([90, "HUYE", 0]);
vocabulary.push([14, "I", 1]);
vocabulary.push([59, "IMPLORA", 0]);
vocabulary.push([59, "IMPLORAR", 0]);
vocabulary.push([66, "INCENDIA", 0]);
vocabulary.push([66, "INCENDIAR", 0]);
vocabulary.push([89, "INCREPA", 0]);
vocabulary.push([89, "INCREPAR", 0]);
vocabulary.push([38, "INGERIR", 0]);
vocabulary.push([38, "INGIERE", 0]);
vocabulary.push([123, "INGRESA", 0]);
vocabulary.push([123, "INGRESAR", 0]);
vocabulary.push([74, "INSERTA", 0]);
vocabulary.push([74, "INSERTAR", 0]);
vocabulary.push([30, "INSPECCION", 0]);
vocabulary.push([89, "INSULTA", 0]);
vocabulary.push([89, "INSULTAR", 0]);
vocabulary.push([12, "INTERNARTE", 0]);
vocabulary.push([12, "INTERNATE", 0]);
vocabulary.push([123, "INTRODUCE", 0]);
vocabulary.push([12, "INTRODUCET", 0]);
vocabulary.push([123, "INTRODUCIR", 0]);
vocabulary.push([14, "INVEN", 1]);
vocabulary.push([14, "INVENTARIO", 1]);
vocabulary.push([90, "IR", 0]);
vocabulary.push([90, "IRSE", 0]);
vocabulary.push([90, "IRTE", 0]);
vocabulary.push([99, "JUNTA", 0]);
vocabulary.push([99, "JUNTAR", 0]);
vocabulary.push([24, "L", 0]);
vocabulary.push([2, "LA", 4]);
vocabulary.push([78, "LADRILLO", 1]);
vocabulary.push([78, "LADRILLOS", 1]);
vocabulary.push([63, "LAME", 0]);
vocabulary.push([63, "LAMER", 0]);
vocabulary.push([32, "LANZA", 0]);
vocabulary.push([32, "LANZAR", 0]);
vocabulary.push([32, "LANZARSE", 0]);
vocabulary.push([32, "LANZASE", 0]);
vocabulary.push([9, "LARGA", 2]);
vocabulary.push([9, "LARGO", 2]);
vocabulary.push([2, "LAS", 4]);
vocabulary.push([101, "LAVA", 0]);
vocabulary.push([101, "LAVAR", 0]);
vocabulary.push([88, "LAVARSE", 0]);
vocabulary.push([88, "LAVARTE", 0]);
vocabulary.push([88, "LAVATE", 0]);
vocabulary.push([2, "LE", 4]);
vocabulary.push([109, "LEE", 0]);
vocabulary.push([109, "LEER", 0]);
vocabulary.push([109, "LEERSE", 0]);
vocabulary.push([109, "LEERTE", 0]);
vocabulary.push([109, "LEETE", 0]);
vocabulary.push([3, "LENTAMENTE", 3]);
vocabulary.push([2, "LES", 4]);
vocabulary.push([114, "LEVANTA", 0]);
vocabulary.push([114, "LEVANTAR", 0]);
vocabulary.push([53, "LEVANTARSE", 0]);
vocabulary.push([53, "LEVANTARTE", 0]);
vocabulary.push([53, "LEVANTATE", 0]);
vocabulary.push([117, "LEVITA", 0]);
vocabulary.push([117, "LEVITAR", 0]);
vocabulary.push([59, "LIGADURA", 1]);
vocabulary.push([59, "LIGADURAS", 1]);
vocabulary.push([101, "LIMPIA", 0]);
vocabulary.push([101, "LIMPIAR", 0]);
vocabulary.push([88, "LIMPIARSE", 0]);
vocabulary.push([88, "LIMPIARTE", 0]);
vocabulary.push([88, "LIMPIATE", 0]);
vocabulary.push([76, "LLAMA", 0]);
vocabulary.push([76, "LLAMAR", 0]);
vocabulary.push([55, "LLENA", 0]);
vocabulary.push([55, "LLENAR", 0]);
vocabulary.push([93, "LLORA", 0]);
vocabulary.push([93, "LLORAR", 0]);
vocabulary.push([93, "LLORIQUEA", 0]);
vocabulary.push([93, "LLORIQUEAR", 0]);
vocabulary.push([2, "LO", 4]);
vocabulary.push([27, "LOAD", 0]);
vocabulary.push([24, "LOOK", 0]);
vocabulary.push([2, "LOS", 4]);
vocabulary.push([87, "LOSA", 1]);
vocabulary.push([87, "LOSAS", 1]);
vocabulary.push([146, "LUCHA", 0]);
vocabulary.push([146, "LUCHAR", 0]);
vocabulary.push([70, "LUNA", 1]);
vocabulary.push([24, "M", 0]);
vocabulary.push([71, "MALEZA", 1]);
vocabulary.push([86, "MANDOBLE", 1]);
vocabulary.push([84, "MAR", 1]);
vocabulary.push([123, "MARCA", 0]);
vocabulary.push([123, "MARCAR", 0]);
vocabulary.push([38, "MASTICA", 0]);
vocabulary.push([38, "MASTICAR", 0]);
vocabulary.push([125, "MATA", 0]);
vocabulary.push([125, "MATAR", 0]);
vocabulary.push([81, "MATARSE", 0]);
vocabulary.push([81, "MATARTE", 0]);
vocabulary.push([81, "MATATE", 0]);
vocabulary.push([72, "MATORRAL", 1]);
vocabulary.push([72, "MATORRALES", 1]);
vocabulary.push([86, "MAZA", 1]);
vocabulary.push([47, "MEA", 0]);
vocabulary.push([47, "MEAR", 0]);
vocabulary.push([47, "MEARSE", 0]);
vocabulary.push([47, "MEARTE", 0]);
vocabulary.push([47, "MEATE", 0]);
vocabulary.push([128, "MENEA", 0]);
vocabulary.push([128, "MENEAR", 0]);
vocabulary.push([64, "MESA", 1]);
vocabulary.push([64, "MESON", 1]);
vocabulary.push([74, "METE", 0]);
vocabulary.push([74, "METER", 0]);
vocabulary.push([124, "MEZCLA", 0]);
vocabulary.push([124, "MEZCLAR", 0]);
vocabulary.push([24, "MIRA", 0]);
vocabulary.push([24, "MIRAR", 0]);
vocabulary.push([85, "MIRARSE", 0]);
vocabulary.push([85, "MIRARTE", 0]);
vocabulary.push([85, "MIRATE", 0]);
vocabulary.push([165, "MONTAR", 0]);
vocabulary.push([36, "MOSTRAR", 0]);
vocabulary.push([36, "MOSTRARSE", 0]);
vocabulary.push([110, "MOVER", 0]);
vocabulary.push([36, "MUESTRA", 0]);
vocabulary.push([36, "MUESTRASE", 0]);
vocabulary.push([110, "MUEVE", 0]);
vocabulary.push([75, "MURO", 1]);
vocabulary.push([75, "MUROS", 1]);
vocabulary.push([2, "N", 1]);
vocabulary.push([56, "NADA", 0]);
vocabulary.push([56, "NADAR", 0]);
vocabulary.push([6, "NE", 1]);
vocabulary.push([163, "NEGAR", 0]);
vocabulary.push([163, "NIEGA", 0]);
vocabulary.push([7, "NO", 1]);
vocabulary.push([150, "NOQUEA", 0]);
vocabulary.push([150, "NOQUEAR", 0]);
vocabulary.push([6, "NORDESTE", 1]);
vocabulary.push([6, "NORESTE", 1]);
vocabulary.push([7, "NOROESTE", 1]);
vocabulary.push([2, "NORTE", 1]);
vocabulary.push([164, "NOSTALGIA", 0]);
vocabulary.push([83, "NUBE", 1]);
vocabulary.push([83, "NUBES", 1]);
vocabulary.push([5, "NUEVA", 2]);
vocabulary.push([5, "NUEVO", 2]);
vocabulary.push([7, "NW", 1]);
vocabulary.push([5, "O", 1]);
vocabulary.push([24, "OBSERVA", 0]);
vocabulary.push([24, "OBSERVAR", 0]);
vocabulary.push([84, "OCEANO", 1]);
vocabulary.push([91, "OCULTA", 0]);
vocabulary.push([91, "OCULTAR", 0]);
vocabulary.push([92, "OCULTARSE", 0]);
vocabulary.push([92, "OCULTARTE", 0]);
vocabulary.push([92, "OCULTATE", 0]);
vocabulary.push([5, "OESTE", 1]);
vocabulary.push([138, "OFF", 0]);
vocabulary.push([73, "OFRECE", 0]);
vocabulary.push([73, "OFRECER", 0]);
vocabulary.push([73, "OFRECERSE", 0]);
vocabulary.push([73, "OFRECESE", 0]);
vocabulary.push([37, "OIR", 0]);
vocabulary.push([24, "OJEA", 0]);
vocabulary.push([24, "OJEAR", 0]);
vocabulary.push([42, "OLER", 0]);
vocabulary.push([42, "OLFATEA", 0]);
vocabulary.push([42, "OLFATEAR", 0]);
vocabulary.push([137, "ON", 0]);
vocabulary.push([64, "OPEN", 0]);
vocabulary.push([59, "ORA", 0]);
vocabulary.push([59, "ORAR", 0]);
vocabulary.push([47, "ORINA", 0]);
vocabulary.push([47, "ORINAR", 0]);
vocabulary.push([47, "ORINARSE", 0]);
vocabulary.push([47, "ORINARTE", 0]);
vocabulary.push([47, "ORINATE", 0]);
vocabulary.push([82, "OXIDO", 1]);
vocabulary.push([37, "OYE", 0]);
vocabulary.push([68, "PAJA", 1]);
vocabulary.push([63, "PALADEA", 0]);
vocabulary.push([63, "PALADEAR", 0]);
vocabulary.push([40, "PALPA", 0]);
vocabulary.push([40, "PALPAR", 0]);
vocabulary.push([10, "PARA", 6]);
vocabulary.push([75, "PARED", 1]);
vocabulary.push([75, "PAREDES", 1]);
vocabulary.push([152, "PARTE", 0]);
vocabulary.push([152, "PARTIR", 0]);
vocabulary.push([144, "PATEA", 0]);
vocabulary.push([144, "PATEAR", 0]);
vocabulary.push([159, "PEDO", 0]);
vocabulary.push([60, "PENSAR", 0]);
vocabulary.push([159, "PEO", 0]);
vocabulary.push([2, "PEQUEÃ‘A", 2]);
vocabulary.push([2, "PEQUEÃ‘O", 2]);
vocabulary.push([85, "PETO", 1]);
vocabulary.push([62, "PIEDRA", 1]);
vocabulary.push([60, "PIENSA", 0]);
vocabulary.push([148, "PISOTEA", 0]);
vocabulary.push([148, "PISOTEAR", 0]);
vocabulary.push([80, "POLVO", 1]);
vocabulary.push([71, "PON", 0]);
vocabulary.push([71, "PONER", 0]);
vocabulary.push([71, "PONERSE", 0]);
vocabulary.push([71, "PONERTE", 0]);
vocabulary.push([71, "PONSE", 0]);
vocabulary.push([71, "PONTE", 0]);
vocabulary.push([47, "POPIS", 0]);
vocabulary.push([47, "POPO", 0]);
vocabulary.push([11, "POR", 6]);
vocabulary.push([86, "PORRA", 1]);
vocabulary.push([74, "PORTAL", 1]);
vocabulary.push([74, "PORTON", 1]);
vocabulary.push([142, "PREGUNTA", 0]);
vocabulary.push([142, "PREGUNTAR", 0]);
vocabulary.push([137, "PRENDE", 0]);
vocabulary.push([137, "PRENDER", 0]);
vocabulary.push([119, "PRESIONA", 0]);
vocabulary.push([119, "PRESIONAR", 0]);
vocabulary.push([63, "PROBAR", 0]);
vocabulary.push([63, "PRUEBA", 0]);
vocabulary.push([74, "PUERTA", 1]);
vocabulary.push([101, "PULE", 0]);
vocabulary.push([101, "PULIR", 0]);
vocabulary.push([119, "PULSA", 0]);
vocabulary.push([119, "PULSAR", 0]);
vocabulary.push([47, "PUPU", 0]);
vocabulary.push([153, "QUEBRAR", 0]);
vocabulary.push([66, "QUEMA", 0]);
vocabulary.push([66, "QUEMAR", 0]);
vocabulary.push([153, "QUIEBRA", 0]);
vocabulary.push([25, "QUIT", 0]);
vocabulary.push([22, "QUITA", 0]);
vocabulary.push([22, "QUITAR", 0]);
vocabulary.push([22, "QUITARSE", 0]);
vocabulary.push([22, "QUITARTE", 0]);
vocabulary.push([22, "QUITASE", 0]);
vocabulary.push([22, "QUITATE", 0]);
vocabulary.push([79, "RAMA", 1]);
vocabulary.push([79, "RAMAS", 1]);
vocabulary.push([29, "RAMLOAD", 0]);
vocabulary.push([28, "RAMSAVE", 0]);
vocabulary.push([2, "RAPIDAMENT", 3]);
vocabulary.push([102, "RASCA", 0]);
vocabulary.push([102, "RASCAR", 0]);
vocabulary.push([134, "RASGA", 0]);
vocabulary.push([134, "RASGAR", 0]);
vocabulary.push([143, "RASPA", 0]);
vocabulary.push([143, "RASPAR", 0]);
vocabulary.push([78, "REBUSCA", 0]);
vocabulary.push([78, "REBUSCAR", 0]);
vocabulary.push([158, "RECARGA", 0]);
vocabulary.push([158, "RECARGAR", 0]);
vocabulary.push([20, "RECOGE", 0]);
vocabulary.push([20, "RECOGER", 0]);
vocabulary.push([94, "RECORDAR", 0]);
vocabulary.push([94, "RECUERDA", 0]);
vocabulary.push([27, "RECUPERA", 0]);
vocabulary.push([27, "RECUPERAR", 0]);
vocabulary.push([73, "REGALA", 0]);
vocabulary.push([73, "REGALAR", 0]);
vocabulary.push([73, "REGALARSE", 0]);
vocabulary.push([73, "REGALASE", 0]);
vocabulary.push([78, "REGISTRA", 0]);
vocabulary.push([78, "REGISTRAR", 0]);
vocabulary.push([84, "REGISTRARS", 0]);
vocabulary.push([84, "REGISTRART", 0]);
vocabulary.push([84, "REGISTRATE", 0]);
vocabulary.push([135, "RELLENA", 0]);
vocabulary.push([135, "RELLENAR", 0]);
vocabulary.push([158, "RELOAD", 0]);
vocabulary.push([130, "REMOVER", 0]);
vocabulary.push([130, "REMUEVE", 0]);
vocabulary.push([31, "RESPONDE", 0]);
vocabulary.push([31, "RESPONDER", 0]);
vocabulary.push([58, "RETORCER", 0]);
vocabulary.push([58, "RETUERCE", 0]);
vocabulary.push([141, "REUNE", 0]);
vocabulary.push([141, "REUNIR", 0]);
vocabulary.push([120, "REVISA", 0]);
vocabulary.push([120, "REVISAR", 0]);
vocabulary.push([62, "ROCA", 1]);
vocabulary.push([59, "ROGAR", 0]);
vocabulary.push([69, "ROMPE", 0]);
vocabulary.push([69, "ROMPER", 0]);
vocabulary.push([61, "RONCA", 0]);
vocabulary.push([61, "RONCAR", 0]);
vocabulary.push([35, "ROTA", 0]);
vocabulary.push([35, "ROTAR", 0]);
vocabulary.push([59, "RUEGA", 0]);
vocabulary.push([59, "RUEGO", 0]);
vocabulary.push([5, "RUIDOSAMEN", 3]);
vocabulary.push([3, "S", 1]);
vocabulary.push([53, "SABANAS", 1]);
vocabulary.push([63, "SABOREA", 0]);
vocabulary.push([63, "SABOREAR", 0]);
vocabulary.push([75, "SACA", 0]);
vocabulary.push([75, "SACAR", 0]);
vocabulary.push([22, "SACARSE", 0]);
vocabulary.push([22, "SACARTE", 0]);
vocabulary.push([22, "SACASE", 0]);
vocabulary.push([22, "SACATE", 0]);
vocabulary.push([129, "SACUDE", 0]);
vocabulary.push([129, "SACUDIR", 0]);
vocabulary.push([13, "SAL", 0]);
vocabulary.push([41, "SALIDAS", 0]);
vocabulary.push([13, "SALIR", 0]);
vocabulary.push([45, "SALTA", 0]);
vocabulary.push([45, "SALTAR", 0]);
vocabulary.push([45, "SALTARSE", 0]);
vocabulary.push([45, "SALTARTE", 0]);
vocabulary.push([45, "SALTATE", 0]);
vocabulary.push([113, "SALUDA", 0]);
vocabulary.push([113, "SALUDAR", 0]);
vocabulary.push([26, "SALVA", 0]);
vocabulary.push([26, "SALVAR", 0]);
vocabulary.push([26, "SAVE", 0]);
vocabulary.push([8, "SE", 1]);
vocabulary.push([2, "SELA", 4]);
vocabulary.push([2, "SELAS", 4]);
vocabulary.push([2, "SELO", 4]);
vocabulary.push([2, "SELOS", 4]);
vocabulary.push([23, "SENTAR", 0]);
vocabulary.push([23, "SENTARSE", 0]);
vocabulary.push([23, "SENTARTE", 0]);
vocabulary.push([100, "SEPARA", 0]);
vocabulary.push([100, "SEPARAR", 0]);
vocabulary.push([21, "SERENO", 1]);
vocabulary.push([23, "SIENTATE", 0]);
vocabulary.push([115, "SILBA", 0]);
vocabulary.push([115, "SILBAR", 0]);
vocabulary.push([4, "SILENCIOSA", 3]);
vocabulary.push([9, "SO", 1]);
vocabulary.push([16, "SOBRE", 6]);
vocabulary.push([67, "SOFOCA", 0]);
vocabulary.push([67, "SOFOCAR", 0]);
vocabulary.push([93, "SOLLOZA", 0]);
vocabulary.push([93, "SOLLOZAR", 0]);
vocabulary.push([21, "SOLTAR", 0]);
vocabulary.push([95, "SOPLA", 0]);
vocabulary.push([95, "SOPLAR", 0]);
vocabulary.push([7, "SUAVE", 2]);
vocabulary.push([10, "SUBE", 0]);
vocabulary.push([10, "SUBETE", 0]);
vocabulary.push([10, "SUBIR", 0]);
vocabulary.push([10, "SUBIRSE", 0]);
vocabulary.push([10, "SUBIRTE", 0]);
vocabulary.push([80, "SUCIEDAD", 1]);
vocabulary.push([8, "SUDESTE", 1]);
vocabulary.push([61, "SUELO", 1]);
vocabulary.push([61, "SUELOS", 1]);
vocabulary.push([21, "SUELTA", 0]);
vocabulary.push([81, "SUICIDARSE", 0]);
vocabulary.push([81, "SUICIDARTE", 0]);
vocabulary.push([81, "SUICIDATE", 0]);
vocabulary.push([70, "SUPERGLUS", 0]);
vocabulary.push([3, "SUR", 1]);
vocabulary.push([8, "SURESTE", 1]);
vocabulary.push([9, "SUROESTE", 1]);
vocabulary.push([9, "SW", 1]);
vocabulary.push([20, "TAKE", 0]);
vocabulary.push([116, "TARAREA", 0]);
vocabulary.push([116, "TARAREAR", 0]);
vocabulary.push([76, "TECHO", 1]);
vocabulary.push([76, "TECHOS", 1]);
vocabulary.push([123, "TECLEA", 0]);
vocabulary.push([123, "TECLEAR", 0]);
vocabulary.push([25, "TERMINA", 0]);
vocabulary.push([25, "TERMINAR", 0]);
vocabulary.push([32, "TIRA", 0]);
vocabulary.push([32, "TIRAR", 0]);
vocabulary.push([32, "TIRARSE", 0]);
vocabulary.push([32, "TIRASE", 0]);
vocabulary.push([40, "TOCA", 0]);
vocabulary.push([40, "TOCAR", 0]);
vocabulary.push([20, "TODO", 1]);
vocabulary.push([20, "TOMA", 0]);
vocabulary.push([20, "TOMAR", 0]);
vocabulary.push([58, "TORCER", 0]);
vocabulary.push([73, "TORRE", 1]);
vocabulary.push([149, "TORTURA", 0]);
vocabulary.push([149, "TORTURAR", 0]);
vocabulary.push([151, "TRABAR", 0]);
vocabulary.push([151, "TRABARSE", 0]);
vocabulary.push([38, "TRAGA", 0]);
vocabulary.push([38, "TRAGAR", 0]);
vocabulary.push([38, "TRAGARSE", 0]);
vocabulary.push([38, "TRAGARTE", 0]);
vocabulary.push([38, "TRAGATE", 0]);
vocabulary.push([6, "TRANQUILAM", 3]);
vocabulary.push([68, "TRANSCRIP", 0]);
vocabulary.push([68, "TRANSCRIPC", 0]);
vocabulary.push([68, "TRANSCRIPT", 0]);
vocabulary.push([7, "TRAS", 6]);
vocabulary.push([57, "TREPA", 0]);
vocabulary.push([57, "TREPAR", 0]);
vocabulary.push([58, "TUERCE", 0]);
vocabulary.push([10, "U", 1]);
vocabulary.push([99, "UNE", 0]);
vocabulary.push([99, "UNIR", 0]);
vocabulary.push([10, "UP", 1]);
vocabulary.push([80, "USA", 0]);
vocabulary.push([80, "USAR", 0]);
vocabulary.push([80, "UTILIZA", 0]);
vocabulary.push([80, "UTILIZAR", 0]);
vocabulary.push([86, "VACIA", 0]);
vocabulary.push([86, "VACIAR", 0]);
vocabulary.push([90, "VE", 0]);
vocabulary.push([71, "VEGETACION", 1]);
vocabulary.push([121, "VENDE", 0]);
vocabulary.push([121, "VENDER", 0]);
vocabulary.push([60, "VENTANA", 1]);
vocabulary.push([60, "VENTANUCO", 1]);
vocabulary.push([70, "VERSION", 0]);
vocabulary.push([86, "VERTER", 0]);
vocabulary.push([86, "VERTIR", 0]);
vocabulary.push([71, "VESTIR", 0]);
vocabulary.push([71, "VESTIRSE", 0]);
vocabulary.push([71, "VESTIRTE", 0]);
vocabulary.push([90, "VETE", 0]);
vocabulary.push([4, "VIEJA", 2]);
vocabulary.push([4, "VIEJO", 2]);
vocabulary.push([86, "VIERTE", 0]);
vocabulary.push([88, "VIGA", 1]);
vocabulary.push([88, "VIGAS", 1]);
vocabulary.push([21, "VIGIA", 1]);
vocabulary.push([21, "VIGILANTE", 1]);
vocabulary.push([71, "VISTE", 0]);
vocabulary.push([71, "VISTESE", 0]);
vocabulary.push([117, "VOLAR", 0]);
vocabulary.push([35, "VOLTEA", 0]);
vocabulary.push([35, "VOLTEAR", 0]);
vocabulary.push([127, "VOMITA", 0]);
vocabulary.push([127, "VOMITAR", 0]);
vocabulary.push([127, "VOMITARSE", 0]);
vocabulary.push([127, "VOMITARTE", 0]);
vocabulary.push([127, "VOMITATE", 0]);
vocabulary.push([117, "VUELA", 0]);
vocabulary.push([5, "W", 1]);
vocabulary.push([41, "X", 0]);
vocabulary.push([82, "XYZZY", 0]);
vocabulary.push([2, "Y", 5]);
vocabulary.push([43, "Z", 0]);



// SYS MESSAGES

total_sysmessages=66;

sysmessages = [];

sysmessages[0] = "No puedes ver nada, estÃ¡ muy oscuro.\n";
sysmessages[1] = "Puedes ver:Â¬";
sysmessages[2] = "";
sysmessages[3] = "";
sysmessages[4] = "";
sysmessages[5] = "";
sysmessages[6] = "Â¿CÃ³mo? Por favor, prueba con otras palabras.\n";
sysmessages[7] = "No puedes ir en esa direcciÃ³n.\n";
sysmessages[8] = "Â¿PerdÃ³n?\n";
sysmessages[9] = "Tienes:Â¬";
sysmessages[10] = " (puesto/a)";
sysmessages[11] = "ningÃºn objeto.\n";
sysmessages[12] = "Â¿Seguro que quieres abandonar la partida?\n";
sysmessages[13] = "Â¿Te gustarÃ­a jugar una nueva partida?\n";
sysmessages[14] = "AdiÃ³s...";
sysmessages[15] = "OK.\n";
sysmessages[16] = "\nPor favor, pulsa cualquier tecla para continuar.\n\n";
sysmessages[17] = "En esta partida has realizadoÂ¬";
sysmessages[18] = " turno";
sysmessages[19] = "s";
sysmessages[20] = ".\n";
sysmessages[21] = "Tu puntuaciÃ³n en esta partida es delÂ¬";
sysmessages[22] = "%.\n";
sysmessages[23] = "No tienes puesto eso.\n";
sysmessages[24] = "No puedes, ya tienes puesto eso.\n";
sysmessages[25] = "Ya tienes _.\n";
sysmessages[26] = "No puedes ver eso por aquÃ­.\n";
sysmessages[27] = "Lamentablemente no puedes llevar mÃ¡s cosas.\n";
sysmessages[28] = "No tienes eso.\n";
sysmessages[29] = "Pero si ya tienes puesto _.\n";
sysmessages[30] = "S";
sysmessages[31] = "N";
sysmessages[32] = "MÃ¡s...";
sysmessages[33] = ">Â¬";
sysmessages[34] = "";
sysmessages[35] = "El tiempo pasa...\n";
sysmessages[36] = "Coges _.\n";
sysmessages[37] = "Te pones _.\n";
sysmessages[38] = "Te quitas _.\n";
sysmessages[39] = "Dejas _.\n";
sysmessages[40] = "No te puedes poner eso.\n";
sysmessages[41] = "No te puedes quitar eso.\n";
sysmessages[42] = "No te puedes quitar _ ya que tienes demasiadas cosas en las manos.\n";
sysmessages[43] = "Lamentablemente _ pesa demasiado.\n";
sysmessages[44] = "Metes _ enÂ¬";
sysmessages[45] = "Eso no estÃ¡ enÂ¬";
sysmessages[46] = ", ";
sysmessages[47] = " yÂ¬";
sysmessages[48] = ".\n";
sysmessages[49] = "No tienes eso.\n";
sysmessages[50] = "No tienes puesto eso.\n";
sysmessages[51] = ".\n";
sysmessages[52] = "Eso no estÃ¡ enÂ¬";
sysmessages[53] = "ningÃºn objeto.\n";
sysmessages[54] = "Fichero no encontrado.\n";
sysmessages[55] = "Fichero corrupto.\n";
sysmessages[56] = "Error de E/S. Fichero no grabado.\n";
sysmessages[57] = "Directorio lleno.\n";
sysmessages[58] = "Disco lleno.\n";
sysmessages[59] = "Nombre del fichero no vÃ¡lido.\n";
sysmessages[60] = "Nombre del fichero:Â¬";
sysmessages[61] = "Â¿Disculpa?\n";
sysmessages[62] = "Â¿PerdÃ³n? Por favor, prueba con otras palabras.\n";
sysmessages[63] = "AquÃ­Â¬";
sysmessages[64] = "estÃ¡Â¬";
sysmessages[65] = "estÃ¡nÂ¬";

// USER MESSAGES

total_messages=33;

messages = [];

messages[0] = "";
messages[1000] = "Salidas visibles:Â¬";
messages[1001] = "No hay salidas visibles.";
messages[1002] = "";
messages[1003] = "";
messages[1004] = "al norte";
messages[1005] = "al sur";
messages[1006] = "al este";
messages[1007] = "al oeste";
messages[1008] = "al noreste";
messages[1009] = "al noroeste";
messages[1010] = "al sureste";
messages[1011] = "al suroeste";
messages[1012] = "arriba";
messages[1013] = "abajo";
messages[1014] = "dentro";
messages[1015] = "fuera";
messages[2000] = "";
messages[2001] = "";
messages[2002] = "";
messages[2003] = "";
messages[2004] = "desde el sur";
messages[2005] = "desde el norte";
messages[2006] = "desde el oeste";
messages[2007] = "desde el este";
messages[2008] = "desde el suroeste";
messages[2009] = "desde el sureste";
messages[2010] = "desde el noroeste";
messages[2011] = "desde el noreste";
messages[2012] = "desde abajo";
messages[2013] = "desde arriba";
messages[2014] = "desde fuera";
messages[2015] = "desde dentro";

// WRITE MESSAGES

total_writemessages=901;

writemessages = [];

writemessages[0] = "AquÃ­ no ves nada que puedas coger.";
writemessages[1] = "No tienes nada para dejar.";
writemessages[2] = "No tienes ese contenedor.";
writemessages[3] = "No hay nada ahÃ­ dentro.";
writemessages[4] = "No tienes ese contenedor.";
writemessages[5] = "No tienes nada para meter ahÃ­ dentro.";
writemessages[6] = "No tienes nada que te puedas quitar.";
writemessages[7] = "No tienes nada que te puedas poner.";
writemessages[8] = "No tienes nada que puedas tirar.";
writemessages[9] = "Â¡No puedes tirarlo todo a la vez!";
writemessages[10] = "Por favor, intenta especificar un poco mÃ¡s.";
writemessages[11] = "Al empujar la antorcha una porciÃ³n de pared se abre al oeste dando acceso a una estancia.";
writemessages[12] = "La antorcha no cede mÃ¡s.";
writemessages[13] = "Al tirar de la antorcha, la porciÃ³n de pared que se abriÃ³, vuelve a cerrarse.";
writemessages[14] = "La antorcha no cede mÃ¡s.";
writemessages[15] = "La chimenea estÃ¡ muy sucia y no hay fuego en ella.";
writemessages[16] = " Hay un gran trozo de carbÃ³n en ella.";
writemessages[17] = "No deberÃ­as perder tiempo con la chimenea.";
writemessages[18] = "Los huesos amarillentos, las cuencas vacÃ­as.";
writemessages[19] = " Junto a Ã©l observas un viejo cuchillo.";
writemessages[20] = "No deberÃ­as perder tiempo con el esqueleto.";
writemessages[21] = "Una funda de tela cubre la cama.";
writemessages[22] = "Solo restos de paja cubren la cama.";
writemessages[23] = "No deberÃ­as perder tiempo con la cama.";
writemessages[24] = "La funda estÃ¡ atada a la cama por fuertes ligaduras.";
writemessages[25] = "Cortas las ligaduras de la funda con el cuchillo.";
writemessages[26] = "Las ligaduras ya han sido cortadas y no es necesario que lo vuelvas a hacer.";
writemessages[27] = "Cortas las ligaduras de la funda con el cuchillo.";
writemessages[28] = "Las ligaduras ya han sido cortadas y no es necesario que lo vuelvas a hacer.";
writemessages[29] = "Las ligaduras estÃ¡n fuertemente atadas y no puedes desatarlas.";
writemessages[30] = "Las ligaduras estÃ¡n fuertemente atadas y no puedes desatarlas.";
writemessages[31] = "Fuertes barras de hierro cubren la abertura de la ventana.";
writemessages[32] = "Mirando entre las aberturas que dejan los barrotes, puedes ver que te encuentras a una considerable altura y tambiÃ©n observas en la distancia lo que parece ser un viejo muelle con algÃºn tipo de embarcaciÃ³n.";
writemessages[33] = "Ves la funda atada firmemente a unos de los barrotes de la ventana.";
writemessages[34] = "Fuertes barras de hierro cubren la abertura de la ventana.";
writemessages[35] = "Mirando entre las aberturas que dejan los barrotes, puedes ver que te encuentras a una considerable altura y tambiÃ©n observas en la distancia lo que parece ser un viejo muelle con algÃºn tipo de embarcaciÃ³n.";
writemessages[36] = "Observas que gracias a que ya no estÃ¡ uno de los barrotes, la abertura de la ventana es lo suficientemente grande como para que pueda pasar una persona.";
writemessages[37] = "Oteando por la abertura de la ventana, puedes ver que en efecto te encuentras a una considerable altura y tambiÃ©n estÃ¡s convensido que lo que ves en la distancia es un embarcadero.";
writemessages[38] = "Ves la funda atada firmemente a unos de los barrotes de la ventana.";
writemessages[39] = "Observas que gracias a que ya no estÃ¡ uno de los barrotes, la abertura de la ventana es lo suficientemente grande como para que pueda pasar una persona.";
writemessages[40] = "Oteando por la abertura de la ventana, puedes ver que en efecto te encuentras a una considerable altura y tambiÃ©n estÃ¡s convensido que lo que ves en la distancia es un embarcadero.";
writemessages[41] = "No deberÃ­as perder tiempo intentando hacer otra cosa que no sea buscar la manera de salir por la ventana.";
writemessages[42] = "Observando mejor los barrotes de la ventana, puedes ver que una de las barras parece que estÃ¡ algo floja y bastante oxidada. Piensas que tal vez tirando de ella la puedas arrancar.";
writemessages[43] = "Tiras con todas tus fuerzas de la oxidada barra de hierro sin que apenas se mueva de su sitio. Tal vez deberÃ­as intentar golpearla para ver si se afloja un poco mÃ¡s.";
writemessages[44] = "ValiÃ©ndote del duro trozo de carbÃ³n, golpeas fuertemente la oxidada barra de hierro en repetidas ocaciones y observas esperanzado como la misma va cediendo hasta que ya no puede aguantar mÃ¡s y cae al suelo dejando en la ventana una abertura de considerable tamaÃ±o.";
writemessages[45] = "Golpeas repetidas veces con la punta del cuchillo la base de piedra que sujeta la barra de hierro pero te detienes al darte cuenta que de esta manera te tomarÃ¡ toda la vida.";
writemessages[46] = "Golpeas con tus manos desnudas la barra de hierro pero al cabo de unos cuantos golpes desistes por el dolor que esa acciÃ³n te causa. Piensas que serÃ­a mejor intentarlo con algÃºn tipo de objeto.";
writemessages[47] = "No deberÃ­as perder tiempo intentando hacer otra cosa que no sea eliminar la barra de la ventana.";
writemessages[48] = "Observando a travÃ©s de la ventana, te llenas de miedo y desistes en salir por ella debido a la gran altura que te separa de la base de la torre.";
writemessages[49] = "Decididamente con la ayuda de la funda, sales por la abertura de la ventana aferrÃ¡ndote fuertemente a la tela a la vez que evitas mirar hacia abajo mientras que vas descendiendo con cuidado hasta la base de la gran torre donde permanecÃ­as injustamente como prisionero.";
writemessages[50] = "ValiÃ©ndote de la funda y luego de unos minutos, por fin llegas a la base de la torre quedando suspendido en el aire a tan solo dos metros del suelo por lo que no es ningÃºn problema soltarte de tu improvisada cuerda.";
writemessages[51] = "A pesar de que los guardias te han mantenido aguantando hambre a base de una mohosa rodaja de pan y una amarga bebida que aÃºn ignoras de quÃ© se trata, todavÃ­a no eres lo suficientemente delgado para poder salir entre los barrotes... QuizÃ¡s deberÃ­as intentar ampliar la brecha en la ventana.";
writemessages[52] = "Atas con fuerza uno de los extremos de la funda a uno de los barrotes de la ventana para poder utilizarla como improvisada cuerda y poder salir de una vez por todas de este lugar.";
writemessages[53] = "Ya has atado la funda a la ventana.";
writemessages[54] = "No puedes coger la funda ya que permanece fuertemente atada a uno de los barrotes.";
writemessages[55] = "No tienes ninguna necesidad de desatarla teniendo la oportunidad de salir de aquÃ­ con su ayuda.";
writemessages[56] = "No tienes ninguna necesidad de desatarla teniendo la oportunidad de salir de aquÃ­ con su ayuda.";
writemessages[57] = "Por ningÃºn motivo vas a cortarla desaprovechando el Ãºnico medio que tienes para escapar de este lugar.";
writemessages[58] = "Por ningÃºn motivo vas a cortarla desaprovechando el Ãºnico medio que tienes para escapar de este lugar.";
writemessages[59] = "La abertura de la pared que hace de ventanuco apenas si es de un palmo de diÃ¡metro haciendo imposible que alguien pueda salir por aquÃ­.";
writemessages[60] = "Sin hacer ningÃºn ruido, rÃ¡pidamente te ocultas como puedes aprovechando la cobertura de las sombras.";
writemessages[61] = "Ya permaneces oculto al amparo de las sombras.";
writemessages[62] = "RÃ¡pidamente te ocultas entre la alta vegetaciÃ³n para evitar que el guardiÃ¡n te pueda ver.";
writemessages[63] = "Ya te encuentras oculto entre la espesa vegetaciÃ³n.";
writemessages[64] = "El suelo del camino estÃ¡ lleno de polvo y unas cuantas piedrecillas por aquÃ­ y por allÃ¡.";
writemessages[65] = " Entre las irregularidades del suelo, puedes ver una piedra un poco mÃ¡s grande que las demÃ¡s.";
writemessages[66] = "No deberÃ­as perder tiempo con el camino.";
writemessages[67] = "El suelo del camino estÃ¡ lleno de polvo y unas cuantas piedrecillas por aquÃ­ y por allÃ¡.";
writemessages[68] = " Entre las irregularidades del suelo, puedes ver una piedra un poco mÃ¡s grande que las demÃ¡s.";
writemessages[69] = "Aprovechando que permaneces oculto entre la espesa vegetaciÃ³n, lanzas con fuerza _ lo mas lejos que puedes para llamar la atenciÃ³n del guardiÃ¡n.";
writemessages[70] = "Alterado por el ruido, el guardiÃ¡n pregunta: ('-Â¿QuÃ© sucede ahÃ­?') Acto seguido, el guardiÃ¡n abandona su puesto y se interna en la vegetaciÃ³n dejando el camino libre de toda vigilancia.";
writemessages[71] = "Intentas caminar sigilosamente al resguardo de la espesa vegetaciÃ³n pero sin poder evitarlo pisas una rama seca provocando un leve chasquido alertando al guardiÃ¡n de tu posiciÃ³n.";
writemessages[72] = "Sin que tengas tiempo a reaccionar, el guardiÃ¡n se lanza sobre ti propinÃ¡ndote una fuerte golpiza dejÃ¡ndote inconsciente frustrando asÃ­ tu intento de escape de la isla.";
writemessages[73] = "Te dispones a dar un paso pero de inmediato eres interceptado por el guardiÃ¡n de la torre propinÃ¡ndote una feroz golpiza que te deja inconsciente.";
writemessages[74] = "De ninguna manera regresarÃ¡s sobre tus pasos teniendo en frente la oportunidad de escapar definitivamente de esta isla.";
writemessages[75] = "Nada podrÃ¡s hacer subiÃ©ndote al bote estando atracado en la orilla... DeberÃ­as intentar empujarlo al agua.";
writemessages[76] = "Nada podrÃ¡s hacer subiÃ©ndote al bote estando atracado en la orilla... DeberÃ­as intentar empujarlo al agua.";
writemessages[77] = "Con bastante dificultad empujas el viejo boto a la orilla de la playa para poder embarcarte en un largo viaje para iniciar una nueva vida en libertad.";
writemessages[78] = "Luego de haber logrado empujar con mucho esfuerzo el bote al agua y despuÃ©s de subirte en Ã©l, tomas unos minutos para reponer tus fuerzas y contemplar en la distancia la vieja torre pensando algo divertido: -Al parecer la inexpugnable torre ha perdido su reputaciÃ³n de ser un lugar de donde nadie ha podido escapar.";
writemessages[79] = "Con bastante dificultad arrastras el viejo boto a la orilla de la playa para poder embarcarte en un largo viaje para iniciar una nueva vida en libertad.";
writemessages[80] = "Luego de haber logrado empujar con mucho esfuerzo el bote al agua y despuÃ©s de subirte en Ã©l, tomas unos minutos para reponer tus fuerzas y contemplar en la distancia la vieja torre pensando algo divertido: -Al parecer la inexpugnable torre ha perdido su reputaciÃ³n de ser un lugar de donde nadie ha podido escapar.";
writemessages[81] = "Con bastante dificultad empujas el viejo boto a la orilla de la playa para poder embarcarte en un largo viaje para iniciar una nueva vida en libertad.";
writemessages[82] = "Luego de haber logrado empujar con mucho esfuerzo el bote al agua y despuÃ©s de subirte en Ã©l, tomas unos minutos para reponer tus fuerzas y contemplar en la distancia la vieja torre pensando algo divertido: -Al parecer la inexpugnable torre ha perdido su reputaciÃ³n de ser un lugar de donde nadie ha podido escapar.";
writemessages[83] = "Una pesada barra de hierro que ha quedado inservible debido al paso del tiempo y el mal trato que le has propinado.";
writemessages[84] = "Puedes ver que se trata de un pesado trozo de carbÃ³n de buen tamaÃ±o idÃ³neo como para poder golpear algo con Ã©l.";
writemessages[85] = "Se trata de un viejo y pequeÃ±o cuchillo con la hoja algo mellada.";
writemessages[86] = "Es una larga funda que en mejores tiempos parecÃ­a que era de color blanco.";
writemessages[87] = "La funda permanece firmemente atada a uno de los barrotes de la ventana.";
writemessages[88] = "Aunque vieja y percudida, esta funda parece ser resistente y capaz de aguantar un considerable peso.";
writemessages[89] = "Fuertes mudos difÃ­ciles de desatar, atan la funda a las esquinas de la cama.";
writemessages[90] = "No deberÃ­as perder tiempo intentando hacer otra cosa que no sea desatar las ligaduras.";
writemessages[91] = "No deberÃ­as perder tiempo intentando hacer otra cosa que no sea desatar la funda.";
writemessages[92] = "Es una tosca he irregular piedra de buen peso que pudiera servir para causar alguna distracciÃ³n.";
writemessages[93] = "No es mÃ¡s que un resto de viejos tablones de madera sujetados por un montÃ³n de oxidados clavos que a duras penas semejan un bote.";
writemessages[94] = "Lamentablemente un viejo bote de madera pesa demasiado. DeberÃ­as intentar empujarlo a la superficie del agua y poder escapar de una vez por todas.";
writemessages[95] = "Una pesada antorcha de madera y latÃ³n ilumina los rincones de este oscuro lugar. ObservÃ¡ndola mejor, parece que la misma puede ser empujada.";
writemessages[96] = "Una pesada antorcha de madera y latÃ³n ilumina los rincones de este oscuro lugar. MirÃ¡ndola mejor, es evidente que se puede tirar de ella para regresarla a su posiciÃ³n original.";
writemessages[97] = "No deberÃ­as perder mÃ¡s tiempo con la antorcha.";
writemessages[98] = "Es tan solo una pequeÃ±a abertura en el muro por donde apenas puede entrar un poco de iluminaciÃ³n del frÃ­o exterior.";
writemessages[99] = "No deberÃ­as perder tiempo con el ventanuco.";
writemessages[100] = "Pesados bloques de piedra firmemente colocados unos sobre otros.";
writemessages[101] = "No deberÃ­as perder tiempo con los bloques.";
writemessages[102] = "Es la robusta y polvorienta mesa de madera que la guardia de la torre utiliza para pasar lista.";
writemessages[103] = "No deberÃ­as perder tiempo con la mesa.";
writemessages[104] = "Grandes cantidades de polvo y oxido recubren esta pesada armadura medieval.";
writemessages[105] = "No deberÃ­as perder tiempo con la armadura.";
writemessages[106] = "Capas y capas de polvo y suciedad acumulados por el paso del tiempo.";
writemessages[107] = "No deberÃ­as perder tiempo con el polvo.";
writemessages[108] = "Oscuras manchas de color ocre recubren el metal por falta de un buen mantenimiento.";
writemessages[109] = "No deberÃ­as perder tiempo con el oxido.";
writemessages[110] = "Mirando hacia arriba puedes ver la longitud de esta destartalada escalera.";
writemessages[111] = "No deberÃ­as perder tiempo con la escalera.";
writemessages[112] = "Puedes ver como la larga y retorcida escalera de caracol continÃºa hacia lo mÃ¡s alto de la torre.";
writemessages[113] = "No deberÃ­as perder tiempo con la escalera.";
writemessages[114] = "IncÃ³modas tablas de madera hacen las veces de improvisados catres para los prisioneros.";
writemessages[115] = "No deberÃ­as perder tiempo con los catres.";
writemessages[116] = "Largas ebras de hierba reseca permanecen esparcidas por todo el suelo que se utiliza a modo de cama.";
writemessages[117] = "No deberÃ­as perder tiempo con la paja.";
writemessages[118] = "Montones de paja dan una relativa comodidad al hacer de acolchonamiento para esta cama.";
writemessages[119] = "No deberÃ­as perder tiempo con la paja.";
writemessages[120] = "Fuertes y pesadas cadenas con resistentes grilletes sujetan a los prisioneros de manos y pies a las frÃ­as paredes.";
writemessages[121] = "No deberÃ­as perder tiempo con los grilletes.";
writemessages[122] = "Mirando a travÃ©s de los barrotes del ventanuco, puedes ver la luna llena parcialmente oculta por unas siniestras nubes oscuras.";
writemessages[123] = "Lo Ãºnico que puedes hacer con la luna, es contemplar su belleza.";
writemessages[124] = "Contemplando el cielo a travÃ©s de los barrotes de la ventana, puedes ver como la luna permanece caprichosamente oculta tras una espesa capa de nubes.";
writemessages[125] = "Lo Ãºnico que puedes hacer con la luna, es contemplar su belleza.";
writemessages[126] = "Mirando hacia el cielo, puedes ver la luna llena detrÃ¡s de unas cuantas nubes iluminando tenuemente la oscuridad que te rodea.";
writemessages[127] = "Lo Ãºnico que puedes hacer con la luna, es contemplar su belleza.";
writemessages[128] = "Observas como se filtran entre las negras nubes algunos rayos de luna que apenas logran iluminar este lugar.";
writemessages[129] = "Lo Ãºnico que puedes hacer con la luna, es contemplar su belleza.";
writemessages[130] = "Puedes ver como las espesas nubes se van alejando poco a poco de la luna permitiendo que se pueda ver la luz que ella proyecta sobre las aguas del ancho mar.";
writemessages[131] = "Lo Ãºnico que puedes hacer con la luna, es contemplar su belleza.";
writemessages[132] = "Observando hacia arriba, puedes ver como la oscura torre se alza imponente sobre tu cabeza.";
writemessages[133] = "No deberÃ­as perder mÃ¡s tiempo en la torre y alejarte de ella.";
writemessages[134] = "Mirando un momento tras de ti, puedes ver a lo lejos la mole que representa la vieja torre de la prisiÃ³n.";
writemessages[135] = "No deberÃ­as perder mÃ¡s tiempo con la torre y alejarte de ella.";
writemessages[136] = "Oteando en la distancia, apenas si logras ver los altos muros de la torre gracias a los rayos de luna que se reflejan en su superficie.";
writemessages[137] = "No deberÃ­as perder mÃ¡s tiempo con la torre y alejarte de ella.";
writemessages[138] = "Montones y montones de malas hierbas se alzan hasta la altura del pecho brindando una relativa invisibilidad.";
writemessages[139] = "No deberÃ­as perder tiempo con la vegetaciÃ³n.";
writemessages[140] = "Retorcidos y secos chamizos tejen una intrincada maraÃ±a entre si.";
writemessages[141] = "No deberÃ­as perder tiempo con los arbustos.";
writemessages[142] = "Muertas y rececas ramas dispersas por todo el suelo.";
writemessages[143] = "No deberÃ­as perder tiempo con las ramas.";
writemessages[144] = "Montones de granos de tierra y polvo arrastrados por el viento que se acumulan en todo el suelo.";
writemessages[145] = "No deberÃ­as perder tiempo con el polvo.";
writemessages[146] = "Grandes losas de piedra pulida de color gris recubren los suelos de este lugar.";
writemessages[147] = "No deberÃ­as perder tiempo con las losas.";
writemessages[148] = "Largas vigas de madera que soportan el peso de los pisos superiores de la torre.";
writemessages[149] = "No deberÃ­as perder tiempo con las vigas del techo sabiendo que es imposible que las puedas alcanzar.";
writemessages[150] = "Pesados tablones de gruesa madera reforzados con grandes barras de hierro forjado impiden la salida del lugar.";
writemessages[151] = "Intentas abrir la pesada puerta pero te decepcionas al comprobar que la misma no se mueve ni un solo centÃ­metro.";
writemessages[152] = "No deberÃ­as perder tiempo con la puerta.";
writemessages[153] = "Grandes barras de hierro forjado refuerzan esta sÃ³lida puerta.";
writemessages[154] = "No deberÃ­as perder tiempo con las barras.";
writemessages[155] = "Incontables granos de arena por aquÃ­ y por allÃ¡.";
writemessages[156] = "No deberÃ­as perder tiempo con la arena.";
writemessages[157] = "Una vasta extensiÃ³n de agua salada que abarca todo el horizonte que sin duda deberÃ¡s cruzar para alejarte de este lugar.";
writemessages[158] = "Aunque nunca supiste quÃ© era ese extraÃ±o lÃ­quido turbio que te daban a beber en la torre, si sabes que no se puede beber el agua salada del mar.";
writemessages[159] = "En vista que no eres un buen nadador, desistes en intentarlo a sabiendas que con el bote de seguro podrÃ¡s escapar.";
writemessages[160] = "No deberÃ­as perder mÃ¡s tiempo y apurarte para escapar cruzando este ancho mar.";
writemessages[161] = "Gruesos y macizos bloques de piedra oscura conforman las paredes de este lugar.";
writemessages[162] = "No deberÃ­as perder tiempo con las paredes.";
writemessages[163] = "Te encuentras en el exterior y no hay ninguna pared que te impida ver en la distancia...";
writemessages[164] = "Te encuentras en el exterior y no hay ninguna pared que te impida ver en la distancia...";
writemessages[165] = "Pesadas losas de piedra refuerzan los frÃ­os suelos de la torre.";
writemessages[166] = "No deberÃ­as perder tiempo con los suelos.";
writemessages[167] = "Polvoriento y erocionado.";
writemessages[168] = "No deberÃ­as perder tiempo con el suelo.";
writemessages[169] = "Montones de arena acumulada, dificultan la caminata.";
writemessages[170] = "No deberÃ­as perder tiempo con el suelo.";
writemessages[171] = "Altos techos recubiertos de grandes vigas de madera, protegen este lugar de los elementos del exterior.";
writemessages[172] = "Es imposible que puedas hacer algo con los techos debido a lo alto que estÃ¡n.";
writemessages[173] = "No te encuentras dentro de ninguna edificaciÃ³n para poder ver sus techos...";
writemessages[174] = "DifÃ­cilmente podrÃ¡s contemplar el cielo encerrado dentro de esta frÃ­a y oscura edificaciÃ³n...";
writemessages[175] = "Oscuras y espesas nubes negras tapizan la inmensidad del cielo.";
writemessages[176] = "Oscuras y espesas nubes negras tapizan la inmensidad del cielo.";
writemessages[177] = "Mirando por el ventanuco, puedes ver espesos mantos de nubes grisÃ¡ceas cargadas de humedad formando caprichosas figuras en todo el cielo.";
writemessages[178] = "No deberÃ­as intentar hacer algo con las nubes sabiendo que eso es algo imposible.";
writemessages[179] = "Observando por la ventana, puedes ver espesos mantos de nubes grisÃ¡ceas cargadas de humedad formando caprichosas figuras en todo el cielo.";
writemessages[180] = "No deberÃ­as intentar hacer algo con las nubes sabiendo que eso es algo imposible.";
writemessages[181] = "Admirando hacia arriba, puedes ver espesos mantos de nubes grisÃ¡ceas cargadas de humedad formando caprichosas figuras en todo el cielo.";
writemessages[182] = "No deberÃ­as intentar hacer algo con las nubes sabiendo que eso es algo imposible.";
writemessages[183] = "Pesadas placas de metal conforman la integridad de esta coraza dotando de una buena defensa y protecciÃ³n a su portador.";
writemessages[184] = "Viendo a su musculoso dueÃ±o, decides que es mejor para tu bienestar no intentar hacer nada con ella.";
writemessages[185] = "Se trata de un pesado garrote de madera con la cabeza reforzada con una capa de metal capaz de infligir un gran daÃ±o a todo el que se encuentre en su camino.";
writemessages[186] = "No deberÃ­as intentar nada para alertar a su portador de tu presencia.";
writemessages[187] = "Solo musculos sobre musculos se pueden detallar bajo una pesada cota metÃ¡lica de color negro que asentÃºa mÃ¡s la fiereza que su portador posee como expreciÃ³n todo eso acompaÃ±ado por un enorme mandoble de madera sin duda capaz de quebrar huesos sin ninguna dificultad.";
writemessages[188] = "Aunque quicieras hacerle pagar por todo lo malo que la guardia te hizo pasar en tu cautiverio, decides que es mejor no arriesgarce y no intentar hacer nada ante esa pared de musculos.";
writemessages[189] = "Por ningÃºn motivo deberÃ­as intentar hacer algo para enfurecer al guardiÃ¡n.";
writemessages[190] = "En este momento te sientes alegre.";
writemessages[191] = "Aplaudes con entusiasmo.";
writemessages[192] = "Asientes con un gesto de cabeza.";
writemessages[193] = "Prueba en el foro de jugadores del CAAD, http://www.caad.es.";
writemessages[194] = "Â¿Sin una pareja? Nada que ver.";
writemessages[195] = "Te cubres la boca para poder disimular un bostezo.";
writemessages[196] = "Cantas alegremente.";
writemessages[197] = "En estos momentos no sientes la necesidad de hacerlo.";
writemessages[198] = "No tienes ninguna necesidad de cavar aquÃ­.";
writemessages[199] = "Ahora mismo no sientes cansancio.";
writemessages[200] = "Pellizcas tu mejilla creyendo que despertarÃ¡s pero... no estÃ¡s soÃ±ando...Â¿o sÃ­?";
writemessages[201] = "Ahora mismo no tienes sueÃ±o.";
writemessages[202] = "No tienes ninguna necesidad de enterrar nada.";
writemessages[203] = "Te cubres la boca para poder disimular un eructo.";
writemessages[204] = "Esa es una opciÃ³n muy cobarde.";
writemessages[205] = "Prestas atenciÃ³n a ver si oyes algo mÃ¡s, pero no escuchas nada en especial.";
writemessages[206] = "De ninguna manera vas a contaminar tu cuerpo con esa basura de vicio. Lo mejor que puedes hacer es decirle NO a las drogas.";
writemessages[207] = "Gritas lo mÃ¡s fuerte que puedes pero... no sucede nada.";
writemessages[208] = "Ahora mismo no te hace falta.";
writemessages[209] = "Pero si ya estÃ¡s de pie.";
writemessages[210] = "Llorar muchas veces es bueno y necesario ya que se liberan las presiones y no se almacenan rencores. Pero en este momento no tienes ninguna razÃ³n para ponerte a llorar.";
writemessages[211] = "Meneas la cadera con buen ritmo.";
writemessages[212] = "Te miras de arriba a abajo pero no ves nada especial.";
writemessages[213] = "Â¿En el puro suelo? Mejor no.";
writemessages[214] = "Niegas con un gesto de cabeza.";
writemessages[215] = "Sientes nostalgia de tu niÃ±ez.";
writemessages[216] = "Elevas mentalmente una pequeÃ±a oraciÃ³n a JehovÃ¡ tu Dios.";
writemessages[217] = "En estos momentos no sientes la necesidad de hacerlo.";
writemessages[218] = "Pensar antes de actuar siempre es bueno.";
writemessages[219] = "Por mÃ¡s que lo intentes, no puedes recordar nada que te pueda ser de utilidad.";
writemessages[220] = "No encuentras nada fuera de lugar.";
writemessages[221] = "Saludas amablemente pero no hay respuesta alguna.";
writemessages[222] = "Saltas en el sitio, sin conseguir nada.";
writemessages[223] = "En este momento no te quieres sentar.";
writemessages[224] = "Silbas una alegre tonadilla.";
writemessages[225] = "Esa nunca ha sido la soluciÃ³n...";
writemessages[226] = "Tarareas una alegre melodÃ­a.";
writemessages[227] = "AquÃ­ no ves nada donde se pueda trepar.";
writemessages[228] = "USAR es demasiado genÃ©rico, por favor se una persona mÃ¡s concreta. Por ejemplo, si quieres barrer el suelo utiliza BARRER SUELO, no USAR ESCOBA.";
writemessages[229] = "Â¿Sin la ayuda de algÃºn dispositivo volador? Creo que no.";
writemessages[230] = "En estos momentos no tienes nÃ¡useas.";
writemessages[231] = "Sin duda ya has jugado demasiadas aventuras conversacionales...";
writemessages[232] = "No puedes abrazar eso.";
writemessages[233] = "DeberÃ­as especificar quÃ© o a quiÃ©n quieres abrazar.";
writemessages[234] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[235] = "No estÃ¡ aquÃ­.";
writemessages[236] = "No hay ningÃºn motivo para abrazar eso.";
writemessages[237] = "No parece que se consiga nada Ãºtil abrazando _.";
writemessages[238] = "No ves eso por aquÃ­.";
writemessages[239] = "No puedes abrir eso.";
writemessages[240] = "DeberÃ­as especificar quÃ© quieres abrir.";
writemessages[241] = "Â¿EstÃ¡s conciente de lo que quieres hacer?";
writemessages[242] = "No estÃ¡ aquÃ­.";
writemessages[243] = "No hay ningÃºn motivo para abrir eso.";
writemessages[244] = "No parece que se consiga nada Ãºtil abriendo _.";
writemessages[245] = "No ves eso por aquÃ­.";
writemessages[246] = "No puedes acariciar eso.";
writemessages[247] = "DeberÃ­as especificar quÃ© o a quiÃ©n quieres acariciar.";
writemessages[248] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[249] = "No estÃ¡ aquÃ­.";
writemessages[250] = "No hay ningÃºn motivo para acariciar eso.";
writemessages[251] = "No parece que se consiga nada Ãºtil acariciando _.";
writemessages[252] = "No ves eso por aquÃ­.";
writemessages[253] = "No puedes acercar eso.";
writemessages[254] = "DeberÃ­as especificar quÃ© quieres acercar.";
writemessages[255] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[256] = "No estÃ¡ aquÃ­.";
writemessages[257] = "No hay ningÃºn motivo para acercar eso.";
writemessages[258] = "No parece que se consiga nada Ãºtil acercando _.";
writemessages[259] = "No ves eso por aquÃ­.";
writemessages[260] = "No puedes agitar eso.";
writemessages[261] = "DeberÃ­as especificar quÃ© quieres agitar.";
writemessages[262] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[263] = "No estÃ¡ aquÃ­.";
writemessages[264] = "No hay ningÃºn motivo para agitar eso.";
writemessages[265] = "No parece que se consiga nada Ãºtil agitando _.";
writemessages[266] = "No ves eso por aquÃ­.";
writemessages[267] = "No puedes alzar eso.";
writemessages[268] = "DeberÃ­as especificar quÃ© o a quiÃ©n quieres alzar.";
writemessages[269] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[270] = "No estÃ¡ aquÃ­.";
writemessages[271] = "No hay ningÃºn motivo para alzar eso.";
writemessages[272] = "Lamentablemente no puedes alzar _ ya que pesa demasiado.";
writemessages[273] = "No parece que se consiga nada Ãºtil alzando _.";
writemessages[274] = "No ves eso por aquÃ­.";
writemessages[275] = "No puedes apagar eso.";
writemessages[276] = "DeberÃ­as especificar quÃ© quieres apagar.";
writemessages[277] = "Â¿Seguro que sabes que no se trata de ningÃºn dispositivo elÃ©ctrico que se pueda apagar?";
writemessages[278] = "No estÃ¡ aquÃ­.";
writemessages[279] = "No hay ningÃºn motivo para apagar eso.";
writemessages[280] = "No parece que se consiga nada Ãºtil apagando _.";
writemessages[281] = "No ves eso por aquÃ­.";
writemessages[282] = "No puedes apretar eso.";
writemessages[283] = "DeberÃ­as especificar quÃ© o a quiÃ©n quieres apretar.";
writemessages[284] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[285] = "No estÃ¡ aquÃ­.";
writemessages[286] = "No hay ningÃºn motivo para APRETAR eso.";
writemessages[287] = "No parece que se consiga nada Ãºtil apretando _.";
writemessages[288] = "No ves eso por aquÃ­.";
writemessages[289] = "No puedes atacar eso.";
writemessages[290] = "DeberÃ­as especificar quÃ© o a quiÃ©n quieres atacar.";
writemessages[291] = "Mejor no... La violencia nunca ha llevado a nada bueno.";
writemessages[292] = "No estÃ¡ aquÃ­.";
writemessages[293] = "No hay ningÃºn motivo para atacar eso.";
writemessages[294] = "No parece que se consiga nada Ãºtil atacando _.";
writemessages[295] = "No ves eso por aquÃ­.";
writemessages[296] = "No puedes atar eso.";
writemessages[297] = "DeberÃ­as especificar quÃ© o a quiÃ©n quieres atar.";
writemessages[298] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[299] = "No estÃ¡ aquÃ­.";
writemessages[300] = "No hay ningÃºn motivo para atar eso.";
writemessages[301] = "No parece que se consiga nada Ãºtil atando _.";
writemessages[302] = "No ves eso por aquÃ­.";
writemessages[303] = "No puedes arrastrar eso.";
writemessages[304] = "DeberÃ­as especificar quÃ© o a quiÃ©n quieres arrastrar.";
writemessages[305] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[306] = "No estÃ¡ aquÃ­.";
writemessages[307] = "No hay ningÃºn motivo para arrastrar eso.";
writemessages[308] = "No parece que se consiga nada Ãºtil arrastrando _.";
writemessages[309] = "No ves eso por aquÃ­.";
writemessages[310] = "No puedes beber eso.";
writemessages[311] = "DeberÃ­as especificar quÃ© quieres beber.";
writemessages[312] = "Â¿EstÃ¡s conciente de lo que intentas hacer?";
writemessages[313] = "No estÃ¡ aquÃ­.";
writemessages[314] = "No hay ningÃºn motivo para beber eso.";
writemessages[315] = "No parece que se consiga nada Ãºtil bebiendo de _.";
writemessages[316] = "No ves eso por aquÃ­.";
writemessages[317] = "No puedes balancear eso.";
writemessages[318] = "DeberÃ­as especificar quÃ© quieres balancear.";
writemessages[319] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[320] = "No estÃ¡ aquÃ­.";
writemessages[321] = "No hay ningÃºn motivo para balancear eso.";
writemessages[322] = "No parece que se consiga nada Ãºtil balanceando _.";
writemessages[323] = "No ves eso por aquÃ­.";
writemessages[324] = "No te puedes balancear en eso.";
writemessages[325] = "DeberÃ­as especificar dÃ³nde te quieres balancear.";
writemessages[326] = "Â¿EstÃ¡s conciente de lo que intentas hacer?";
writemessages[327] = "No estÃ¡ aquÃ­.";
writemessages[328] = "No hay ningÃºn motivo para balancearte en eso.";
writemessages[329] = "No parece que se consiga nada Ãºtil balanceÃ¡ndote en _.";
writemessages[330] = "No ves eso por aquÃ­.";
writemessages[331] = "No puedes besar eso.";
writemessages[332] = "DeberÃ­as especificar quÃ© o a quiÃ©n quieres besar.";
writemessages[333] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[334] = "No estÃ¡ aquÃ­.";
writemessages[335] = "No hay ningÃºn motivo para besar eso.";
writemessages[336] = "No parece que se consiga nada Ãºtil besando _.";
writemessages[337] = "No ves eso por aquÃ­.";
writemessages[338] = "No puedes cerrar eso.";
writemessages[339] = "DeberÃ­as especificar quÃ© quieres cerrar.";
writemessages[340] = "Â¿EstÃ¡s conciente de lo que intentas hacer?";
writemessages[341] = "No estÃ¡ aquÃ­.";
writemessages[342] = "No hay ningÃºn motivo para cerrar eso.";
writemessages[343] = "No parece que se consiga nada Ãºtil cerrando _.";
writemessages[344] = "No ves eso por aquÃ­.";
writemessages[345] = "No puedes coger eso.";
writemessages[346] = "DeberÃ­as especificar quÃ© quieres coger.";
writemessages[347] = "No puedes comer eso.";
writemessages[348] = "DeberÃ­as especificar quÃ© quieres comer.";
writemessages[349] = "Â¿EstÃ¡s conciente de lo que intentas hacer?";
writemessages[350] = "No estÃ¡ aquÃ­.";
writemessages[351] = "No hay ningÃºn motivo para comer eso.";
writemessages[352] = "No parece que se consiga nada Ãºtil comiendo _.";
writemessages[353] = "No ves eso por aquÃ­.";
writemessages[354] = "No puedes comprar eso.";
writemessages[355] = "DeberÃ­as especificar quÃ© quieres comprar.";
writemessages[356] = "Su integridad moral estÃ¡ intacta y no se dejarÃ¡ comprar por nada en el mundo.";
writemessages[357] = "No estÃ¡ aquÃ­.";
writemessages[358] = "No hay ningÃºn motivo para comprar eso.";
writemessages[359] = "En este momento _ no estÃ¡ en venta.";
writemessages[360] = "No ves eso por aquÃ­.";
writemessages[361] = "No puedes conectar eso.";
writemessages[362] = "DeberÃ­as especificar quÃ© quieres conectar.";
writemessages[363] = "Â¿Seguro que sabes que no se trata de ningÃºn dispositivo elÃ©ctrico que se pueda conectar?";
writemessages[364] = "No estÃ¡ aquÃ­.";
writemessages[365] = "No hay ningÃºn motivo para conectar eso.";
writemessages[366] = "No parece que se consiga nada Ãºtil conectando _.";
writemessages[367] = "No ves eso por aquÃ­.";
writemessages[368] = "No puedes consultar eso.";
writemessages[369] = "DeberÃ­as especificar quÃ© quieres consultar.";
writemessages[370] = "Claramente no le puedes consultar acerca de eso...";
writemessages[371] = "No estÃ¡ aquÃ­.";
writemessages[372] = "No hay ningÃºn motivo para consultar eso.";
writemessages[373] = "No parece que se consiga nada Ãºtil consultando acerca de _.";
writemessages[374] = "No ves eso por aquÃ­.";
writemessages[375] = "No puedes cortar eso.";
writemessages[376] = "DeberÃ­as especificar quÃ© quieres cortar.";
writemessages[377] = "Mejor no... La violencia nunca ha llevado a nada bueno.";
writemessages[378] = "No estÃ¡ aquÃ­.";
writemessages[379] = "No hay ningÃºn motivo para cortar eso.";
writemessages[380] = "No parece que se consiga nada Ãºtil cortando _.";
writemessages[381] = "No ves eso por aquÃ­.";
writemessages[382] = "No puedes dar eso.";
writemessages[383] = "No puedes dar eso.";
writemessages[384] = "DeberÃ­as especificar quÃ© quieres dar.";
writemessages[385] = "No puedes dar eso.";
writemessages[386] = "Primero deberÃ­as quitarte _ para poder hacerlo...";
writemessages[387] = "Lamentablemente no tienes eso.";
writemessages[388] = "Â¿A quiÃ©n le quieres dar _?";
writemessages[389] = "No le puedes dar _ a eso.";
writemessages[390] = "No le puedes dar _ a eso.";
writemessages[391] = "Â¿EstÃ¡s conciente de lo que intentas hacer?";
writemessages[392] = "Le ofreces _ pero claramente no le muestra ningÃºn interÃ©s.";
writemessages[393] = "No estÃ¡ aquÃ­.";
writemessages[394] = "No puedes decir eso.";
writemessages[395] = "DeberÃ­as especificar quÃ© quieres decir.";
writemessages[396] = "Claramente no le puedes decir nada acerca de eso...";
writemessages[397] = "No estÃ¡ aquÃ­.";
writemessages[398] = "No hay ningÃºn motivo para decir eso.";
writemessages[399] = "No parece que se consiga nada Ãºtil diciendo algo sobre _.";
writemessages[400] = "No ves eso por aquÃ­.";
writemessages[401] = "No puedes dejar eso.";
writemessages[402] = "DeberÃ­as especificar quÃ© quieres dejar.";
writemessages[403] = "No puedes desatar eso.";
writemessages[404] = "DeberÃ­as especificar quÃ© quieres desatar.";
writemessages[405] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[406] = "No estÃ¡ aquÃ­.";
writemessages[407] = "No hay ningÃºn motivo para desatar eso.";
writemessages[408] = "No parece que se consiga nada Ãºtil desatando _.";
writemessages[409] = "No ves eso por aquÃ­.";
writemessages[410] = "No puedes desempuÃ±ar eso.";
writemessages[411] = "DeberÃ­as especificar quÃ© arma quieres desempuÃ±ar.";
writemessages[412] = "Â¿EstÃ¡s conciente de lo que intentas hacer?";
writemessages[413] = "No estÃ¡ aquÃ­.";
writemessages[414] = "No hay ningÃºn motivo para intentar desempuÃ±ar eso.";
writemessages[415] = "No parece que se consiga nada Ãºtil al intentar desempuÃ±ar _.";
writemessages[416] = "No ves eso por aquÃ­.";
writemessages[417] = "No puedes desconectar eso.";
writemessages[418] = "DeberÃ­as especificar quÃ© quieres desconectar.";
writemessages[419] = "Â¿Seguro que sabes que no se trata de ningÃºn dispositivo elÃ©ctrico que se pueda desconectar?";
writemessages[420] = "No estÃ¡ aquÃ­.";
writemessages[421] = "No hay ningÃºn motivo para desconectar eso.";
writemessages[422] = "No parece que se consiga nada Ãºtil desconectando _.";
writemessages[423] = "No ves eso por aquÃ­.";
writemessages[424] = "No puedes desdoblar eso.";
writemessages[425] = "DeberÃ­as especificar quÃ© quieres desdoblar.";
writemessages[426] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[427] = "No estÃ¡ aquÃ­.";
writemessages[428] = "No hay ningÃºn motivo para desdoblar eso.";
writemessages[429] = "No parece que se consiga nada Ãºtil desdoblando _.";
writemessages[430] = "No ves eso por aquÃ­.";
writemessages[431] = "No puedes destruir eso.";
writemessages[432] = "DeberÃ­as especificar quÃ© quieres destruir.";
writemessages[433] = "Seguro que aÃºn te queda algo de conciencia que te impida hacer algo tan inhumano...";
writemessages[434] = "No estÃ¡ aquÃ­.";
writemessages[435] = "No hay ningÃºn motivo para destruir eso.";
writemessages[436] = "No parece que se consiga nada Ãºtil destruyendo _.";
writemessages[437] = "No ves eso por aquÃ­.";
writemessages[438] = "No puedes disparar eso.";
writemessages[439] = "DeberÃ­as especificar quÃ© arma quieres disparar.";
writemessages[440] = "Â¿EstÃ¡s conciente de lo que intentas hacer?";
writemessages[441] = "No estÃ¡ aquÃ­.";
writemessages[442] = "No hay ningÃºn motivo para intentar disparar eso.";
writemessages[443] = "No parece que se consiga nada Ãºtil al intentar disparar _.";
writemessages[444] = "No ves eso por aquÃ­.";
writemessages[445] = "No puedes doblar eso.";
writemessages[446] = "DeberÃ­as especificar quÃ© quieres doblar.";
writemessages[447] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[448] = "No estÃ¡ aquÃ­.";
writemessages[449] = "No hay ningÃºn motivo para doblar eso.";
writemessages[450] = "No parece que se consiga nada Ãºtil doblando _.";
writemessages[451] = "No ves eso por aquÃ­.";
writemessages[452] = "No puedes empujar eso.";
writemessages[453] = "DeberÃ­as especificar quÃ© o a quiÃ©n quieres empujar.";
writemessages[454] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[455] = "No estÃ¡ aquÃ­.";
writemessages[456] = "No hay ningÃºn motivo para empujar eso.";
writemessages[457] = "No parece que se consiga nada Ãºtil empujando _.";
writemessages[458] = "No ves eso por aquÃ­.";
writemessages[459] = "No puedes empuÃ±ar eso.";
writemessages[460] = "DeberÃ­as especificar quÃ© arma quieres empuÃ±ar.";
writemessages[461] = "Â¿EstÃ¡s conciente de lo que intentas hacer?";
writemessages[462] = "No estÃ¡ aquÃ­.";
writemessages[463] = "No hay ningÃºn motivo para intentar empuÃ±ar eso.";
writemessages[464] = "No parece que se consiga nada Ãºtil al intentar empuÃ±ar _.";
writemessages[465] = "No ves eso por aquÃ­.";
writemessages[466] = "No puedes encender eso.";
writemessages[467] = "DeberÃ­as especificar quÃ© quieres encender.";
writemessages[468] = "Â¿Seguro que sabes que no se trata de ningÃºn dispositivo elÃ©ctrico que se pueda encender?";
writemessages[469] = "No estÃ¡ aquÃ­.";
writemessages[470] = "No hay ningÃºn motivo para encender eso.";
writemessages[471] = "No parece que se consiga nada Ãºtil encendiendo _.";
writemessages[472] = "No ves eso por aquÃ­.";
writemessages[473] = "No puedes esconder eso.";
writemessages[474] = "DeberÃ­as especificar quÃ© quieres esconder.";
writemessages[475] = "Sin duda no lograrÃ¡s que pase desapercibido.";
writemessages[476] = "No estÃ¡ aquÃ­.";
writemessages[477] = "No hay ningÃºn motivo para esconder eso.";
writemessages[478] = "No parece que se consiga nada Ãºtil escondiendo _.";
writemessages[479] = "No ves eso por aquÃ­.";
writemessages[480] = "No puedes escupir eso.";
writemessages[481] = "DeberÃ­as especificar quÃ© o a quiÃ©n quieres escupir.";
writemessages[482] = "Mejor no... La violencia nunca ha llevado a nada bueno.";
writemessages[483] = "No estÃ¡ aquÃ­.";
writemessages[484] = "No hay ningÃºn motivo para escupir eso.";
writemessages[485] = "No parece que se consiga nada Ãºtil escupiendo _.";
writemessages[486] = "No ves eso por aquÃ­.";
writemessages[487] = "No puedes estirar eso.";
writemessages[488] = "DeberÃ­as especificar quÃ© quieres estirar.";
writemessages[489] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[490] = "No estÃ¡ aquÃ­.";
writemessages[491] = "No hay ningÃºn motivo para estirar eso.";
writemessages[492] = "No parece que se consiga nada Ãºtil estirando _.";
writemessages[493] = "No ves eso por aquÃ­.";
writemessages[494] = "No puedes estrangular eso.";
writemessages[495] = "DeberÃ­as especificar quÃ© o a quiÃ©n quieres estrangular.";
writemessages[496] = "Mejor no... La violencia nunca ha llevado a nada bueno.";
writemessages[497] = "No estÃ¡ aquÃ­.";
writemessages[498] = "No hay ningÃºn motivo para estrangular eso.";
writemessages[499] = "No parece que se consiga nada Ãºtil estrangulando _.";
writemessages[500] = "No ves eso por aquÃ­.";
writemessages[501] = "No puedes girar eso.";
writemessages[502] = "DeberÃ­as especificar quÃ© quieres girar.";
writemessages[503] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[504] = "No estÃ¡ aquÃ­.";
writemessages[505] = "No hay ningÃºn motivo para girar eso.";
writemessages[506] = "No parece que se consiga nada Ãºtil girando _.";
writemessages[507] = "No ves eso por aquÃ­.";
writemessages[508] = "No puedes golpear eso.";
writemessages[509] = "DeberÃ­as especificar quÃ© o a quiÃ©n quieres golpear.";
writemessages[510] = "Mejor no... La violencia nunca ha llevado a nada bueno.";
writemessages[511] = "No estÃ¡ aquÃ­.";
writemessages[512] = "No hay ningÃºn motivo para golpear eso.";
writemessages[513] = "No parece que se consiga nada Ãºtil golpeando _.";
writemessages[514] = "No ves eso por aquÃ­.";
writemessages[515] = "No puedes hablar eso.";
writemessages[516] = "DeberÃ­as especificar quÃ© quieres hablar.";
writemessages[517] = "Claramente no le puedes hablar acerca de eso...";
writemessages[518] = "No estÃ¡ aquÃ­.";
writemessages[519] = "No hay ningÃºn motivo para hablar de eso.";
writemessages[520] = "No parece que se consiga nada Ãºtil hablando acerca de _.";
writemessages[521] = "No ves eso por aquÃ­.";
writemessages[522] = "No puedes insultar eso.";
writemessages[523] = "DeberÃ­as especificar quÃ© o a quiÃ©n quieres insultar.";
writemessages[524] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[525] = "No estÃ¡ aquÃ­.";
writemessages[526] = "No hay ningÃºn motivo para insultar eso.";
writemessages[527] = "No parece que se consiga nada Ãºtil insultando _.";
writemessages[528] = "No ves eso por aquÃ­.";
writemessages[529] = "No puedes ir ahÃ­.";
writemessages[530] = "DeberÃ­as especificar dÃ³nde quieres ir.";
writemessages[531] = "Prefieres mantener la distancia y no invadir su espacio.";
writemessages[532] = "No tienes idea de dÃ³nde pueda estar.";
writemessages[533] = "No hay ningÃºn motivo para ir ahÃ­.";
writemessages[534] = "No parece que se consiga nada Ãºtil iyendo cerca de _.";
writemessages[535] = "No ves eso por aquÃ­.";
writemessages[536] = "No puedes lamer eso.";
writemessages[537] = "DeberÃ­as especificar quÃ© o a quiÃ©n quieres lamer.";
writemessages[538] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[539] = "No estÃ¡ aquÃ­.";
writemessages[540] = "No hay ningÃºn motivo para lamer eso.";
writemessages[541] = "No parece que se consiga nada Ãºtil lamiendo _.";
writemessages[542] = "No ves eso por aquÃ­.";
writemessages[543] = "No puedes lanzar eso.";
writemessages[544] = "DeberÃ­as especificar quÃ© quieres lanzar.";
writemessages[545] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[546] = "No estÃ¡ aquÃ­.";
writemessages[547] = "No hay ningÃºn motivo para lanzar eso.";
writemessages[548] = "No parece que se consiga nada Ãºtil lanzando _.";
writemessages[549] = "No ves eso por aquÃ­.";
writemessages[550] = "No puedes leer eso.";
writemessages[551] = "DeberÃ­as especificar quÃ© quieres leer.";
writemessages[552] = "Â¿EstÃ¡s conciente de lo que intentas hacer?";
writemessages[553] = "No estÃ¡ aquÃ­.";
writemessages[554] = "No hay ningÃºn motivo para leer eso.";
writemessages[555] = "No parece que se consiga nada Ãºtil leyendo _.";
writemessages[556] = "No ves eso por aquÃ­.";
writemessages[557] = "No puedes levantar eso.";
writemessages[558] = "DeberÃ­as especificar quÃ© o a quiÃ©n quieres levantar.";
writemessages[559] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[560] = "No estÃ¡ aquÃ­.";
writemessages[561] = "No hay ningÃºn motivo para levantar eso.";
writemessages[562] = "Lamentablemente no puedes levantar _ ya que pesa demasiado.";
writemessages[563] = "No parece que se consiga nada Ãºtil levantando _.";
writemessages[564] = "No ves eso por aquÃ­.";
writemessages[565] = "No puedes limpiar eso.";
writemessages[566] = "DeberÃ­as especificar quÃ© quieres limpiar.";
writemessages[567] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[568] = "No estÃ¡ aquÃ­.";
writemessages[569] = "No hay ningÃºn motivo para limpiar eso.";
writemessages[570] = "No parece que se consiga nada Ãºtil limpiando _.";
writemessages[571] = "No ves eso por aquÃ­.";
writemessages[572] = "No puedes luchar con eso.";
writemessages[573] = "DeberÃ­as especificar con quÃ© o con quiÃ©n quieres luchar.";
writemessages[574] = "Mejor no... La violencia nunca ha llevado a nada bueno.";
writemessages[575] = "No estÃ¡ aquÃ­.";
writemessages[576] = "No hay ningÃºn motivo para luchar con eso.";
writemessages[577] = "No parece que se consiga nada Ãºtil luchando con _.";
writemessages[578] = "No ves eso por aquÃ­.";
writemessages[579] = "No puedes llamar eso.";
writemessages[580] = "DeberÃ­as especificar quÃ© o a quiÃ©n quieres llamar.";
writemessages[581] = "Evidentemente te estÃ¡ ignorando... SerÃ¡ mejor que lo dejes asÃ­.";
writemessages[582] = "No tienes idea de dÃ³nde puede estar.";
writemessages[583] = "No hay ningÃºn motivo para llamar eso.";
writemessages[584] = "No parece que se consiga nada Ãºtil llamando _.";
writemessages[585] = "No ves eso por aquÃ­.";
writemessages[586] = "No puedes llenar eso.";
writemessages[587] = "DeberÃ­as especificar quÃ© quieres llenar.";
writemessages[588] = "Â¿EstÃ¡s conciente de lo que intentas hacer?";
writemessages[589] = "No estÃ¡ aquÃ­.";
writemessages[590] = "No hay ningÃºn motivo para llenar eso.";
writemessages[591] = "No quieres llenar _.";
writemessages[592] = "No parece que se consiga nada Ãºtil llenando _.";
writemessages[593] = "No ves eso por aquÃ­.";
writemessages[594] = "No puedes matar eso.";
writemessages[595] = "DeberÃ­as especificar quÃ© o a quiÃ©n quieres matar.";
writemessages[596] = "Seguro que aÃºn te queda algo de conciencia que te impida hacer algo tan inhumano...";
writemessages[597] = "No estÃ¡ aquÃ­.";
writemessages[598] = "No hay ningÃºn motivo para matar eso.";
writemessages[599] = "Â¿EstÃ¡s prestando atenciÃ³n a lo que intentas hacer? No hay manera de que se pueda matar a _.";
writemessages[600] = "No ves eso por aquÃ­.";
writemessages[601] = "No puedes mezclar eso.";
writemessages[602] = "DeberÃ­as especificar quÃ© quieres mezclar.";
writemessages[603] = "Â¿EstÃ¡s conciente de lo que intentas hacer?";
writemessages[604] = "No estÃ¡ aquÃ­.";
writemessages[605] = "No hay ningÃºn motivo para mezclar eso.";
writemessages[606] = "No parece que se consiga nada Ãºtil mezclando _.";
writemessages[607] = "No ves eso por aquÃ­.";
writemessages[608] = "DeberÃ­as especificar quÃ© quieres meter.";
writemessages[609] = "No puedes meter eso.";
writemessages[610] = "No puedes meter eso.";
writemessages[611] = "No puedes meter eso.";
writemessages[612] = "Primero deberÃ­as quitarte _ para poder hacer eso...";
writemessages[613] = "No tienes eso.";
writemessages[614] = "Â¿DÃ³nde quieres meter _?";
writemessages[615] = "No puedes meter _ en eso.";
writemessages[616] = "Â¿DÃ³nde dices que quieres meter _?";
writemessages[617] = "No puedes meter _ dentro de eso...";
writemessages[618] = "No puedes meter _ ahÃ­ porque no lo tienes a la mano.";
writemessages[619] = "No puedes mirar dentro de eso.";
writemessages[620] = "DeberÃ­as especificar dentro de quÃ© quieres mirar.";
writemessages[621] = "No ves nada interesante en esa direcciÃ³n.";
writemessages[622] = "No puedes mirar eso.";
writemessages[623] = "Â¿EstÃ¡s conciente de lo que intentas hacer?";
writemessages[624] = "No estÃ¡ aquÃ­.";
writemessages[625] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[626] = "No estÃ¡ aquÃ­.";
writemessages[627] = "No hay ningÃºn motivo para mirar dentro de eso.";
writemessages[628] = "No hay ningÃºn motivo para mirar eso.";
writemessages[629] = "Miras _ pero no le ves nada especial.";
writemessages[630] = "No ves eso por aquÃ­.";
writemessages[631] = "No puedes mostrar eso.";
writemessages[632] = "DeberÃ­as especificar quÃ© quieres mostrar.";
writemessages[633] = "No puedes mostrar eso.";
writemessages[634] = "No puedes mostrar eso.";
writemessages[635] = "Primero deberÃ­as quitarte _ para poder hacerlo...";
writemessages[636] = "Lamentablemente no tienes eso.";
writemessages[637] = "Â¿A quiÃ©n le quieres mostrar _?";
writemessages[638] = "No puedes mostrarle _ a eso.";
writemessages[639] = "No puedes mostrarle _ a eso.";
writemessages[640] = "Â¿EstÃ¡s conciente de lo que intentas hacer?";
writemessages[641] = "Le muestras _ pero claramente no le muestra ningÃºn interÃ©s.";
writemessages[642] = "No estÃ¡ aquÃ­.";
writemessages[643] = "No puedes mover eso.";
writemessages[644] = "DeberÃ­as especificar quÃ© quieres mover.";
writemessages[645] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[646] = "No estÃ¡ aquÃ­.";
writemessages[647] = "No hay ningÃºn motivo para mover eso.";
writemessages[648] = "No parece que se consiga nada Ãºtil moviendo _.";
writemessages[649] = "No ves eso por aquÃ­.";
writemessages[650] = "No puedes noquear eso.";
writemessages[651] = "DeberÃ­as especificar quÃ© o a quiÃ©n quieres noquear.";
writemessages[652] = "Mejor no... La violencia nunca ha llevado a nada bueno.";
writemessages[653] = "No estÃ¡ aquÃ­.";
writemessages[654] = "No hay ninguna manera de noquear eso.";
writemessages[655] = "Â¿EstÃ¡s prestando atenciÃ³n a lo que intentas hacer? No hay manera de que se pueda noquear a _.";
writemessages[656] = "No ves eso por aquÃ­.";
writemessages[657] = "No puedes oler eso.";
writemessages[658] = "DeberÃ­as especificar quÃ© quieres oler.";
writemessages[659] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[660] = "No estÃ¡ aquÃ­.";
writemessages[661] = "No hay ningÃºn motivo para oler eso.";
writemessages[662] = "No parece que se consiga nada Ãºtil oliendo _.";
writemessages[663] = "No ves eso por aquÃ­.";
writemessages[664] = "No puedes partir eso.";
writemessages[665] = "DeberÃ­as especificar quÃ© quieres partir.";
writemessages[666] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[667] = "No estÃ¡ aquÃ­.";
writemessages[668] = "No hay ningÃºn motivo para partir eso.";
writemessages[669] = "No parece que se consiga nada Ãºtil partiendo _.";
writemessages[670] = "No ves eso por aquÃ­.";
writemessages[671] = "No puedes patear eso.";
writemessages[672] = "DeberÃ­as especificar quÃ© o a quiÃ©n quieres patear.";
writemessages[673] = "Mejor no... La violencia nunca ha llevado a nada bueno.";
writemessages[674] = "No estÃ¡ aquÃ­.";
writemessages[675] = "No hay ningÃºn motivo para patear eso.";
writemessages[676] = "No parece que se consiga nada Ãºtil pateando _.";
writemessages[677] = "No ves eso por aquÃ­.";
writemessages[678] = "No puedes pisotear eso.";
writemessages[679] = "DeberÃ­as especificar quÃ© quieres pisotear.";
writemessages[680] = "Mejor no... La violencia nunca ha llevado a nada bueno.";
writemessages[681] = "No estÃ¡ aquÃ­.";
writemessages[682] = "No hay ningÃºn motivo para pisotear eso.";
writemessages[683] = "No parece que se consiga nada Ãºtil pisoteando _.";
writemessages[684] = "No ves eso por aquÃ­.";
writemessages[685] = "No te puedes poner eso.";
writemessages[686] = "DeberÃ­as especificar quÃ© te quieres poner.";
writemessages[687] = "No puedes preguntar eso.";
writemessages[688] = "DeberÃ­as especificar quÃ© quieres preguntar.";
writemessages[689] = "Claramente no le puedes preguntar acerca de eso...";
writemessages[690] = "No estÃ¡ aquÃ­.";
writemessages[691] = "No hay ningÃºn motivo para preguntar eso.";
writemessages[692] = "No parece que se consiga nada Ãºtil preguntando acerca de _.";
writemessages[693] = "No ves eso por aquÃ­.";
writemessages[694] = "No puedes presionar eso.";
writemessages[695] = "DeberÃ­as especificar quÃ© quieres presionar.";
writemessages[696] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[697] = "No estÃ¡ aquÃ­.";
writemessages[698] = "No hay ningÃºn motivo para presionar eso.";
writemessages[699] = "No parece que se consiga nada Ãºtil presionando _.";
writemessages[700] = "No ves eso por aquÃ­.";
writemessages[701] = "No puedes quebrar eso.";
writemessages[702] = "DeberÃ­as especificar quÃ© quieres quebrar.";
writemessages[703] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[704] = "No estÃ¡ aquÃ­.";
writemessages[705] = "No hay ningÃºn motivo para quebrar eso.";
writemessages[706] = "No parece que se consiga nada Ãºtil quebrando _.";
writemessages[707] = "No ves eso por aquÃ­.";
writemessages[708] = "No puedes quemar eso.";
writemessages[709] = "DeberÃ­as especificar quÃ© quieres quemar.";
writemessages[710] = "Seguro que aÃºn te queda algo de conciencia que te impida hacer algo tan inhumano...";
writemessages[711] = "No estÃ¡ aquÃ­.";
writemessages[712] = "No hay ningÃºn motivo para quemar eso.";
writemessages[713] = "No parece que se consiga nada Ãºtil quemando _.";
writemessages[714] = "No ves eso por aquÃ­.";
writemessages[715] = "No te puedes quitar eso.";
writemessages[716] = "DeberÃ­as especificar quÃ© te quieres quitar.";
writemessages[717] = "No puedes rascar eso.";
writemessages[718] = "DeberÃ­as especificar quÃ© o a quiÃ©n quieres rascar.";
writemessages[719] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[720] = "No estÃ¡ aquÃ­.";
writemessages[721] = "No hay ningÃºn motivo para rascar eso.";
writemessages[722] = "No parece que se consiga nada Ãºtil rascando _.";
writemessages[723] = "No ves eso por aquÃ­.";
writemessages[724] = "No puedes rasgar eso.";
writemessages[725] = "DeberÃ­as especificar quÃ© quieres rasgar.";
writemessages[726] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[727] = "No estÃ¡ aquÃ­.";
writemessages[728] = "No hay ningÃºn motivo para rasgar eso.";
writemessages[729] = "No parece que se consiga nada Ãºtil rasgando _.";
writemessages[730] = "No ves eso por aquÃ­.";
writemessages[731] = "No puedes raspar eso.";
writemessages[732] = "DeberÃ­as especificar quÃ© quieres raspar.";
writemessages[733] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[734] = "No estÃ¡ aquÃ­.";
writemessages[735] = "No hay ningÃºn motivo para raspar eso.";
writemessages[736] = "No parece que se consiga nada Ãºtil raspando _.";
writemessages[737] = "No ves eso por aquÃ­.";
writemessages[738] = "No puedes recargar eso.";
writemessages[739] = "DeberÃ­as especificar quÃ© arma quieres recargar.";
writemessages[740] = "Â¿EstÃ¡s conciente de lo que intentas hacer?";
writemessages[741] = "No estÃ¡ aquÃ­.";
writemessages[742] = "No hay ningÃºn motivo para intentar recargar eso.";
writemessages[743] = "No parece que se consiga nada Ãºtil al intentar recargar _.";
writemessages[744] = "No ves eso por aquÃ­.";
writemessages[745] = "No puedes rellenar eso.";
writemessages[746] = "DeberÃ­as especificar quÃ© quieres rellenar.";
writemessages[747] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[748] = "No estÃ¡ aquÃ­.";
writemessages[749] = "No hay ningÃºn motivo para rellenar eso.";
writemessages[750] = "No quieres rellenar _.";
writemessages[751] = "No parece que se consiga nada Ãºtil rellenando _.";
writemessages[752] = "No ves eso por aquÃ­.";
writemessages[753] = "No puedes remover eso.";
writemessages[754] = "DeberÃ­as especificar quÃ© quieres remover.";
writemessages[755] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[756] = "No estÃ¡ aquÃ­.";
writemessages[757] = "No hay ningÃºn motivo para remover eso.";
writemessages[758] = "No parece que se consiga nada Ãºtil removiendo _.";
writemessages[759] = "No ves eso por aquÃ­.";
writemessages[760] = "No puedes retorcer eso.";
writemessages[761] = "DeberÃ­as especificar quÃ© quieres retorcer.";
writemessages[762] = "Mejor no... La violencia nunca ha llevado a nada bueno.";
writemessages[763] = "No estÃ¡ aquÃ­.";
writemessages[764] = "No hay ningÃºn motivo para retorcer eso.";
writemessages[765] = "No parece que se consiga nada Ãºtil retorciendo _.";
writemessages[766] = "No ves eso por aquÃ­.";
writemessages[767] = "No puedes reunir eso.";
writemessages[768] = "DeberÃ­as especificar quÃ© quieres reunir.";
writemessages[769] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[770] = "No estÃ¡ aquÃ­.";
writemessages[771] = "No hay ningÃºn motivo para reunir eso.";
writemessages[772] = "No parece que se consiga nada Ãºtil reuniendo _.";
writemessages[773] = "No ves eso por aquÃ­.";
writemessages[774] = "No puedes revisar eso.";
writemessages[775] = "DeberÃ­as especificar quÃ© quieres revisar.";
writemessages[776] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[777] = "No estÃ¡ aquÃ­.";
writemessages[778] = "No hay ningÃºn motivo para revisar eso.";
writemessages[779] = "No parece que se consiga nada Ãºtil revisando _.";
writemessages[780] = "No ves eso por aquÃ­.";
writemessages[781] = "No puedes romper eso.";
writemessages[782] = "DeberÃ­as especificar quÃ© quieres romper.";
writemessages[783] = "Mejor no... La violencia nunca ha llevado a nada bueno.";
writemessages[784] = "No estÃ¡ aquÃ­.";
writemessages[785] = "No hay ningÃºn motivo para romper eso.";
writemessages[786] = "No parece que se consiga nada Ãºtil rompiendo _.";
writemessages[787] = "No ves eso por aquÃ­.";
writemessages[788] = "DeberÃ­as especificar quÃ© quieres sacar.";
writemessages[789] = "No puedes sacar eso.";
writemessages[790] = "No puedes sacar eso.";
writemessages[791] = "No puedes sacar eso.";
writemessages[792] = "No puedes sacar _ de ahÃ­, en todo caso puedes quitÃ¡rtelo porque lo tienes puesto...";
writemessages[793] = "Â¿De dÃ³nde quieres sacar eso?";
writemessages[794] = "No puedes sacar eso de ahÃ­.";
writemessages[795] = "Â¿De dÃ³nde dices que quieres sacar eso?";
writemessages[796] = "No puedes sacar eso de ahÃ­...";
writemessages[797] = "No puedes sacar _ de ahÃ­ porque no lo tienes a la mano.";
writemessages[798] = "No puedes sacudir eso.";
writemessages[799] = "DeberÃ­as especificar quÃ© quieres sacudir.";
writemessages[800] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[801] = "No estÃ¡ aquÃ­.";
writemessages[802] = "No hay ningÃºn motivo para sacudir eso.";
writemessages[803] = "No parece que se consiga nada Ãºtil sacudiendo _.";
writemessages[804] = "No ves eso por aquÃ­.";
writemessages[805] = "No puedes separar eso.";
writemessages[806] = "DeberÃ­as especificar quÃ© quieres separar.";
writemessages[807] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[808] = "No estÃ¡ aquÃ­.";
writemessages[809] = "No hay ningÃºn motivo para separar eso.";
writemessages[810] = "No parece que se consiga nada Ãºtil separando _.";
writemessages[811] = "No ves eso por aquÃ­.";
writemessages[812] = "No puedes sofocar eso.";
writemessages[813] = "DeberÃ­as especificar quÃ© quieres sofocar.";
writemessages[814] = "Â¿EstÃ¡s conciente de lo que intentas hacer?";
writemessages[815] = "No estÃ¡ aquÃ­.";
writemessages[816] = "No hay ningÃºn motivo para sofocar eso.";
writemessages[817] = "No parece que se consiga nada Ãºtil sofocando _.";
writemessages[818] = "No ves eso por aquÃ­.";
writemessages[819] = "No puedes soplar eso.";
writemessages[820] = "DeberÃ­as especificar quÃ© quieres soplar.";
writemessages[821] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[822] = "No estÃ¡ aquÃ­.";
writemessages[823] = "No hay ningÃºn motivo para soplar eso.";
writemessages[824] = "No parece que se consiga nada Ãºtil soplando _.";
writemessages[825] = "No ves eso por aquÃ­.";
writemessages[826] = "No puedes teclear eso.";
writemessages[827] = "DeberÃ­as especificar quÃ© quieres teclear.";
writemessages[828] = "Â¿EstÃ¡s conciente de lo que intentas hacer?";
writemessages[829] = "No estÃ¡ aquÃ­.";
writemessages[830] = "No hay ningÃºn motivo para teclear eso.";
writemessages[831] = "No parece que se consiga nada Ãºtil tecleando _.";
writemessages[832] = "No ves eso por aquÃ­.";
writemessages[833] = "No puedes tirar de eso.";
writemessages[834] = "DeberÃ­as especificar de quÃ© quieres tirar.";
writemessages[835] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[836] = "No estÃ¡ aquÃ­.";
writemessages[837] = "No hay ningÃºn motivo para tirar de eso.";
writemessages[838] = "No parece que se consiga nada Ãºtil tirando de _.";
writemessages[839] = "No ves eso por aquÃ­.";
writemessages[840] = "No puedes tocar eso.";
writemessages[841] = "DeberÃ­as especificar quÃ© o a quiÃ©n quieres tocar.";
writemessages[842] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[843] = "No estÃ¡ aquÃ­.";
writemessages[844] = "No hay ningÃºn motivo para tocar eso.";
writemessages[845] = "No parece que se consiga nada Ãºtil tocando _.";
writemessages[846] = "No ves eso por aquÃ­.";
writemessages[847] = "No puedes torturar eso.";
writemessages[848] = "DeberÃ­as especificar quÃ© o a quiÃ©n quieres torturar.";
writemessages[849] = "Seguro que aÃºn te queda algo de conciencia que te impida hacer algo tan inhumano...";
writemessages[850] = "No estÃ¡ aquÃ­.";
writemessages[851] = "No hay ningÃºn motivo para torturar eso.";
writemessages[852] = "No parece que se consiga nada Ãºtil torturando _.";
writemessages[853] = "No ves eso por aquÃ­.";
writemessages[854] = "No puedes unir eso.";
writemessages[855] = "DeberÃ­as especificar quÃ© quieres unir.";
writemessages[856] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[857] = "No estÃ¡ aquÃ­.";
writemessages[858] = "No hay ningÃºn motivo para unir eso.";
writemessages[859] = "No parece que se consiga nada Ãºtil uniendo _.";
writemessages[860] = "No ves eso por aquÃ­.";
writemessages[861] = "No puedes vaciar eso.";
writemessages[862] = "DeberÃ­as especificar quÃ© quieres vaciar.";
writemessages[863] = "Â¿EstÃ¡s conciente de lo que intentas hacer?";
writemessages[864] = "No estÃ¡ aquÃ­.";
writemessages[865] = "No hay ningÃºn motivo para vaciar eso.";
writemessages[866] = "No parece que se consiga nada Ãºtil vaciando _.";
writemessages[867] = "No ves eso por aquÃ­.";
writemessages[868] = "No puedes vender eso.";
writemessages[869] = "DeberÃ­as especificar quÃ© quieres vender.";
writemessages[870] = "Obviamente no eres su dueÃ±o para poderlo vender...";
writemessages[871] = "No estÃ¡ aquÃ­.";
writemessages[872] = "No hay ningÃºn motivo para vender eso.";
writemessages[873] = "No parece que se consiga nada Ãºtil vendiendo _.";
writemessages[874] = "No ves eso por aquÃ­.";
writemessages[875] = "No puedes examinar dentro de eso.";
writemessages[876] = "DeberÃ­as especificar dentro de quÃ© quieres examinar.";
writemessages[877] = "No puedes examinar eso.";
writemessages[878] = "DeberÃ­as especificar quÃ© quieres examinar.";
writemessages[879] = "Â¿EstÃ¡s conciente de lo que intentas hacer?";
writemessages[880] = "No estÃ¡ aquÃ­.";
writemessages[881] = "No crees que se deje. En cualquier caso, eso no es muy apropiado.";
writemessages[882] = "No estÃ¡ aquÃ­.";
writemessages[883] = "No hay ningÃºn motivo para examinar dentro de eso.";
writemessages[884] = "No hay ningÃºn motivo para examinar eso.";
writemessages[885] = "Examinas _ pero no ves nada especial. En su interior puedes ver: ";
writemessages[886] = "Examinas _ pero no le ves nada especial.";
writemessages[887] = "No ves eso por aquÃ­.";
writemessages[888] = "No puedes ir ";
writemessages[889] = ". ";
writemessages[890] = "Un rudo y enorme guardiÃ¡n de la torre estÃ¡ por aquÃ­ vigilando los alrededores.";
writemessages[891] = "Cierta porciÃ³n de la pared se ha movido dando acceso a otra sala.";
writemessages[892] = "Observas que en la ventana hay un boquete por el cual se puede salir.";
writemessages[893] = "Escuchas un suave caminar de pasos hacia el norte cerca de aquÃ­. DeberÃ­as tener cuidado y andar atento a tu alrededor.";
writemessages[894] = "Escuchas un suave caminar de pasos hacia el suroeste cerca de aquÃ­. DeberÃ­as tener cuidado y andar atento a tu alrededor.";
writemessages[895] = "Â¡Sin previo aviso el guardiÃ¡n de la torre se avalanza hacia ti propinÃ¡ndote un fuerte golpe en la cabeza con su pesado mandoble a la vez que lanza un gutural grito lleno de furia que te distrae por un momento y aprovecha para dejarte inconciente!";
writemessages[896] = "Alertado por el ruido, el guardiÃ¡n otea hacia tu posiciÃ³n. DeberÃ­as ocultar tu precencia.";
writemessages[897] = "Luego de investigar el extraÃ±o ruido sin encontrar nada fuera de lugar, el guardiÃ¡n regresa a su puesto de vigilancia en el medio del camino.";
writemessages[898] = "El guardiÃ¡n mueve su cabeza vigilando el camino en varias direcciones.";
writemessages[899] = "El guardiÃ¡n camina de un lado a otro escudriÃ±ando en la oscuridad.";
writemessages[900] = "El guardiÃ¡n estira sus musculos y cambia su pesada arma de mano.";

// LOCATION MESSAGES

total_location_messages=11;

locations = [];

locations[0] = "La Torre. Buscas fama y gloria, pero la fama y la gloria cuestan... Â¿CuÃ¡nto estÃ¡s dispuesto a pagar?\n";
locations[1] = "EstÃ¡s junto a la puerta principal. A su lado puedes ver una mesa de guardia y en la pared norte hay una chimenea.\n";
locations[2] = "Varios maltrechos catres se amontonan en esta habitaciÃ³n.\n";
locations[3] = "El viento ulula a travÃ©s de la empinada escalera de caracol, una vieja armadura parece vigilar la escalera.\n";
locations[4] = "Una silenciosa estancia dÃ©bilmente alumbrada por los rayos de luna que se filtran a travÃ©s de un pequeÃ±o ventanuco. El suelo estÃ¡ lleno de paja, colgando de unos grilletes en la pared observas un esqueleto humano.\n";
locations[5] = "Los desgastados peldaÃ±os de piedra resbalan en ocasiones. A mitad de la escalera una antorcha en la pared impide que la oscuridad sea completa.\n";
locations[6] = "Una gran cama preside la estancia, los gruesos barrotes no permiten la salida por la ventana, aunque de todos modos estarÃ­a demasiado alta.\n";
locations[7] = "Permaneces junto a la base de la oscura torre que ha funcionado como prisiÃ³n desde tiempos inmemoriales. Torre de la cual se dice, no existe escapatoria alguna.\n";
locations[8] = "Un viejo y polvoriento camino de tierra flanqueado por una espesa vegetaciÃ³n y unos cuantos arbustos, desciende desde la gran torre hasta un abandonado muelle de madera en la cara noreste de la isla.\n";
locations[9] = "EstÃ¡s en el destartalado y astillado embarcadero de madera que permanece olvidado al noreste de la isla. A simple vista, se puede ver que este lugar ha cumplido con su tiempo Ãºtil y ahora el mismo permanece abandonado a la intemperie.\n";
locations[10] = "";

// CONNECTIONS

connections = [];
connections_start = [];

connections[0] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[1] = [ -1, -1, -1, -1, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[2] = [ -1, -1, -1, -1, 3, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[3] = [ -1, -1, -1, -1, -1, 2, -1, -1, -1, -1, 5, -1, -1, -1, -1, -1 ];
connections[4] = [ -1, -1, -1, -1, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[5] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6, 3, -1, -1, -1, -1 ];
connections[6] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5, -1, -1, -1, -1 ];
connections[7] = [ -1, -1, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[8] = [ -1, -1, -1, 7, -1, -1, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[9] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, -1, -1, -1, -1, -1, -1 ];
connections[10] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];

connections_start[0] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[1] = [ -1, -1, -1, -1, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[2] = [ -1, -1, -1, -1, 3, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[3] = [ -1, -1, -1, -1, -1, 2, -1, -1, -1, -1, 5, -1, -1, -1, -1, -1 ];
connections_start[4] = [ -1, -1, -1, -1, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[5] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6, 3, -1, -1, -1, -1 ];
connections_start[6] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5, -1, -1, -1, -1 ];
connections_start[7] = [ -1, -1, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[8] = [ -1, -1, -1, 7, -1, -1, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[9] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, -1, -1, -1, -1, -1, -1 ];
connections_start[10] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];


resources=[];
resources.push([RESOURCE_TYPE_SND, 1256, "dat/ambiente_camino.ogg"]);
resources.push([RESOURCE_TYPE_SND, 1257, "dat/ambiente_mar.ogg"]);
resources.push([RESOURCE_TYPE_SND, 1258, "dat/ambiente_playa.ogg"]);
resources.push([RESOURCE_TYPE_SND, 1259, "dat/ambiente_torre.ogg"]);
resources.push([RESOURCE_TYPE_SND, 1260, "dat/arde_antorcha.ogg"]);
resources.push([RESOURCE_TYPE_SND, 1261, "dat/cortar_funda.ogg"]);
resources.push([RESOURCE_TYPE_SND, 1262, "dat/gime_viento.ogg"]);
resources.push([RESOURCE_TYPE_SND, 1263, "dat/guardian_captura.ogg"]);
resources.push([RESOURCE_TYPE_SND, 1264, "dat/muro_abriendo.ogg"]);
resources.push([RESOURCE_TYPE_SND, 1265, "dat/muro_cerrando.ogg"]);
resources.push([RESOURCE_TYPE_SND, 1266, "dat/romper_barra.ogg"]);


 //OBJECTS

objects = [];
objectsAttrLO = [];
objectsAttrHI = [];
objectsLocation = [];
objectsNoun = [];
objectsAdjective = [];
objectsWeight = [];
objectsAttrLO_start = [];
objectsAttrHI_start = [];
objectsLocation_start = [];
objectsWeight_start = [];

objects[0] = "una barra de hierro";
objectsNoun[0] = 51;
objectsAdjective[0] = 10;
objectsLocation[0] = 252;
objectsLocation_start[0] = 252;
objectsWeight[0] = 2;
objectsWeight_start[0] = 2;
objectsAttrLO[0] = 0;
objectsAttrLO_start[0] = 0;
objectsAttrHI[0] = 0;
objectsAttrHI_start[0] = 0;

objects[1] = "un trozo de carbÃ³n";
objectsNoun[1] = 52;
objectsAdjective[1] = 255;
objectsLocation[1] = 252;
objectsLocation_start[1] = 252;
objectsWeight[1] = 1;
objectsWeight_start[1] = 1;
objectsAttrLO[1] = 0;
objectsAttrLO_start[1] = 0;
objectsAttrHI[1] = 0;
objectsAttrHI_start[1] = 0;

objects[2] = "unas raÃ­das sÃ¡banas";
objectsNoun[2] = 53;
objectsAdjective[2] = 255;
objectsLocation[2] = 252;
objectsLocation_start[2] = 252;
objectsWeight[2] = 1;
objectsWeight_start[2] = 1;
objectsAttrLO[2] = 0;
objectsAttrLO_start[2] = 0;
objectsAttrHI[2] = 0;
objectsAttrHI_start[2] = 0;

objects[3] = "un pequeÃ±o cuchillo";
objectsNoun[3] = 54;
objectsAdjective[3] = 255;
objectsLocation[3] = 252;
objectsLocation_start[3] = 252;
objectsWeight[3] = 1;
objectsWeight_start[3] = 1;
objectsAttrLO[3] = 0;
objectsAttrLO_start[3] = 0;
objectsAttrHI[3] = 0;
objectsAttrHI_start[3] = 0;

objects[4] = "unas fundas de catre";
objectsNoun[4] = 55;
objectsAdjective[4] = 255;
objectsLocation[4] = 252;
objectsLocation_start[4] = 252;
objectsWeight[4] = 1;
objectsWeight_start[4] = 1;
objectsAttrLO[4] = 0;
objectsAttrLO_start[4] = 0;
objectsAttrHI[4] = 0;
objectsAttrHI_start[4] = 0;

objects[5] = "una tosca piedra";
objectsNoun[5] = 62;
objectsAdjective[5] = 255;
objectsLocation[5] = 252;
objectsLocation_start[5] = 252;
objectsWeight[5] = 1;
objectsWeight_start[5] = 1;
objectsAttrLO[5] = 0;
objectsAttrLO_start[5] = 0;
objectsAttrHI[5] = 0;
objectsAttrHI_start[5] = 0;

objects[6] = "un viejo bote de madera";
objectsNoun[6] = 63;
objectsAdjective[6] = 255;
objectsLocation[6] = 9;
objectsLocation_start[6] = 9;
objectsWeight[6] = 20;
objectsWeight_start[6] = 20;
objectsAttrLO[6] = 0;
objectsAttrLO_start[6] = 0;
objectsAttrHI[6] = 0;
objectsAttrHI_start[6] = 0;

last_object_number =  6; 
carried_objects = 0;
total_object_messages=7;
