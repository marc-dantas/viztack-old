const stack = document.getElementById('stack');

function renderStack() {
    stack.innerHTML = "";
    if (data_stack.length == 0) {
        const p = document.createElement('p');
        p.setAttribute('class', 'subtitle');
        const i = document.createElement('i')
        i.appendChild(document.createTextNode('Try pushing some elements onto the stack.'));
        p.appendChild(i);
        stack.appendChild(p);
    } else {
        data_stack.reverse().forEach(function(x) {
            const elem = document.createElement('div');
            elem.setAttribute('class', 'box');
            const title = document.createElement('p');
            title.setAttribute('class', 'title is-4');
            title.appendChild(document.createTextNode(`${x}`));
            elem.appendChild(title);
            stack.appendChild(elem);
        });
    }
}

const push_btn = document.getElementById('push');
const multi_push_btn = document.getElementById('multi_push');
const sum_btn = document.getElementById('sum');
const sub_btn = document.getElementById('sub');
const mul_btn = document.getElementById('mul');
const div_btn = document.getElementById('div');
const drop_btn = document.getElementById('drop');
const dup_btn = document.getElementById('dup');
const over_btn = document.getElementById('over');
const rot_btn = document.getElementById('rot');

let data_stack = [];

push_btn.onclick = function() {
    let value = window.prompt("Enter the value to be pushed on the stack.").trim();
    if (isNaN(value)) {
        window.alert("Invalid number. Try again.")
    } else {
        data_stack.push(Number(value));
    }
    renderStack();
};

multi_push_btn.onclick = function() {
    let values = window.prompt("Enter the values to be pushed on the stack (separated by comma).")
      .split(',')
      .forEach(function(item) {
        let value = item.trim(); 
        if (isNaN(value)) {
            window.alert(`Invalid value \`${value}\`. Try again.`)
        } else {
            data_stack.push(Number(value));
        }
      });
    renderStack();
};

sum_btn.onclick = function() {
    if (data_stack.length < 2) {
        window.alert("Too few stack values to perform the sum operation.");
        window.alert(`This operation needs two values on the stack. Got ${data_stack.length}.`);
    } else {
        data_stack.push(data_stack.pop() + data_stack.pop());
    }
    renderStack();
};

sub_btn.onclick = function() {
    if (data_stack.length < 2) {
        window.alert("Too few stack values to perform the subtract operation.");
        window.alert(`This operation needs two values on the stack. Got ${data_stack.length}.`);
    } else {
        data_stack.push(data_stack.pop() - data_stack.pop());
    }
    renderStack();
};

div_btn.onclick = function() {
    if (data_stack.length < 2) {
        window.alert("Too few stack values to perform the multiply operation.");
        window.alert(`This operation needs two values on the stack. Got ${data_stack.length}.`);
    } else {
        data_stack.push(data_stack.pop() / data_stack.pop());
    }
    renderStack();
};

mul_btn.onclick = function() {
    if (data_stack.length < 2) {
        window.alert("Too few stack values to perform the division operation.");
        window.alert(`This operation needs two values on the stack. Got ${data_stack.length}.`);
    } else {
        data_stack.push(data_stack.pop() * data_stack.pop());
    }
    renderStack();
};

drop_btn.onclick = function() {
    if (data_stack.length < 1) {
        window.alert("Too few stack values to perform the drop operation.");
        window.alert(`This operation needs one value on the stack. Got ${data_stack.length}.`);
    }
    data_stack.splice(0, 1);
    renderStack();
};

dup_btn.onclick = function() {
    if (data_stack.length < 1) {
        window.alert("Too few stack values to perform the duplicate operation.");
        window.alert(`This operation needs one value on the stack. Got ${data_stack.length}.`);
    } else {
        let v = data_stack.pop();
        data_stack.push(v);
        data_stack.push(v);
    }
    renderStack();
};

over_btn.onclick = function() {
    if (data_stack.length < 2) {
        window.alert("Too few stack values to perform the over operation.");
        window.alert(`This operation needs two values on the stack. Got ${data_stack.length}.`);
    } else {
        // 40 30
        a = data_stack.pop();
        b = data_stack.pop();
        data_stack.push(b);
        data_stack.push(a);
        data_stack.push(b);
    }
    renderStack();
};

rot_btn.onclick = function() {
    if (data_stack.length < 2) {
        window.alert("Too few stack values to perform the rotate operation.");
        window.alert(`This operation needs three values on the stack. Got ${data_stack.length}.`);
    } else {
        // 40 30
        a = data_stack.pop();
        b = data_stack.pop();
        data_stack.push(b);
        data_stack.push(a);
        data_stack.push(b);
    }
    renderStack();
};
