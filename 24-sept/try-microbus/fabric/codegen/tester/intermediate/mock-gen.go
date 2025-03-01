/*
Copyright (c) 2023-2024 Microbus LLC and various contributors

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// Code generated by Microbus. DO NOT EDIT.

package intermediate

import (
	"context"
	"net/http"
	"time"

	"github.com/microbus-io/fabric/connector"
	"github.com/microbus-io/fabric/errors"

	"github.com/microbus-io/fabric/codegen/tester/testerapi"
)

var (
	_ context.Context
	_ *http.Request
	_ time.Duration
	_ *errors.TracedError
	_ testerapi.Client
)

// Mock is a mockable version of the codegen.test microservice, allowing functions, event sinks and web handlers to be mocked.
type Mock struct {
	*Intermediate
	mockStringCut func(ctx context.Context, s string, sep string) (before string, after string, found bool, err error)
	mockPointDistance func(ctx context.Context, p1 testerapi.XYCoord, p2 *testerapi.XYCoord) (d float64, err error)
	mockShiftPoint func(ctx context.Context, p *testerapi.XYCoord, x float64, y float64) (shifted *testerapi.XYCoord, err error)
	mockLinesIntersection func(ctx context.Context, l1 testerapi.XYLine, l2 *testerapi.XYLine) (b bool, err error)
	mockSubArrayRange func(ctx context.Context, httpRequestBody []int, min int, max int) (httpResponseBody []int, httpStatusCode int, err error)
	mockSumTwoIntegers func(ctx context.Context, x int, y int) (sum int, httpStatusCode int, err error)
	mockFunctionPathArguments func(ctx context.Context, named string, path2 string, suffix string) (joined string, err error)
	mockNonStringPathArguments func(ctx context.Context, named int, path2 bool, suffix float64) (joined string, err error)
	mockUnnamedFunctionPathArguments func(ctx context.Context, path1 string, path2 string, path3 string) (joined string, err error)
	mockPathArgumentsPriority func(ctx context.Context, foo string) (echo string, err error)
	mockWhatTimeIsIt func(ctx context.Context) (t time.Time, err error)
	mockOnDiscoveredSink func(ctx context.Context, p testerapi.XYCoord, n int) (q testerapi.XYCoord, m int, err error)
	mockEcho func(w http.ResponseWriter, r *http.Request) (err error)
	mockMultiValueHeaders func(w http.ResponseWriter, r *http.Request) (err error)
	mockWebPathArguments func(w http.ResponseWriter, r *http.Request) (err error)
	mockUnnamedWebPathArguments func(w http.ResponseWriter, r *http.Request) (err error)
	mockDirectoryServer func(w http.ResponseWriter, r *http.Request) (err error)
	mockHello func(w http.ResponseWriter, r *http.Request) (err error)
}

// NewMock creates a new mockable version of the microservice.
func NewMock() *Mock {
	m := &Mock{}
	m.Intermediate = NewService(m, 7357) // Stands for TEST
	return m
}

// OnStartup makes sure that the mock is not executed in a non-dev environment.
func (svc *Mock) OnStartup(ctx context.Context) (err error) {
	if svc.Deployment() != connector.LOCAL && svc.Deployment() != connector.TESTING {
		return errors.Newf("mocking disallowed in '%s' deployment", svc.Deployment())
	}
	return nil
}

// OnShutdown is a no op.
func (svc *Mock) OnShutdown(ctx context.Context) (err error) {
	return nil
}

// MockStringCut sets up a mock handler for the StringCut endpoint.
func (svc *Mock) MockStringCut(handler func(ctx context.Context, s string, sep string) (before string, after string, found bool, err error)) *Mock {
	svc.mockStringCut = handler
	return svc
}

// StringCut runs the mock handler set by MockStringCut.
func (svc *Mock) StringCut(ctx context.Context, s string, sep string) (before string, after string, found bool, err error) {
	if svc.mockStringCut == nil {
		err = errors.New("mocked endpoint 'StringCut' not implemented")
		return
	}
	return svc.mockStringCut(ctx, s, sep)
}

// MockPointDistance sets up a mock handler for the PointDistance endpoint.
func (svc *Mock) MockPointDistance(handler func(ctx context.Context, p1 testerapi.XYCoord, p2 *testerapi.XYCoord) (d float64, err error)) *Mock {
	svc.mockPointDistance = handler
	return svc
}

// PointDistance runs the mock handler set by MockPointDistance.
func (svc *Mock) PointDistance(ctx context.Context, p1 testerapi.XYCoord, p2 *testerapi.XYCoord) (d float64, err error) {
	if svc.mockPointDistance == nil {
		err = errors.New("mocked endpoint 'PointDistance' not implemented")
		return
	}
	return svc.mockPointDistance(ctx, p1, p2)
}

// MockShiftPoint sets up a mock handler for the ShiftPoint endpoint.
func (svc *Mock) MockShiftPoint(handler func(ctx context.Context, p *testerapi.XYCoord, x float64, y float64) (shifted *testerapi.XYCoord, err error)) *Mock {
	svc.mockShiftPoint = handler
	return svc
}

// ShiftPoint runs the mock handler set by MockShiftPoint.
func (svc *Mock) ShiftPoint(ctx context.Context, p *testerapi.XYCoord, x float64, y float64) (shifted *testerapi.XYCoord, err error) {
	if svc.mockShiftPoint == nil {
		err = errors.New("mocked endpoint 'ShiftPoint' not implemented")
		return
	}
	return svc.mockShiftPoint(ctx, p, x, y)
}

// MockLinesIntersection sets up a mock handler for the LinesIntersection endpoint.
func (svc *Mock) MockLinesIntersection(handler func(ctx context.Context, l1 testerapi.XYLine, l2 *testerapi.XYLine) (b bool, err error)) *Mock {
	svc.mockLinesIntersection = handler
	return svc
}

// LinesIntersection runs the mock handler set by MockLinesIntersection.
func (svc *Mock) LinesIntersection(ctx context.Context, l1 testerapi.XYLine, l2 *testerapi.XYLine) (b bool, err error) {
	if svc.mockLinesIntersection == nil {
		err = errors.New("mocked endpoint 'LinesIntersection' not implemented")
		return
	}
	return svc.mockLinesIntersection(ctx, l1, l2)
}

// MockSubArrayRange sets up a mock handler for the SubArrayRange endpoint.
func (svc *Mock) MockSubArrayRange(handler func(ctx context.Context, httpRequestBody []int, min int, max int) (httpResponseBody []int, httpStatusCode int, err error)) *Mock {
	svc.mockSubArrayRange = handler
	return svc
}

// SubArrayRange runs the mock handler set by MockSubArrayRange.
func (svc *Mock) SubArrayRange(ctx context.Context, httpRequestBody []int, min int, max int) (httpResponseBody []int, httpStatusCode int, err error) {
	if svc.mockSubArrayRange == nil {
		err = errors.New("mocked endpoint 'SubArrayRange' not implemented")
		return
	}
	return svc.mockSubArrayRange(ctx, httpRequestBody, min, max)
}

// MockSumTwoIntegers sets up a mock handler for the SumTwoIntegers endpoint.
func (svc *Mock) MockSumTwoIntegers(handler func(ctx context.Context, x int, y int) (sum int, httpStatusCode int, err error)) *Mock {
	svc.mockSumTwoIntegers = handler
	return svc
}

// SumTwoIntegers runs the mock handler set by MockSumTwoIntegers.
func (svc *Mock) SumTwoIntegers(ctx context.Context, x int, y int) (sum int, httpStatusCode int, err error) {
	if svc.mockSumTwoIntegers == nil {
		err = errors.New("mocked endpoint 'SumTwoIntegers' not implemented")
		return
	}
	return svc.mockSumTwoIntegers(ctx, x, y)
}

// MockFunctionPathArguments sets up a mock handler for the FunctionPathArguments endpoint.
func (svc *Mock) MockFunctionPathArguments(handler func(ctx context.Context, named string, path2 string, suffix string) (joined string, err error)) *Mock {
	svc.mockFunctionPathArguments = handler
	return svc
}

// FunctionPathArguments runs the mock handler set by MockFunctionPathArguments.
func (svc *Mock) FunctionPathArguments(ctx context.Context, named string, path2 string, suffix string) (joined string, err error) {
	if svc.mockFunctionPathArguments == nil {
		err = errors.New("mocked endpoint 'FunctionPathArguments' not implemented")
		return
	}
	return svc.mockFunctionPathArguments(ctx, named, path2, suffix)
}

// MockNonStringPathArguments sets up a mock handler for the NonStringPathArguments endpoint.
func (svc *Mock) MockNonStringPathArguments(handler func(ctx context.Context, named int, path2 bool, suffix float64) (joined string, err error)) *Mock {
	svc.mockNonStringPathArguments = handler
	return svc
}

// NonStringPathArguments runs the mock handler set by MockNonStringPathArguments.
func (svc *Mock) NonStringPathArguments(ctx context.Context, named int, path2 bool, suffix float64) (joined string, err error) {
	if svc.mockNonStringPathArguments == nil {
		err = errors.New("mocked endpoint 'NonStringPathArguments' not implemented")
		return
	}
	return svc.mockNonStringPathArguments(ctx, named, path2, suffix)
}

// MockUnnamedFunctionPathArguments sets up a mock handler for the UnnamedFunctionPathArguments endpoint.
func (svc *Mock) MockUnnamedFunctionPathArguments(handler func(ctx context.Context, path1 string, path2 string, path3 string) (joined string, err error)) *Mock {
	svc.mockUnnamedFunctionPathArguments = handler
	return svc
}

// UnnamedFunctionPathArguments runs the mock handler set by MockUnnamedFunctionPathArguments.
func (svc *Mock) UnnamedFunctionPathArguments(ctx context.Context, path1 string, path2 string, path3 string) (joined string, err error) {
	if svc.mockUnnamedFunctionPathArguments == nil {
		err = errors.New("mocked endpoint 'UnnamedFunctionPathArguments' not implemented")
		return
	}
	return svc.mockUnnamedFunctionPathArguments(ctx, path1, path2, path3)
}

// MockPathArgumentsPriority sets up a mock handler for the PathArgumentsPriority endpoint.
func (svc *Mock) MockPathArgumentsPriority(handler func(ctx context.Context, foo string) (echo string, err error)) *Mock {
	svc.mockPathArgumentsPriority = handler
	return svc
}

// PathArgumentsPriority runs the mock handler set by MockPathArgumentsPriority.
func (svc *Mock) PathArgumentsPriority(ctx context.Context, foo string) (echo string, err error) {
	if svc.mockPathArgumentsPriority == nil {
		err = errors.New("mocked endpoint 'PathArgumentsPriority' not implemented")
		return
	}
	return svc.mockPathArgumentsPriority(ctx, foo)
}

// MockWhatTimeIsIt sets up a mock handler for the WhatTimeIsIt endpoint.
func (svc *Mock) MockWhatTimeIsIt(handler func(ctx context.Context) (t time.Time, err error)) *Mock {
	svc.mockWhatTimeIsIt = handler
	return svc
}

// WhatTimeIsIt runs the mock handler set by MockWhatTimeIsIt.
func (svc *Mock) WhatTimeIsIt(ctx context.Context) (t time.Time, err error) {
	if svc.mockWhatTimeIsIt == nil {
		err = errors.New("mocked endpoint 'WhatTimeIsIt' not implemented")
		return
	}
	return svc.mockWhatTimeIsIt(ctx)
}

// MockOnDiscoveredSink sets up a mock handler for the OnDiscoveredSink endpoint.
func (svc *Mock) MockOnDiscoveredSink(handler func(ctx context.Context, p testerapi.XYCoord, n int) (q testerapi.XYCoord, m int, err error)) *Mock {
	svc.mockOnDiscoveredSink = handler
	return svc
}

// OnDiscoveredSink runs the mock handler set by MockOnDiscoveredSink.
func (svc *Mock) OnDiscoveredSink(ctx context.Context, p testerapi.XYCoord, n int) (q testerapi.XYCoord, m int, err error) {
	if svc.mockOnDiscoveredSink == nil {
		err = errors.New("mocked endpoint 'OnDiscoveredSink' not implemented")
		return
	}
	return svc.mockOnDiscoveredSink(ctx, p, n)
}

// MockEcho sets up a mock handler for the Echo endpoint.
func (svc *Mock) MockEcho(handler func(w http.ResponseWriter, r *http.Request) (err error)) *Mock {
	svc.mockEcho = handler
	return svc
}

// Echo runs the mock handler set by MockEcho.
func (svc *Mock) Echo(w http.ResponseWriter, r *http.Request) (err error) {
	if svc.mockEcho == nil {
		return errors.New("mocked endpoint 'Echo' not implemented")
	}
	err = svc.mockEcho(w, r)
	return errors.Trace(err)
}

// MockMultiValueHeaders sets up a mock handler for the MultiValueHeaders endpoint.
func (svc *Mock) MockMultiValueHeaders(handler func(w http.ResponseWriter, r *http.Request) (err error)) *Mock {
	svc.mockMultiValueHeaders = handler
	return svc
}

// MultiValueHeaders runs the mock handler set by MockMultiValueHeaders.
func (svc *Mock) MultiValueHeaders(w http.ResponseWriter, r *http.Request) (err error) {
	if svc.mockMultiValueHeaders == nil {
		return errors.New("mocked endpoint 'MultiValueHeaders' not implemented")
	}
	err = svc.mockMultiValueHeaders(w, r)
	return errors.Trace(err)
}

// MockWebPathArguments sets up a mock handler for the WebPathArguments endpoint.
func (svc *Mock) MockWebPathArguments(handler func(w http.ResponseWriter, r *http.Request) (err error)) *Mock {
	svc.mockWebPathArguments = handler
	return svc
}

// WebPathArguments runs the mock handler set by MockWebPathArguments.
func (svc *Mock) WebPathArguments(w http.ResponseWriter, r *http.Request) (err error) {
	if svc.mockWebPathArguments == nil {
		return errors.New("mocked endpoint 'WebPathArguments' not implemented")
	}
	err = svc.mockWebPathArguments(w, r)
	return errors.Trace(err)
}

// MockUnnamedWebPathArguments sets up a mock handler for the UnnamedWebPathArguments endpoint.
func (svc *Mock) MockUnnamedWebPathArguments(handler func(w http.ResponseWriter, r *http.Request) (err error)) *Mock {
	svc.mockUnnamedWebPathArguments = handler
	return svc
}

// UnnamedWebPathArguments runs the mock handler set by MockUnnamedWebPathArguments.
func (svc *Mock) UnnamedWebPathArguments(w http.ResponseWriter, r *http.Request) (err error) {
	if svc.mockUnnamedWebPathArguments == nil {
		return errors.New("mocked endpoint 'UnnamedWebPathArguments' not implemented")
	}
	err = svc.mockUnnamedWebPathArguments(w, r)
	return errors.Trace(err)
}

// MockDirectoryServer sets up a mock handler for the DirectoryServer endpoint.
func (svc *Mock) MockDirectoryServer(handler func(w http.ResponseWriter, r *http.Request) (err error)) *Mock {
	svc.mockDirectoryServer = handler
	return svc
}

// DirectoryServer runs the mock handler set by MockDirectoryServer.
func (svc *Mock) DirectoryServer(w http.ResponseWriter, r *http.Request) (err error) {
	if svc.mockDirectoryServer == nil {
		return errors.New("mocked endpoint 'DirectoryServer' not implemented")
	}
	err = svc.mockDirectoryServer(w, r)
	return errors.Trace(err)
}

// MockHello sets up a mock handler for the Hello endpoint.
func (svc *Mock) MockHello(handler func(w http.ResponseWriter, r *http.Request) (err error)) *Mock {
	svc.mockHello = handler
	return svc
}

// Hello runs the mock handler set by MockHello.
func (svc *Mock) Hello(w http.ResponseWriter, r *http.Request) (err error) {
	if svc.mockHello == nil {
		return errors.New("mocked endpoint 'Hello' not implemented")
	}
	err = svc.mockHello(w, r)
	return errors.Trace(err)
}
