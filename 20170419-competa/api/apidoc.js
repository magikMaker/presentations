/**
 * @api {get} /todos/ Returns all available todos
 * @apiName getTodos
 * @apiGroup Todo
 *
 * @apiParam {Number} id Todos unique ID.
 *
 * @apiSuccess {String} title the Title of the TodoItem
 * @apiSuccess {Number} id  the ID of the TodoItem
 * @apiSuccess {Boolean} done whether or not the TodoItem has been done
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *         {
 *           "id": 1,
 *           "title": "Create API",
 *           "done": true
 *         },
 *         {
 *           "id": 2,
 *           "title": "Write API documentation",
 *           "done": false
 *         }
 *     ]
 */

/**
 * @api {get} /todos/:id Returns the TodoItem with the specified ID
 * @apiName getTodoById
 * @apiGroup Todo
 *
 * @apiParam {Number} id Todos unique ID.
 *
 * @apiSuccess {String} title the Title of the TodoItem
 * @apiSuccess {Number} id the ID of the TodoItem
 * @apiSuccess {Boolean} done whether or not the TodoItem has been done
 *
 * @apiError TodoNotFound The id of the TodoItem was not found.
 *
 *  * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1,
 *       "title": "Create API",
 *       "done": true
 *     }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "TodoNotFound"
 *     }
 */
