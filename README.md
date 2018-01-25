# LifeBuilder
## Background
LifeBuilder is a JavaScript implementation of the Game of Life, a cellular automaton invented in 1970 by mathematician John Conway.
For information about the fascinating intellectual history behind cellular automata and the Game of Life, see <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Conway's Game of Life</a>.
Briefly, an instance of the Game of Life is a grid in which squares can be in either of two states, generally termed "alive" and "dead".
Squares mutate from one state to another based on their neighbors: living squares die unless they have exactly two or three living neighbors, and
dead squares come back to life if they have exactly three living neighbors. The game became famous as an example of how simple rules can
lead to complex, unpredictable patterns. Technically, the Game of Life is Turing complete and in principle its long term behavior cannot be determined computationally.
Many interesting patterns have been found and the Game continues to be a focus of interest.

## Using LifeBuilder
LifeBuilder provides an interface for experimenting with the Game of Life including the following features:
* Users can click on a square to change its state from dead (yellow) to alive (green) and back, or click on provided patterns and place them in the grid to see what they do, then 
* press start and watch the patterns evolve.
* step button: Users interested in the fine-grained behavior of a pattern can also proceed through the Game one step at a time using the step button
* toggle the speed. 
* Provided patterns include a glider, which moves across the board, a pulsar, which has periodic behavior, and a 
glider gun, which produces a stream of gliders.

## Implementation
LifeBuilder uses only vanilla JavaScript. One of the interesting technical issues concerns keeping the game flow smooth while the user
toggles the speed. A simple implementation would use setTimer to update the game at fixed intervals, and give the speed toggle an event handler to change the time between steps whenever the user
updates the speed toggle. However, because of the way JavaScript implements asynchronous actions, this results in very uneven game flow and
delays if the user goes back and forth between slow and fast modes. LifeBuilder solves this problem by building a custom timer which
checks at fixed intervals to see if the game needs to be updated, effectively circumventing any buildup of the asynchronous call stack:

```let newTime = Date.now();
  function updateCellsRepeatedly(){ 
    let newTime = Date.now();
    let speed = parseInt(document.getElementById("speed").value)*10;
    if (newTime - lastTime > speed && !stopped){
      updateCells();
      lastTime = newTime;
    }
  }
  setInterval(() => {
    updateCellsRepeatedly();}, 50);
});
```

This results in much more fluid speed toggling.

## Coming Features
Features currently under development include:
* More pre-made patterns for users to play with
* A zoom toggle so users can examine parts of the board in greater detail
* A display that records which pattern is currently selected
