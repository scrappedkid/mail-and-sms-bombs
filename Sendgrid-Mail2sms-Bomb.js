/*

?     ███████╗███████╗███╗   ██╗██████╗  ██████╗ ██████╗ ██╗██████╗
?     ██╔════╝██╔════╝████╗  ██║██╔══██╗██╔════╝ ██╔══██╗██║██╔══██╗
?     ███████╗█████╗  ██╔██╗ ██║██║  ██║██║  ███╗██████╔╝██║██║  ██║
?     ╚════██║██╔══╝  ██║╚██╗██║██║  ██║██║   ██║██╔══██╗██║██║  ██║
?     ███████║███████╗██║ ╚████║██████╔╝╚██████╔╝██║  ██║██║██████╔╝
?     ╚══════╝╚══════╝╚═╝  ╚═══╝╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝╚═════╝
?
?     ███████╗██████╗  █████╗ ███╗   ███╗███╗   ███╗███████╗██████╗
?     ██╔════╝██╔══██╗██╔══██╗████╗ ████║████╗ ████║██╔════╝██╔══██╗
?     ███████╗██████╔╝███████║██╔████╔██║██╔████╔██║█████╗  ██████╔╝
?     ╚════██║██╔═══╝ ██╔══██║██║╚██╔╝██║██║╚██╔╝██║██╔══╝  ██╔══██╗
?     ███████║██║     ██║  ██║██║ ╚═╝ ██║██║ ╚═╝ ██║███████╗██║  ██║
?     ╚══════╝╚═╝     ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝

*/
/***************************************************************************/
/*    Sendgrid Spammer  */
/***************************************************************************/

/***************************************************************************/
/*
/*    USEFUL FOR 8005551234@txt.provider.com
/*    sms bomb your enemies, or set helpful daily reminders
/*    as long as the script runs continually in background
/*    Can also be used to send emails... If you know what you're doing
/*    it is easy as pie to add the random number
/*    to subject, or sender (to prevent blocking) or into the message..
/*    if you feel like it, put in an array where numbers = messages
/*    and pull from the array to pick which message or anything randomly
/*
/*    Use NPM or Yarn to isntall sendgrid "npm install @sendgrid/mail"
/*
/*  If using VSCode, clean by CTRL-F2 '/*', hit 'Home'
/*  then hold shift, hit 'End', it selects all comments, hit 'Delete' x 2.
/*
/***************************************************************************/

const sgMail = require('@sendgrid/mail')

/***************************************************************************/
/*    API KEY HERE FROM SENDGRID
/***************************************************************************/

let SGKey = (`ENTER-SG-API-KEY-HERE`)

/***************************************************************************/
/*    Who to send this this to?
/*    Enter 10 digit phone number for SMS
/*    Followed by domain of their text to e-mail service
/***************************************************************************/

let whoGets = `XXXXXXXXXX@sms.provider.com`

/***************************************************************************/
/*
/*    Canadian Providers for SMS
/*
/*    let whoGets = `[10digitnumber]@txt.bell.ca`
/*    let whoGets = `[10digitnumber]@pcs.rogers.com`
/*    let whoGets = `[10digitnumber]@sms.fido.ca`
/*    let whoGets = `[10digitnumber]@msg.telus.com`
/*    let whoGets = `[10digitnumber]@vmobile.ca`
/*    let whoGets = `[10digitnumber]@mobiletxt.ca`
/*    let whoGets = `[10digitnumber]@msg.koodomobile.com`
/*    let whoGets = `[10digitnumber]@sms.sasktel.com`
/*    let whoGets = `[10digitnumber]@pcs.sasktelmobility.com`
/*    let whoGets = `[10digitnumber]@text.mts.net`
/*    let whoGets = `[10digitnumber]@txt.windmobile.ca`
/*
/***************************************************************************/

/***************************************************************************/
/*    DO NOT CHANGE - Set array of messages open
/***************************************************************************/

let data = {
  'messages': [

/***************************************************************************/
/*    Open Each message from this box until the ##### block
/***************************************************************************/

    {

/***************************************************************************/
/*    Who's the "sender" of THIS EMAIL?
/*    ( SPOOF SMS, Email detects Sendgrid )
/***************************************************************************/

    msgFrom: `MAKEupANY@emailADDRESS.com`,

/***************************************************************************/
/*    What is the SUBJECT??
/***************************************************************************/

    msgSub: `Enter Any Subject`,

/***************************************************************************/
/*    What does it SAY?
/***************************************************************************/

      msgBody: `Text To Send. ''s are fine, just keep angled
apostrophes on outer start and end. On new line, remember to start
at the 0 column.`,

/***************************************************************************/
/*    Closing bracket for each message here..add comma after }.. ie "},"
/*    Each message written inside the array will send on each cycle at once.
/***************************************************************************/

    }

/*#########################################################################*/
/*#########################################################################*/
/*#########################################################################*/
/*
/*    DIVIDER. add comma for each additional message between above
/*    COPY PASTE ABOVE ARRAY OBJ FOR AS MANY DIFFERENT
/*    MESSAGES AND SENDERS AS DESIRED
/*
/***************************************************************************/
/*    Close Messages Outer array.
/***************************************************************************/

  ]
}

/***************************************************************************/
/***************************************************************************/
/***************************************************************************/
/***************************************************************************/
/***************************************************************************/
/*
/*    Edit the variables as you want here for time/random nums...
/*
/***************************************************************************/
/***************************************************************************/
/***************************************************************************/
/***************************************************************************/

/***************************************************************************/
/*    Low and High numbers to use when generating nums for sender address
/***************************************************************************/

let fromNumLow = 0
let fromNumHigh = 9999

/***************************************************************************/
/*
/*    The numbers below are seconds to wait.
/*    The first number is  the minimum time to wait
/*
/*    range picks a random # of seconds to add from 0 to 'rangeTime'
/*    It's only coded to pick one time.. if looping, it loops on this
/*    I didn't make it generate for each, easy fix for mid-talent coder
/*
/***************************************************************************/
/*
/*    wait before first send = baseTime + RANDOM # from 1 to rangeTime
/*    sendTotal every base + range. therafter. this is set to 10-60 seconds
/*
/***************************************************************************/

let baseTime = 2
let rangeTime = 0

/***************************************************************************/
/**    How many times do you want this to send msgs in the array?
/***************************************************************************/

let sendTotal = 600

/***************************************************************************/
/***************************************************************************/
/***************************************************************************/
/*

!     █████████   ██████   █████ ██████████    █████████     ███████    ███
!    ███░░░░░███ ░░██████ ░░███ ░░███░░░░███   ███░░░░░███  ███░░░░░███░███
!   ░███    ░███  ░███░███ ░███  ░███   ░░███  ███     ░░░  ███    ░███░███
!   ░███████████  ░███░░███░███  ░███    ░███ ░███         ░███    ░███░███
!   ░███░░░░░███  ░███ ░░██████  ░███    ░███ ░███   █████ ░███    ░███░███
!   ░███    ░███  ░███  ░░█████  ░███    ███ ░░███  ░░███ ░░███     ███ ░░░
!   █████   █████ █████  ░░█████ ██████████   ░░█████████  ░░░███████░  ███
!  ░░░░░   ░░░░░ ░░░░░    ░░░░░ ░░░░░░░░░░    ░░░░░░░░░     ░░░░░░░    ░░░

    Leave below alone unless you know what you're doing.

/***************************************************************************/
/*    Set the counter base at 0..
/***************************************************************************/

let counter = 0

/***************************************************************************/
/*
/*    Sets time to random whole seconds Above the base wait time.
/*    Timer waits the base time before sending first message
/*    MAINTAINS SAME INTERVAL >FOR ENTIRE RUN< NO RANDOM PER MESSAGE
/*
/***************************************************************************/

let timer = Math.floor(Math.random() * rangeTime) + baseTime

/***************************************************************************/
/*    Inject the api Key
/***************************************************************************/

sgMail.setApiKey(SGKey)


/***************************************************************************/
/*    Run the script / loop
/***************************************************************************/

const intervalId = setInterval(() => {
  data.messages.forEach(
    (obj, i) => {

/***************************************************************************/
/*    DIGITS TO PREPEND IN FRONT OF SENDER EMAIL
/***************************************************************************/

    var min = fromNumLow
    var max = fromNumHigh
    let randNum = Math.floor(Math.random() * (max - min + 1)) + min

/***************************************************************************/
/*    MESSAGE FROM VARS
/***************************************************************************/

    const msg = {
      from: randNum + obj.msgFrom,
      text: obj.msgBody,
      to: whoGets,
      subject: obj.msgSub,
      html: obj.msgBody
    }

/***************************************************************************/
/*    FIRE IT OFF
/***************************************************************************/

    sgMail.send(msg)
    })

/***************************************************************************/
/*    Add to the counter how many times the loop has run
/***************************************************************************/

  counter += 1

/***************************************************************************/
/*    Check count and log to console if done..
/***************************************************************************/

  if (counter === sendTotal) {
    console.log('All Done')
    clearInterval(intervalId)
  }

/***************************************************************************/
/*    If not done, console log how many are done out of set total
/***************************************************************************/

  if (counter !== sendTotal) {
    console.log('Sent: ' + counter + '/' + sendTotal)
  }

/***************************************************************************/
/*    TIMER MULTIPLIER TO MAKE WAIT TIMER TIMES SECONDS (1000ms)
/***************************************************************************/

  },
timer * 1000)

/***************************************************************************/
/*    The End! Have Fun!
/***************************************************************************/
