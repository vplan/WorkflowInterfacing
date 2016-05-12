var noflo = require('noflo');

component.inPorts.add('url', { datatype: 'string', required: true });
component.inPorts.add('all', { datatype: 'boolean' });
component.inPorts.add('filter', { datatype: 'object' });

exports.getComponent = function () {
  var c = new noflo.Component();

  c.inPorts.add('in', function (event, payload) {
    if (event !== 'data') {
      return;
    }
    // Do something with the packet, then
    c.outPorts.out.send(payload);
  });
  c.outPorts.add('out');
  return c;
};