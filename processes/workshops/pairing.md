# Pairing

An important part of organising a workshop is the pairing process. It ensures students are assigned to coaches that have the right skills to help them, but it also prevents first-time students from being assigned to first-time coaches.

We use the list of attendees to help with the pairing process, which you can access by clicking _Attendees_ from the workshop admin page. Here's an example (with whitespace removed for readability):

```text
Students
___ 1.  Jane Doe (she/her)     Python
___ 2.  Mary Roe (she/her)     HTML/CSS/JavaScript
___ 3.  Harry Hoe (they/them)  I don't know, I'm a complete beginner.
I__ 4.  Larry Loe (he/him)     Python

Coaches
___ 1.  John Doe (he/him)
I__ 2.  Richard Roe (he/him)
___ 3.  Mark Moe (he/him)
___ 4.  Norma Noe (she/her)
```

The pairing can be done manually or by using the spreadsheet.

## Manually

This process is suitable for a small number of attendees (up to 20).

### Preparation

1. Print the list of attendees.

1. For the students, if there are too many of them who've picked **Other** or **I don't know, I'm a complete beginner**, you might want to send them an email asking for clarification. Alternatively, you can ask them on the day.

1. For the coaches, you should find out what languages/technologies they can teach and write it down next to their names (you only need to write down the languages which are relevant to the current workshop). Most of them will have added this information to their profile, which you can access by clicking their name from the workshop admin page. Alternatively, you can ask them on the day.

### Execution

1. Strike out the names for any no-shows or late cancellations.

1. Assign a coach to up to two students by filling the blank next to the student's number with the coach's number, paying attention not to pair a first-time coach to a first-time student (both marked with an `I`) if possible.

1. Repeat the process until all students have been assigned a coach.

## By using the spreadsheet

This process is recommended for a large number of attendees (20 or more), and it's heavily inspired by the [manual](#manually) process.

### Preparation

1. Open the [spreadsheet][sheet] and duplicate the _Template_ sheet.

1. On the workshop admin page, click _Attendees_ and copy the list of attendees:
   - Select all (`Cmd`/`Ctrl`+`a`);
   - Copy (`Cmd`/`Ctrl`+`c`).

1. On the newly-created sheet, paste the list of attendees:
   - Select the `A2` cell;
   - Click the formula bar;
   - Paste (`Cmd`/`Ctrl`+`v`).

1. Run the macro to populate the list of attendees (_Tools > Macros > Populate attendees_), authorizing the script if prompted.

1. Fill in the **Can teach** column for each coach, using the information retrieved from their profile or obtained on the day.

### Execution

1. Strike out any no-shows or late cancellations by replacing their number with an `X`.

1. Fill in the **#C** column for each student with a coach's number.

1. Repeat the process until no yellow rows remain.

[sheet]: https://docs.google.com/spreadsheets/d/1i7RgRo27tGVc-imvqeiowuwYtr_8t5CHXiiahxtH-i0/edit?usp=sharing
