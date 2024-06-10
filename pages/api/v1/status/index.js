function status(request, response) {
  response.status(200).json({ "status": "health" })
}

export default status