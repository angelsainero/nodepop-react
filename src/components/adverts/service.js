import client from '../../api/client';

const advertsURL = '/api/v1/adverts'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0NzgyNWMyYy1hODBlLTQ1ZWYtODE3MS1hZTA5NjliN2M5ZjkiLCJpYXQiOjE2ODE5MjIyOTksImV4cCI6MTcxMzQ3OTg5OX0.QTWr1OpUEZ6ucyhEbJfctFf8T7HESX6BgYg3zVQax8E'

const auth = {
    headers: { Authorization: `Bearer ${token}` }
}

export const getLatestAdverts = () => {
    return client.get(advertsURL, auth);
};
