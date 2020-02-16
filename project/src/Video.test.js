import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import Video from './Video';

beforeAll(() => {
    jest.spyOn(global, 'fetch').mockImplementation(() => {
        return Promise.resolve({
            status: 200,
            json: () => {
                return Promise.resolve([
                    {
                        "Film" : {
                          "file_url" : "...",
                          "title" : "...",
                          "synopsis_url" : "..."
                        },
                        "Chapters": [
                          {
                            "pos": "0",
                            "title": "Start"
                          },
                        ],
                        "Waypoints":[
                          {
                            "lat":"32.42",
                            "lng":"-90.13",
                            "label":"Place 1",
                            "timestamp":"45"
                          },
                        ],
                        "Keywords": [
                          {
                            "pos": "0",
                            "data": [
                              {
                                "title":"Mot clef 1",
                                "url":"url de la page"
                              },
                            ]
                          },
                        ]
                      }
                ]);
            }
        });
    });
});

afterAll(() => {
    fetch.mockClear();
})

test("backend is called", () => {
    render(<Video />);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith("https://imr3-react.herokuapp.com/backend");
})