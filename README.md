# DL/ML Notes

Interactive notes that build neural networks from the ground up, starting from linear regression. Everything runs in the browser: drag the sliders, press train, and watch gradient descent fit the data.

**Read the notes here: https://acycliq.github.io/dl_ml_notes/**

![A network with three hidden nodes training on noisy data](assets/demo.gif)

The demo above is from Chapter 2: a network with three sigmoid hidden nodes learns a non-linear function from noisy data by gradient descent.

## Chapters

### Part I: Neural nets from scratch

1. [Linear regression as a neural network](https://acycliq.github.io/dl_ml_notes/): recap linear regression with sliders, draw the same model as a network diagram, then add a hidden layer and build a new function out of two lego blocks (ReLU or sigmoid).
2. [Non-linear regression with gradient descent](https://acycliq.github.io/dl_ml_notes/chapter2.html): three sigmoid blocks fit a non-linear function, with a train button, an epoch replay slider, and a noise slider.
3. [A second hidden layer](https://acycliq.github.io/dl_ml_notes/chapter3.html): when one hidden layer cannot fit the shape, go wider or go deeper, and count the parameters either way.
4. [Classification with softmax](https://acycliq.github.io/dl_ml_notes/chapter4.html): three classes, softmax, cross-entropy, and two plots that learn together: a decision-region map and a probability triangle.
5. [Generalization](https://acycliq.github.io/dl_ml_notes/chapter5.html): hold points back, watch a big network win on the training data and lose on the test data, then overfit by hand and pay for it.
6. [The training toolkit](https://acycliq.github.io/dl_ml_notes/chapter6.html): learning rates, momentum, minibatches and Adam, raced against each other on chapter 2's network.

### Part II: Topics in ML

- [Sparse coding and matching pursuit](https://acycliq.github.io/dl_ml_notes/sparse-coding.html): read the genes out of a microscope pixel by hand, watch least squares fail at the same task, and build orthogonal matching pursuit.

