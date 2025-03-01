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

package httpegress

import (
	"os"
	"testing"

	"github.com/microbus-io/fabric/utils"
	"github.com/microbus-io/testarossa"
)

func TestHttpegress_Versioning(t *testing.T) {
	t.Parallel()
	
	hash, err := utils.SourceCodeSHA256(".")
	if testarossa.NoError(t, err) {
		testarossa.Equal(t, hash, SourceCodeSHA256, "SourceCodeSHA256 is not up to date")
	}
	buf, err := os.ReadFile("version-gen.go")
	if testarossa.NoError(t, err) {
		testarossa.Contains(t, string(buf), hash, "SHA256 in version-gen.go is not up to date")
	}
}
