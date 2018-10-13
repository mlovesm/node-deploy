var express = require('express');
// const User = require('../models').User;  //sequelize
const User = require('../schemas/user');

const router = express.Router();
const upbit = require('upbit-api-node');
const { getTicker, getMinCandles, getCandles, getTick, getOrderbook, subscribe } = upbit;

(async () => {
  const order = await getOrderbook(['KRW-XRP']);
  console.log(order);

  // console.log(await upbitExchange.getMyAssets());

  subscribe({
      reconnect: () => {
          console.log('RECONNECT');
      },
      openCallback: () => {
          console.log('OPENED');
      },
      messageCallback: (data) => {
          io.emit('test', data);
          console.log(data.code, data.trade_price, data.trade_volume);
      },
      subscriptionList: {
          trade: ['KRW-XRP'],
          // orderbook: ['KRW-XRP'],
      },
  });
})
// ();

router.get('/', async (req, res, next) => {
    try {
        // const users = await User.findAll();
        const users = await User.find({ provider: { $in: [null] } });
        res.json(users);

    } catch (e) {
        console.error(e);
        next(e);
    }
});

module.exports = (io) => {
    io.on('connection', function (socket) {
      console.log('connected to socket');
  
      socket.on('test', function () {
  
      });
  
      socket.on('disconnect', () => {
        console.log('disconnected to socket');
      });
  
    });
  
    return router;
  }
