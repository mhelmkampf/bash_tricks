### Keyboard shortcuts

```bash
tab        # auto-complete file/dir names
up arrow   # previous command
Ctrl + c   # interrupt / kill process
Ctrl + d   # close shell (== exit)

Ctrl + a   # go to beginning of line
Ctrl + e   # go to end of line
Ctrl + l   # clear screen (== clear)
```

### Quality-of-life commands

```bash
clear      # clear screen
history    # display command history (combine e.g. with grep: history | grep 'cd')
!n         # reissue command using history number
           
cd ~       # return to home directory (== $HOME)
cd /       # return to root directory
cd -       # return to last working directory
```

### Aliases

Aliases are shortcuts for long or often-used commands. They can be made permanent by adding them to `~/.bashrc`, a file containing commands that are executed automatically upon starting the shell.

```bash
alias <alias_name>="command"

# modify cd
alias ..="cd .."

# long format and color for ls
alias ll="ls -hl --color"

# view your jobs in the queue 
alias sq="squeue -u <user_id>"
```

### Wildcards

```bash
*         # matches any string of characters
?         # matches any one character
[abc]     # matches a, b, or c
```
Examples: 
<br>`cp *.fas dir/`
<br>`cat seq[AB].fas`

<br>

### Variables

Variables are placeholders for information that can be retrieved or modified later. Typical values are strings (text, including file names and paths) and integers (numbers). The output (result) of another command can also be assigned, and wildcards are supported (see loops below).

```bash
VAR="example text"    # assign string (text) to variable
VAR=7                 # assign 7 to variable
VAR=$(command)        # assign command output, e.g. VAR=$(awk '{ print $1 }' file)

echo ${VAR}           # print current value of variable (== echo $VAR)
```
Examples for important pre-defined variables:
<br>
`$HOME`
<br>
`$PATH`

<br>

### Loops

Loops allow you to perform an action multiple times, or repeat the same action with slight variations (e.g. multiple input files or lines). `for` and `while` loops are similar – usually `for` loops are used when the number of iterations is known and/or small. `while` loops are better suited for an unknown and/or large number of iterations.

```bash
# Perform action (here: echo) for each item in list (A, B, C)
for i in A B C ; do echo ${i} ; done

# Loops can be written on one line using ";"
for i in *.seq ; do cat ${i} ; done

# In scripts, loops are usually indented
for i in *.seq
do
  cat ${i}
done

# Use while to loop over lines in a file
while read LINE ; do cat ${LINE}.fas ; done < list.txt

# If-else statement
if <condition> ; then
  <action>
else
  <action>
fi
```
