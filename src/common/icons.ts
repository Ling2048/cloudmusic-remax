const searchIcon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDJweCIgaGVpZ2h0PSI0M3B4IiB2aWV3Qm94PSIwIDAgNDIgNDMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjEgKDc4MTM2KSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5Hcm91cCAzPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iMC4zMDAwMDAwMTIiPgogICAgICAgIDxnIGlkPSLmkJzntKJf5Y6G5Y+y6K6w5b2VIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTEuMDAwMDAwLCAtMjkzLjAwMDAwMCkiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLXdpZHRoPSI0Ij4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ4LjAwMDAwMCwgMjYxLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM5LjAwMDAwMCwgMjkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgY3g9IjIyLjUiIGN5PSIyMS41IiByPSIxNi41Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzQuMzc1Nzc4OSwzMy40NDI0MDM0IEw0My43ODIyMjYsNDMuMDYwNTkwMSIgaWQ9IlBhdGgtNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==";
const leftArrow = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjNweCIgaGVpZ2h0PSIzOXB4IiB2aWV3Qm94PSIwIDAgMjMgMzkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjEgKDc4MTM2KSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5QYXRoIDI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgIDxnIGlkPSLmrYzljZXor6bmg4Vf5YiG5Lqr54q25oCBIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODAuMDAwMDAwLCAtMTQ5LjAwMDAwMCkiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSI2Ij4KICAgICAgICAgICAgPGcgaWQ9Iuagh+mimOagjyI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i6L+U5Zue5ZKM6aaW6aG1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMC4wMDAwMDAsIDEyNi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5bGluZSBpZD0iUGF0aC0yIiBwb2ludHM9IjY5LjM0ODY5NDggMjYgNTMgNDIuMDYwNzk0OSA2OS4zNDg2OTQ4IDU4LjkwNjg5MTIiPjwvcG9seWxpbmU+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=";
const leftArrow_black ="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjNweCIgaGVpZ2h0PSIzOXB4IiB2aWV3Qm94PSIwIDAgMjMgMzkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjEgKDc4MTM2KSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5QYXRoIDI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgIDxnIGlkPSLmkJzntKJf5Y6G5Y+y6K6w5b2VIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODAuMDAwMDAwLCAtMTQ5LjAwMDAwMCkiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSI2Ij4KICAgICAgICAgICAgPGcgaWQ9Iuagh+mimOagjyI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i6L+U5Zue5ZKM6aaW6aG1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMC4wMDAwMDAsIDEyNi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5bGluZSBpZD0iUGF0aC0yIiBwb2ludHM9IjY5LjM0ODY5NDggMjYgNTMgNDIuMDYwNzk0OSA2OS4zNDg2OTQ4IDU4LjkwNjg5MTIiPjwvcG9seWxpbmU+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=";
const home = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MXB4IiB2aWV3Qm94PSIwIDAgNDAgNDEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjEgKDc4MTM2KSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5Db21iaW5lZCBTaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLmrYzljZXor6bmg4Vf5YiG5Lqr54q25oCBIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTc5LjAwMDAwMCwgLTE0Ny4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9Iuagh+mimOagjyI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i6L+U5Zue5ZKM6aaW6aG1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMC4wMDAwMDAsIDEyNi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNzQuNzc0OTMxLDQ5LjIxODM3MzcgQzE3NC43NzY4MjQsNDkuMTU3MjA2MiAxNzQuNzc3Nzc4LDQ5LjA5NTgwMDYgMTc0Ljc3Nzc3OCw0OS4wMzQxNzEgQzE3NC43Nzc3NzgsNDUuODI0MTQzOSAxNzIuMTkwOTc5LDQzLjIyMTkwMjggMTY5LDQzLjIyMTkwMjggQzE2NS44MDkwMjEsNDMuMjIxOTAyOCAxNjMuMjIyMjIyLDQ1LjgyNDE0MzkgMTYzLjIyMjIyMiw0OS4wMzQxNzEgQzE2My4yMjIyMjIsNDkuMDk1ODAwNiAxNjMuMjIzMTc2LDQ5LjE1NzIwNjIgMTYzLjIyNTA2OSw0OS4yMTgzNzM3IEwxNjMuMjIxOTgsNDkuMjE4MzczNyBMMTYzLjIyMTk4LDU5LjMxNzQxNDcgQzE2My4yMjE5OCw2MC43OTg5NjU2IDE2Mi4wMjA5NDYsNjIgMTYwLjUzOTM5NSw2MiBMMTUxLjY4MjU4NSw2MiBDMTUwLjIwMTAzNCw2MiAxNDksNjAuNzk4OTY1NiAxNDksNTkuMzE3NDE0NyBMMTQ5LDQwLjE5OTE5NjkgQzE0OSwzOS4yMTQxMzI0IDE0OS40MDYyNTcsMzguMjcyNjc0MSAxNTAuMTIyOTUsMzcuNTk2ODc2IEwxNjYuOTM3ODcyLDIxLjc0MTQyNjQgQzE2Ny45ODU1OTksMjAuNzUzNDg0NCAxNjkuNjI2NDQ4LDIwLjc2OTAzMDQgMTcwLjY1NTI2OCwyMS43NzY2NDY1IEwxODcuOTI1OTE2LDM4LjY5MTM1NzMgQzE4OC42MTI4NjQsMzkuMzY0MTQ3OCAxODksNDAuMjg1MTg1OCAxODksNDEuMjQ2NzE4MiBMMTg5LDU5LjMxNzQxNDcgQzE4OSw2MC43OTg5NjU2IDE4Ny43OTg5NjYsNjIgMTg2LjMxNzQxNSw2MiBMMTc3LjUxMzIyOCw2MiBDMTc2LjAzMTY3Nyw2MiAxNzQuODMwNjQzLDYwLjc5ODk2NTYgMTc0LjgzMDY0Myw1OS4zMTc0MTQ3IEwxNzQuODMwNjQzLDQ5LjIxODM3MzcgTDE3NC43NzQ5MzEsNDkuMjE4MzczNyBaIiBpZD0iQ29tYmluZWQtU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==";
const home_black ="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MXB4IiB2aWV3Qm94PSIwIDAgNDAgNDEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjEgKDc4MTM2KSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5Db21iaW5lZCBTaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLmkJzntKJf5Y6G5Y+y6K6w5b2VIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTc5LjAwMDAwMCwgLTE0Ny4wMDAwMDApIiBmaWxsPSIjMDAwMDAwIj4KICAgICAgICAgICAgPGcgaWQ9Iuagh+mimOagjyI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i6L+U5Zue5ZKM6aaW6aG1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMC4wMDAwMDAsIDEyNi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNzQuNzc0OTMxLDQ5LjIxODM3MzcgQzE3NC43NzY4MjQsNDkuMTU3MjA2MiAxNzQuNzc3Nzc4LDQ5LjA5NTgwMDYgMTc0Ljc3Nzc3OCw0OS4wMzQxNzEgQzE3NC43Nzc3NzgsNDUuODI0MTQzOSAxNzIuMTkwOTc5LDQzLjIyMTkwMjggMTY5LDQzLjIyMTkwMjggQzE2NS44MDkwMjEsNDMuMjIxOTAyOCAxNjMuMjIyMjIyLDQ1LjgyNDE0MzkgMTYzLjIyMjIyMiw0OS4wMzQxNzEgQzE2My4yMjIyMjIsNDkuMDk1ODAwNiAxNjMuMjIzMTc2LDQ5LjE1NzIwNjIgMTYzLjIyNTA2OSw0OS4yMTgzNzM3IEwxNjMuMjIxOTgsNDkuMjE4MzczNyBMMTYzLjIyMTk4LDU5LjMxNzQxNDcgQzE2My4yMjE5OCw2MC43OTg5NjU2IDE2Mi4wMjA5NDYsNjIgMTYwLjUzOTM5NSw2MiBMMTUxLjY4MjU4NSw2MiBDMTUwLjIwMTAzNCw2MiAxNDksNjAuNzk4OTY1NiAxNDksNTkuMzE3NDE0NyBMMTQ5LDQwLjE5OTE5NjkgQzE0OSwzOS4yMTQxMzI0IDE0OS40MDYyNTcsMzguMjcyNjc0MSAxNTAuMTIyOTUsMzcuNTk2ODc2IEwxNjYuOTM3ODcyLDIxLjc0MTQyNjQgQzE2Ny45ODU1OTksMjAuNzUzNDg0NCAxNjkuNjI2NDQ4LDIwLjc2OTAzMDQgMTcwLjY1NTI2OCwyMS43NzY2NDY1IEwxODcuOTI1OTE2LDM4LjY5MTM1NzMgQzE4OC42MTI4NjQsMzkuMzY0MTQ3OCAxODksNDAuMjg1MTg1OCAxODksNDEuMjQ2NzE4MiBMMTg5LDU5LjMxNzQxNDcgQzE4OSw2MC43OTg5NjU2IDE4Ny43OTg5NjYsNjIgMTg2LjMxNzQxNSw2MiBMMTc3LjUxMzIyOCw2MiBDMTc2LjAzMTY3Nyw2MiAxNzQuODMwNjQzLDYwLjc5ODk2NTYgMTc0LjgzMDY0Myw1OS4zMTc0MTQ3IEwxNzQuODMwNjQzLDQ5LjIxODM3MzcgTDE3NC43NzQ5MzEsNDkuMjE4MzczNyBaIiBpZD0iQ29tYmluZWQtU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==";
const play = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTUwcHgiIGhlaWdodD0iMTUwcHgiIHZpZXdCb3g9IjAgMCAxNTAgMTUwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1NS4xICg3ODEzNikgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAgICA8dGl0bGU+cGxheTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLmkq3mlL7pobVf5YiG5Lqr54q25oCBIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDY1LjAwMDAwMCwgLTc3Ni4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Ium7keiDtuWUseeJhyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI2LjAwMDAwMCwgNDM3LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IuaSreaUvui9rOebmCI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IuWwgemdoiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTM5LjAwMDAwMCwgMTM5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i5pKt5pS+IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzAuMDAwMDAwLCAxNzAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0icGxheSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAuMDAwMDAwLCAzMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMS41LDc1IEMxLjUsMTE1LjU5MzMxMiAzNC40MDY2ODgsMTQ4LjUgNzUsMTQ4LjUgQzExNS41OTMzMTIsMTQ4LjUgMTQ4LjUsMTE1LjU5MzMxMiAxNDguNSw3NSBDMTQ4LjUsMzQuNDA2Njg4IDExNS41OTMzMTIsMS41IDc1LDEuNSBDMzQuNDA2Njg4LDEuNSAxLjUsMzQuNDA2Njg4IDEuNSw3NSBaIiBpZD0iRmlsbC0xIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMyIgZmlsbC1vcGFjaXR5PSIwLjQiIGZpbGw9IiMwMDAwMDAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNTcsNTIuMTM4MTI5MyBMNTcsOTcuODU5ODcxNCBDNTcsMTAwLjA2OTAxIDU4Ljc5MDg2MSwxMDEuODU5ODcxIDYxLDEwMS44NTk4NzEgQzYxLjczNzMwMjQsMTAxLjg1OTg3MSA2Mi40NjAyNTk1LDEwMS42NTYwODggNjMuMDg5MDIyOCwxMDEuMjcxMDI3IEwxMDAuNDI4NDQ1LDc4LjQwNDAyNTYgQzEwMi4zMTIzNzUsNzcuMjUwMjkwMiAxMDIuOTA0MzE0LDc0Ljc4Nzc3NjQgMTAxLjc1MDU3OCw3Mi45MDM4NDcgQzEwMS40MjAzMzgsNzIuMzY0NTk5IDEwMC45NjY5NTgsNzEuOTExMzI2OCAxMDAuNDI3NjMxLDcxLjU4MTIxNTIgTDYzLjA4ODIwOCw0OC43MjY0NzQ3IEM2MS4yMDQwMDMyLDQ3LjU3MzE4OTMgNTguNzQxNjMwOCw0OC4xNjU3MTY1IDU3LjU4ODM0NTQsNTAuMDQ5OTIxMyBDNTcuMjAzNjA0Niw1MC42Nzg0OTk4IDU3LDUxLjQwMTE1MTUgNTcsNTIuMTM4MTI5MyBaIiBpZD0iUGF0aC03IiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+";
const pause = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTUwcHgiIGhlaWdodD0iMTUwcHgiIHZpZXdCb3g9IjAgMCAxNTAgMTUwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1NS4xICg3ODEzNikgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAgICA8dGl0bGU+5pKt5pS+PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuaSreaUvumhtV/liIbkuqvnirbmgIEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NjUuMDAwMDAwLCAtNzc2LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i6buR6IO25ZSx54mHIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjYuMDAwMDAwLCA0MzcuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i5pKt5pS+6L2s55uYIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i5bCB6Z2iIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzkuMDAwMDAwLCAxMzkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSLmkq3mlL4iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3MC4wMDAwMDAsIDE3MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJwbGF5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMC4wMDAwMDAsIDMwLjAwMDAwMCkiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC40IiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEuNSw3NSBDMS41LDExNS41OTMzMTIgMzQuNDA2Njg4LDE0OC41IDc1LDE0OC41IEMxMTUuNTkzMzEyLDE0OC41IDE0OC41LDExNS41OTMzMTIgMTQ4LjUsNzUgQzE0OC41LDM0LjQwNjY4OCAxMTUuNTkzMzEyLDEuNSA3NSwxLjUgQzM0LjQwNjY4OCwxLjUgMS41LDM0LjQwNjY4OCAxLjUsNzUgWiIgaWQ9IkZpbGwtMSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9InBhdXNlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMC4wMDAwMDAsIDMwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xLjUsNzUgQzEuNSwxMTUuNTkzMzEyIDM0LjQwNjY4OCwxNDguNSA3NSwxNDguNSBDMTE1LjU5MzMxMiwxNDguNSAxNDguNSwxMTUuNTkzMzEyIDE0OC41LDc1IEMxNDguNSwzNC40MDY2ODggMTE1LjU5MzMxMiwxLjUgNzUsMS41IEMzNC40MDY2ODgsMS41IDEuNSwzNC40MDY2ODggMS41LDc1IFoiIGlkPSJGaWxsLTEiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIzIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTYyLDQ1IEM2NS4zMTM3MDg1LDQ1IDY4LDQ3LjY4NjI5MTUgNjgsNTEgTDY4LDk5IEM2OCwxMDIuMzEzNzA4IDY1LjMxMzcwODUsMTA1IDYyLDEwNSBDNTguNjg2MjkxNSwxMDUgNTYsMTAyLjMxMzcwOCA1Niw5OSBMNTYsNTEgQzU2LDQ3LjY4NjI5MTUgNTguNjg2MjkxNSw0NSA2Miw0NSBaIE04OSw0NSBDOTIuMzEzNzA4NSw0NSA5NSw0Ny42ODYyOTE1IDk1LDUxIEw5NSw5OSBDOTUsMTAyLjMxMzcwOCA5Mi4zMTM3MDg1LDEwNSA4OSwxMDUgQzg1LjY4NjI5MTUsMTA1IDgzLDEwMi4zMTM3MDggODMsOTkgTDgzLDUxIEM4Myw0Ny42ODYyOTE1IDg1LjY4NjI5MTUsNDUgODksNDUgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+";
const deleteInputIcon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzZweCIgaGVpZ2h0PSIzNnB4IiB2aWV3Qm94PSIwIDAgMzYgMzYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjEgKDc4MTM2KSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT7lj4nlj4k8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsLW9wYWNpdHk9IjAuNiI+CiAgICAgICAgPGcgaWQ9IuaQnOe0ol/ogZTmg7MiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MzYuMDAwMDAwLCAtMjk2LjAwMDAwMCkiIGZpbGw9IiMwMDAwMDAiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDguMDAwMDAwLCAyNjEuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i5Y+J5Y+JIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4ODguMDAwMDAwLCAzNS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTgsMTUuNjY0NzkzOSBMMi44MTkwMDQ3OCwwLjQ4Mzc5ODcxMSBDMi4xNzU5MDI0NywtMC4xNTkzMDM2MDQgMS4xMzA4MDM4MiwtMC4xNTg4OTQ4NzggMC40ODU5NTQ0NzIsMC40ODU5NTQ0NzIgQy0wLjE2MzM5MDY1LDEuMTM1Mjk5NTkgLTAuMTU5ODYwMDQ2LDIuMTc1MzQ2MDIgMC40ODM3OTg3MTEsMi44MTkwMDQ3OCBMMTUuNjY0NzkzOSwxOCBMMC40ODM3OTg3MTEsMzMuMTgwOTk1MiBDLTAuMTU5MzAzNjA0LDMzLjgyNDA5NzUgLTAuMTU4ODk0ODc4LDM0Ljg2OTE5NjIgMC40ODU5NTQ0NzIsMzUuNTE0MDQ1NSBDMS4xMzUyOTk1OSwzNi4xNjMzOTA2IDIuMTc1MzQ2MDIsMzYuMTU5ODYgMi44MTkwMDQ3OCwzNS41MTYyMDEzIEwxOCwyMC4zMzUyMDYxIEwzMy4xODA5OTUyLDM1LjUxNjIwMTMgQzMzLjgyNDA5NzUsMzYuMTU5MzAzNiAzNC44NjkxOTYyLDM2LjE1ODg5NDkgMzUuNTE0MDQ1NSwzNS41MTQwNDU1IEMzNi4xNjMzOTA2LDM0Ljg2NDcwMDQgMzYuMTU5ODYsMzMuODI0NjU0IDM1LjUxNjIwMTMsMzMuMTgwOTk1MiBMMjAuMzM1MjA2MSwxOCBMMzUuNTE2MjAxMywyLjgxOTAwNDc4IEMzNi4xNTkzMDM2LDIuMTc1OTAyNDcgMzYuMTU4ODk0OSwxLjEzMDgwMzgyIDM1LjUxNDA0NTUsMC40ODU5NTQ0NzIgQzM0Ljg2NDcwMDQsLTAuMTYzMzkwNjUgMzMuODI0NjU0LC0wLjE1OTg2MDA0NiAzMy4xODA5OTUyLDAuNDgzNzk4NzExIEwxOCwxNS42NjQ3OTM5IFoiIGlkPSJDb21iaW5lZC1TaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=";
const deleteIcon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzlweCIgaGVpZ2h0PSIzOXB4IiB2aWV3Qm94PSIwIDAgMzkgMzkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjEgKDc4MTM2KSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5Db21iaW5lZCBTaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtb3BhY2l0eT0iMC4zIj4KICAgICAgICA8ZyBpZD0i5pCc57SiX+WOhuWPsuiusOW9lSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk5My4wMDAwMDAsIC00MjYuMDAwMDAwKSIgZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBhdGggZD0iTTk5Nyw0MzIgTDEwMjgsNDMyIEwxMDI4LDQ1OSBDMTAyOCw0NjIuMzEzNzA4IDEwMjUuMzEzNzEsNDY1IDEwMjIsNDY1IEwxMDAzLDQ2NSBDOTk5LjY4NjI5Miw0NjUgOTk3LDQ2Mi4zMTM3MDggOTk3LDQ1OSBMOTk3LDQzMiBaIE0xMDAwLDQzNSBMMTAwMCw0NTkgQzEwMDAsNDYwLjY1Njg1NCAxMDAxLjM0MzE1LDQ2MiAxMDAzLDQ2MiBMMTAyMiw0NjIgQzEwMjMuNjU2ODUsNDYyIDEwMjUsNDYwLjY1Njg1NCAxMDI1LDQ1OSBMMTAyNSw0MzUgTDEwMDAsNDM1IFogTTEwMjQsNDMyIEwxMDMwLjUsNDMyIEMxMDMxLjMyODQzLDQzMiAxMDMyLDQzMi42NzE1NzMgMTAzMiw0MzMuNSBDMTAzMiw0MzQuMzI4NDI3IDEwMzEuMzI4NDMsNDM1IDEwMzAuNSw0MzUgTDk5NC41LDQzNSBDOTkzLjY3MTU3Myw0MzUgOTkzLDQzNC4zMjg0MjcgOTkzLDQzMy41IEM5OTMsNDMyLjY3MTU3MyA5OTMuNjcxNTczLDQzMiA5OTQuNSw0MzIgTDEwMDEsNDMyIEMxMDAxLDQyOC42ODYyOTIgMTAwMy42ODYyOSw0MjYgMTAwNyw0MjYgTDEwMTgsNDI2IEMxMDIxLjMxMzcxLDQyNiAxMDI0LDQyOC42ODYyOTIgMTAyNCw0MzIgWiBNMTAyMSw0MzIgQzEwMjEsNDMwLjM0MzE0NiAxMDE5LjY1Njg1LDQyOSAxMDE4LDQyOSBMMTAwNyw0MjkgQzEwMDUuMzQzMTUsNDI5IDEwMDQsNDMwLjM0MzE0NiAxMDA0LDQzMiBMMTAyMSw0MzIgWiBNMTAwNy41LDQzOCBDMTAwOC4zMjg0Myw0MzggMTAwOSw0MzguNjcxNTczIDEwMDksNDM5LjUgTDEwMDksNDU3LjUgQzEwMDksNDU4LjMyODQyNyAxMDA4LjMyODQzLDQ1OSAxMDA3LjUsNDU5IEMxMDA2LjY3MTU3LDQ1OSAxMDA2LDQ1OC4zMjg0MjcgMTAwNiw0NTcuNSBMMTAwNiw0MzkuNSBDMTAwNiw0MzguNjcxNTczIDEwMDYuNjcxNTcsNDM4IDEwMDcuNSw0MzggWiBNMTAxNy41LDQzOCBDMTAxOC4zMjg0Myw0MzggMTAxOSw0MzguNjcxNTczIDEwMTksNDM5LjUgTDEwMTksNDU3LjUgQzEwMTksNDU4LjMyODQyNyAxMDE4LjMyODQzLDQ1OSAxMDE3LjUsNDU5IEMxMDE2LjY3MTU3LDQ1OSAxMDE2LDQ1OC4zMjg0MjcgMTAxNiw0NTcuNSBMMTAxNiw0MzkuNSBDMTAxNiw0MzguNjcxNTczIDEwMTYuNjcxNTcsNDM4IDEwMTcuNSw0MzggWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=";
const share = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjEgKDc4MTM2KSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT7mrYzljZXor6bmg4XliIbkuqtAMnggPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICAgICAgICA8ZyBpZD0i5q2M5Y2V6K+m5oOFX+WIhuS6q+eKtuaAgSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxNi4wMDAwMDAsIC03NzAuMDAwMDAwKSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjMiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDguMDAwMDAwLCA3MzguMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTY3LjAwMDAwMCwgMzAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IuatjOWNleivpuaDheWIhuS6q0AyeC0iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjAuNjg3NSwzLjUgQzEwLjg0OTkyNzksMy41IDIuODc1LDExLjQ3NDkyNzkgMi44NzUsMjEuMzEyNSBDMi44NzUsMzEuMTUwMDcyMSAxMC44NDk5Mjc5LDM5LjEyNSAyMC42ODc1LDM5LjEyNSBMMjAuNjg3NSwzOS4xMjUgQzMwLjUyNTA3MjEsMzkuMTI1IDM4LjUsMzEuMTUwMDcyMSAzOC41LDIxLjMxMjUiIGlkPSJQYXRoIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5bGluZSBpZD0iUGF0aC03IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBwb2ludHM9IjI4LjUgMi44NzUgMzkuMTI1IDIuODc1IDM5LjEyNSAxMy41Ij48L3BvbHlsaW5lPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjMuODEyNSwxOC42NTYyNSBMMzguODEyNSwzLjE4NzUiIGlkPSJQYXRoLTExIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=";
const subscribe = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzZweCIgaGVpZ2h0PSIzNnB4IiB2aWV3Qm94PSIwIDAgMzYgMzYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjEgKDc4MTM2KSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5Hcm91cCAxMDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLmrYzljZXor6bmg4Vf5YiG5Lqr54q25oCBIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjgxLjAwMDAwMCwgLTc3MS4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTktQ29weSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTU1LjAwMDAwMCwgNzM4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTExIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjMuMDAwMDAwLCAzMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTAiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTksMTkgTDE5LDUgQzE5LDMuODk1NDMwNSAxOS44OTU0MzA1LDMgMjEsMyBDMjIuMTA0NTY5NSwzIDIzLDMuODk1NDMwNSAyMyw1IEwyMywxOSBMMzcsMTkgQzM4LjEwNDU2OTUsMTkgMzksMTkuODk1NDMwNSAzOSwyMSBDMzksMjIuMTA0NTY5NSAzOC4xMDQ1Njk1LDIzIDM3LDIzIEwyMywyMyBMMjMsMzcgQzIzLDM4LjEwNDU2OTUgMjIuMTA0NTY5NSwzOSAyMSwzOSBDMTkuODk1NDMwNSwzOSAxOSwzOC4xMDQ1Njk1IDE5LDM3IEwxOSwyMyBMNSwyMyBDMy44OTU0MzA1LDIzIDMsMjIuMTA0NTY5NSAzLDIxIEMzLDE5Ljg5NTQzMDUgMy44OTU0MzA1LDE5IDUsMTkgTDE5LDE5IFoiIGlkPSJDb21iaW5lZC1TaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+";
const playIconAll = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjBweCIgaGVpZ2h0PSI2MHB4IiB2aWV3Qm94PSIwIDAgNjAgNjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5wbGF5aWNvbl81NHB4PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbC1vcGFjaXR5PSIwLjgiPgogICAgICAgIDxnIGlkPSLmrYzljZXor6bmg4Vf5peg5oyJ6ZKuIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDguMDAwMDAwLCAtNzgzLjAwMDAwMCkiIGZpbGw9IiMwMDAwMDAiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDczOC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLmkq3mlL7lhajpg6giPgogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ4LjAwMDAwMCwgNDUuMDAwMDAwKSIgaWQ9InBsYXlpY29uXzU0cHgiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzAsMCBDNDYuNTY4ODg4OSwwIDYwLDEzLjQzMTExMTEgNjAsMzAgQzYwLDQ2LjU2ODg4ODkgNDYuNTY4ODg4OSw2MCAzMCw2MCBDMTMuNDMxMTExMSw2MCAwLDQ2LjU2ODg4ODkgMCwzMCBDMCwxMy40MzExMTExIDEzLjQzMTExMTEsMCAzMCwwIFogTTMwLDQgQzE1LjY0MDQxNjcsNCA0LDE1LjY0MDQxNjcgNCwzMCBDNCw0NC4zNTk1ODMzIDE1LjY0MDQxNjcsNTYgMzAsNTYgQzQ0LjM1OTU4MzMsNTYgNTYsNDQuMzU5NTgzMyA1NiwzMCBDNTYsMTUuNjQwNDE2NyA0NC4zNTk1ODMzLDQgMzAsNCBaIE0yMy4wMDA5NTA5LDIwLjk2MDUzODQgQzIzLjAxMzk0NjMsMjAuNjExODI4NSAyMy4yMDQ1NDU1LDE4LjEwMjI3MjcgMjYsMTkuNSBMMjYsMTkuNSBMMzkuNSwyOC41IEMzOS41LDI4LjUgNDIuNSwzMCAzOS41LDMxLjUgTDM5LjUsMzEuNSBMMjYsNDAuNSBDMjYsNDAuNSAyMyw0MiAyMywzOSBMMjMsMzkgWiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+";


export {
  searchIcon, leftArrow, leftArrow_black, home, home_black,
  play, pause, deleteInputIcon, deleteIcon, share,
  subscribe, playIconAll
}