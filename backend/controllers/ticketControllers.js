const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Ticket = require('../models/ticketModel');

// @desc Get user tickets
// @route GET /api/tickets
// @access private
const getTickets = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'getTickets' });
});

// @desc Create new tickets
// @route  POST /api/tickets
// @access private
const createTickets = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'createTickets' });
});

module.exports = { getTickets, createTickets };